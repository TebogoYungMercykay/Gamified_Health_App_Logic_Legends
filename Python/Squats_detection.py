print("Loading squarts exercise ...")
import cv2
import mediapipe as mp
import numpy as np

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose

class Squats_detection:
    def __init__(self, exercise_goal):
        self.exercise_goal = exercise_goal  # Store the exercise goal when the class is instantiated
        self.cap = cv2.VideoCapture(1)
        self.counter = 0
        self.stage = None

    def calculate_squats_angle(self, right_hip, left_hip, right_ankle, left_ankle, left_knee, right_knee):
        # Your angle calculation code here
        right_hip = np.array(right_hip)  # -> c
        right_ankle = np.array(right_ankle)  # -> a
        right_knee = np.array(right_knee)  # -> b

        left_hip = np.array(left_hip)
        left_ankle = np.array(left_ankle)
        left_knee = np.array(left_knee)

        left_radians = np.arctan2(right_hip[1] - right_knee[1], right_hip[0] - right_knee[0]) - np.arctan2(
            right_ankle[1] - right_knee[1], right_ankle[0] - right_knee[0])
        right_radians = np.arctan2(left_hip[1] - left_knee[1], left_hip[0] - left_knee[0]) - np.arctan2(
            left_ankle[1] - left_knee[1], left_ankle[0] - left_knee[0])

        left_angle = np.abs(left_radians * 180.0 / np.pi)
        right_angle = np.abs(right_radians * 180.0 / np.pi)

        if left_angle > 100.0:
            left_angle = 360 - left_angle

        if right_angle > 100.0:
            right_angle = 360 - right_angle

        return [left_angle, right_angle]

    def detect_squats(self):
        with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
            while self.cap.isOpened():
                ret, frame = self.cap.read()

                # Recolor image to RGB
                image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                image.flags.writeable = False

                # Make detection
                results = pose.process(image)

                # Recolor back to BGR
                image.flags.writeable = True
                image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

                # Extract landmarks
                try:
                    landmarks = results.pose_landmarks.landmark

                    # Hips and Legs coordinates
                    right_hip = [landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].x,
                                 landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].y]
                    left_hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x,
                                landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
                    right_ankle = [landmarks[mp_pose.PoseLandmark.RIGHT_ANKLE.value].x,
                                   landmarks[mp_pose.PoseLandmark.RIGHT_ANKLE.value].y]
                    left_ankle = [landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].x,
                                  landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].y]
                    left_knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x,
                                 landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
                    right_knee = [landmarks[mp_pose.PoseLandmark.RIGHT_KNEE.value].x,
                                  landmarks[mp_pose.PoseLandmark.RIGHT_KNEE.value].y]

                    squats_angle = self.calculate_squats_angle(right_hip, left_hip, right_ankle, left_ankle, left_knee,
                                                               right_knee)

                    # Visualize angle
                    cv2.putText(image, str(squats_angle),
                                tuple(np.multiply(left_knee, [640, 480]).astype(int)),
                                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA
                                )

                    # Curl counter logic
                    if squats_angle[0] <= 190:
                        self.stage = "Up"
                    if squats_angle[0] > 200 and self.stage == 'Up':
                        self.stage = "Down"
                        self.counter += 1
                        print(self.counter)
                        if self.counter >= self.exercise_goal:
                            print("Congratulations on achieving your goal")
                            break

                except:
                    pass

                # Render curl counter
                # Setup status box
                cv2.rectangle(image, (0, 0), (300, 100), (0, 204, 0), -1)

                # Rep data
                cv2.putText(image, 'REPS', (15, 12),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1, cv2.LINE_AA)
                cv2.putText(image, str(self.counter),
                            (10, 80),
                            cv2.FONT_HERSHEY_SIMPLEX, 2, (255, 255, 255), 2, cv2.LINE_AA)

                # Stage data
                cv2.putText(image, 'STAGE', (200, 12),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1, cv2.LINE_AA)
                cv2.putText(image, self.stage,
                            (200, 80),
                            cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)

                # Render detections
                mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS,
                                          mp_drawing.DrawingSpec(color=(191, 255, 0), thickness=5, circle_radius=3),
                                          mp_drawing.DrawingSpec(color=(50, 205, 50), thickness=5, circle_radius=3)
                                          )

                cv2.imshow('Mediapipe Feed', image)

                if cv2.waitKey(10) & 0xFF == ord('q'):
                    print('terminated ...')
                    break

            self.cap.release()
            cv2.destroyAllWindows()
