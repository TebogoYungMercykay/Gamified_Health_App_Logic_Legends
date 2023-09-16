
exercise_type = input("Which exercise would you like to perform ? \n A. Dumbbell curls \n B. Squats \n Type your option letter ->  ")
exercise_goal = int(input("How many reps are you doing today ? ->  "))

print("Enjoy your exercises")

if exercise_type == 'A':
    from Curls_detection import Curls_detection  
    curls_detector = Curls_detection(exercise_goal) 
    curls_detector.detect_curls()  
elif exercise_type == 'B':
    from Squats_detection import Squats_detection
    squats_detector = Squats_detection(exercise_goal)
    squats_detector.detect_squats()  
