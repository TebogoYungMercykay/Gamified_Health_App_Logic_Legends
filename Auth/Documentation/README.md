# Schemas 

---

## User Schema:
* User ID(Primary Key)
* First Name
* Last Name
* Email
* Password(hashed)
* Date of Birth
* Gender
* Contact Information(Address, Phone Number)

## User Profile Schema:
* User ID (Foreign Key)
* Experience Points (XP)
* Achievements Unlocked
* Preferred Challenges
* Personalized Recommendations
* Friends List
  
## Challenges Schema:
* Challenge ID (Primary Key)
* Challenge Name
* Description
* Goal (e.g., steps per day, calories burned)
* Reward (XP, badges)
* Duration (start and end dates)
* Difficulty Level

## User-Challenge Relationship:
* User ID (Foreign Key)
* Challenge ID (Foreign Key)
* Status (in progress, completed, abandoned)

## Leaderboard Schema:    
* Leaderboard ID (Primary Key)
* Challenge ID (Foreign Key)
* User ID (Foreign Key)
* Rank
* Score (e.g., total XP earned)

## Choice and Preferences Schema:
* User ID (Foreign Key)
* Preferred Activities (e.g., running, cycling)
* Daily Step Goal
* Dietary Preferences

## Activity Tracking Schema:
* Activity ID (Primary Key)
* User ID (Foreign Key)
* Activity Type
* Date and Time
* Duration
* Distance
* Calories Burned

## Social Interaction Schema:
* Friendship ID (Primary Key)
* User ID (Foreign Key)
* Friend User ID (Foreign Key)
* Friendship Status (pending, accepted)

## Messages and Notifications Schema:
* Message ID (Primary Key)
* Sender User ID (Foreign Key)
* Receiver User ID (Foreign Key)
* Message Content
* Timestamp
* Notification Type (friend request, challenge update, etc.)

## Rewards and Badges Schema:
* Reward ID (Primary Key)
* User ID (Foreign Key)
* Reward Name
* Description
* Date Earned

## Settings Schema:
* User ID (Foreign Key)
* Notification Preferences
* Privacy Settings
* Theme Preferences

## Feedback and Suggestions Schema:
* Feedback ID (Primary Key)
* User ID (Foreign Key)
* Feedback Type (suggestion, bug report)
* Feedback Content
* Timestamp

## Privacy and Security Schema:
* Implement data privacy and security measures to protect user data, including encryption, access controls, and compliance with relevant regulations.


## Tutorial Schema: 
* Tutorial ID (Primary Key)
* Tutorial Title
* Description
* Content (text, images, videos)
* Duration
* Difficulty Level
* Relevant Tags or Categories
* Release Date

## User-Tutorial Interaction Schema: 
* Interaction ID (Primary Key)
* User ID (Foreign Key)
* Tutorial ID (Foreign Key)
* Completion Status (completed, in progress, not started)
* Progress (percentage)
* Date Started
* Date Completed

## Events Schema: 
* Event ID (Primary Key)
* Event Name
* Description
* Location
* Date and Time
* Duration
* Event Type (challenge, community run, seminar)
* Organizing Group or User ID (Foreign Key)
* Participants/Registrants
* Event Status (upcoming, completed, canceled)

## User-Event Registration Schema:   
* Registration ID (Primary Key)
* User ID (Foreign Key)
* Event ID (Foreign Key)
* Registration Date
* Participation Status (registered, attended, canceled)
* User Feedback (after attending)