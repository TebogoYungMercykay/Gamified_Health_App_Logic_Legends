# 2023 Hackathon: Gamified Health App - Logic Legends

---
---

## Project team members

   - [Dan Phala](https://www.linkedin.com/in/dan-phala-7b91451b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Br4TxPQ2ZTg2ahxz%2BT6%2BSFg%3D%3D)

   - [Tumelo Mosomane](https://www.linkedin.com/in/tumelo4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVyd3ktLVTUuOPSRQ1HqXig%3D%3D)

   - [Sello (Tebogo) Selepe](https://www.linkedin.com/in/sello-selepe-tebogoyungmercykay?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bqrmd3uAVRXmfxLDp3m%2Fvxg%3D%3D)

   - [Bandisa Masilela](https://www.linkedin.com/in/bandisa?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYBrdD2AqQ8mfMgRuo%2FO6qg%3D%3D)

---

# Gamified Health App: Transforming Fitness with Fun and Rewards

- ## User Interface

   - <img src="./Images/UI_Design_Layout/UI_Design_Layout.png" width="600" height="500">


- ## Introduction

   In today's fast-paced world, staying motivated and committed to a healthy lifestyle can be challenging. To address this, we are excited to introduce our innovative **Gamified Health App**, a unique fitness platform that combines gamification, social interaction, and rewards to make exercise enjoyable and engaging for everyone.

- ## Problem Statement

   Many individuals struggle to maintain a regular exercise routine due to a lack of motivation, social support, and personalized feedback on their workouts. Traditional fitness apps often fall short in these areas, leaving users uninspired and demotivated.

- ## Solution

   Our Gamified Health App aims to revolutionize the fitness landscape by offering a comprehensive solution to these challenges. Here's how it works:

- ### Key Features

   1. **Exercise Groups:**
      - Users can easily create or join exercise groups with friends, family, neighbors, or colleagues.
      - These groups act as virtual workout communities, fostering motivation and accountability.

   2. **Leaderboards:**
      - Each exercise group has its own leaderboard that tracks members' progress and achievements.
      - Competition within groups adds an element of fun and motivation.

      - Leaderboard

         <img src="./Images/UI_Design_Layout/Leaderboard_UI.png" width="700" height="500">
      - Dashboard

         <img src="./Images/UI_Design_Layout/Dashboard_UI.png" width="700" height="500">

   3. **Camera Monitoring:**
      - The app utilizes the device's camera to monitor users as they perform exercises.


      - The following mathematical formula is used to calculate and determine the accuracy and correctness of the exercise:

      The formulas for the left and right legs (squarts detection) are:

      $$
      \text{leftRadians} = \arctan2(\text{leftHip}_y - \text{leftKnee}_y, \text{leftHip}_x - \text{leftKnee}_x) - \arctan2(\text{leftAnkle}_y - \text{leftKnee}_y, \text{leftAnkle}_x - \text{leftKnee}_x)
      $$



      $$
      \text{leftAngle} = |\text{leftRadians}| \times \frac{180}{\pi}
      $$


      $$
      \text{rightRadians} = \arctan2(\text{rightHip}_y - \text{rightKnee}_y, \text{rightHip}_x - \text{rightKnee}_x) - \arctan2(\text{rightAnkle}_y - \text{rightKnee}_y, \text{rightAnkle}_x - \text{rightKnee}_x)
      $$


      $$
      \text{rightAngle} = |\text{rightRadians}| \times \frac{180}{\pi}
      $$

      The formulas for the hands (curls detection) are:

      $$
      \theta_{\text{hand}} = \arctan2(y_{\text{wrist}} - y_{\text{elbow}}, x_{\text{wrist}} - x_{\text{elbow}}) - \arctan2(y_{\text{shoulder}} - y_{\text{elbow}}, x_{\text{shoulder}} - x_{\text{elbow}})
      $$

      $$
      \text{handAngle} = |\theta_{\text{hand}}| \times \frac{180}{\pi}
      $$

      - Users get to enjoy real-time feedback , with the help of media pipe that ensures that exercises are performed correctly and detection speed is also optimized for faster recognition and feedback. This also safeguard us against user cheating some of the exercises.

         <img src="./Images/pose_landmarks_index.png" width="750" height="600">

         <img src="./Images/Exercise(1).png" width="750" height="600">

         <img src="./Images/Exercise(2).png" width="750" height="600">

   4. **Rewards and Incentives:**
      - A portion of the ad revenue generated within the app is allocated as monthly rewards for top-performing group members.
      - Users earn rewards based on their performance and consistency.

   5. **Premium Membership:**
      - Subscribers to the premium tier enjoy additional benefits, including:
      - The ability to participate in multiple exercise groups without limitations.
      - Enhanced tracking and reporting features.
      - Priority access to new features and content.

- ### Tech Stack

   To make this vision a reality, we leverage a robust tech stack, including:
   - **React**: Cross-platform mobile development.
      - react-bootstrap
      - Tailwind CSS
      - Next.js
   - **MongoDB**:data management.
   - **Node.js**: Backend for scalability and responsiveness.
   - **Python**: Advanced computer vision for exercise monitoring.

- ## How It Works

   1. Users sign up and create their profiles.
   2. They can form or join exercise groups based on their preferences.
   3. Members of each group compete on a dynamic leaderboard.
   4. As they exercise, the app's camera monitoring provides real-time feedback and correctness scoring.
   5. Users earn rewards based on their performance, with top performers receiving monthly cash rewards.

- ## Monetization Strategy

   The app generates revenue through embedded ads. A portion of this ad revenue is reinvested into the community by rewarding the most dedicated and successful users. Premium subscriptions provide an additional source of income while offering enhanced features to subscribers.

- ## Conclusion

   Our Gamified Health App is not just another fitness application; it's a holistic solution designed to inspire and empower individuals to lead healthier lives. By combining the power of gamification, social interaction, and real-time monitoring, we make fitness not only effective but also enjoyable. With an inclusive approach that caters to both free and premium users, we aim to foster a global community of health-conscious individuals who are excited about their fitness journeys.

   Join us on this exciting adventure towards better health and fitness, one gamified workout at a time!

- ## Documentation

   - [Project Idea](Documents/Health-App-Idea.pdf)

   - [Project Requirements](Documents/Monkey_and_River_Hackathon_2023_Phase_1_Specs)

   - [Project Stages](Documents/MnR_Hackathon_2023_P1_Itinerary.pdf)

---
---

<p align="center">The End, Thank You</p>

---
---
