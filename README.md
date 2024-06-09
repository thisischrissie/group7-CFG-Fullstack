# Group 7 Full Stack Project: Collie Meets Beagle 🐾
## About
**_Connecting Pet Pals, One Walk at a Time! Creating a vibrant community for dog enthusiasts, fostering a deeper sense of connection among fellow dog lovers._**

We aim to build a website for dog owners, allowing them to create user profiles and receive tailored information based on their selected breed and preferences. Users can sign up, input their preferences, and utilize the LocationAPI to display relevant information, such as walking routes for large breeds or learn more about their dog in the breed info page.

## Table of contents
<!--ts-->
* [Project Description](#project-description)
* [Local Setup Instructions](#local-setup-instructions)
* [Features](#features)
    * [UI/UX Design and wireframe](#%EF%B8%8F-uiux-design-and-wireframe)
    * [Login/Signup System](#-functional-loginsignup-system)
    * [Find a Route Feature](#-find-a-route-feature)
    * [Breed Info Feature](#-breed-info-feature)
    * [Homepage Feature](#-homepage-feature)
    * [Demo](#demo)
* [Future Improvements](#future-developments-)
* [Contributors](#contributors)

<!--te-->

## Project Description

Our target audience will be mainly dog owners who are looking for recommendations based on their specific breed of dog (using LocationAPI) and to understand their breeds needs better. 

It could help in scenarios where a new dog owner has moved into the area and is searching for walking routes that fit their specific needs. 
Another scenario is a new dog parent looking to train their puppy and will need to develop their social skills around other dogs.

### Working Methodology and Organisation of Workload
Our team will be working in short sprint cycles, with constant communication of new changes being stated in our work chat on slack. Additionally meetings will be made whenever any new idea or change is introduced. This allows all team members to be well established with all progress made on the app. 
We will make use of the paired programme technique, this enables us to work efficiently and learn together in a collaborative setting. Furthermore, the workload of the entire app will be split equally depending on each team member's wants and needs. 

### Technology and tools used:
- Jira
- Slack
- Figma
- VScode
- React
- Redux
- Jest
- Node.JS
- MongoDB
- Google drive


We have created a [roadmap](https://www.figma.com/file/eJMM61TC07tVzUr0sEWPKW/User-flow%2Froadmap%2Fplan?type=whiteboard&node-id=0-1).
We have organised the workload split depending on an individual members want to learn more about a specific feature to be implemented. E.g. Working on the Location feature to learn and practise more using APIs. 
As seen on the roadmap, the entire app's progress is shown in phases. Every member has been assigned work to do in every phase as agreed upon in our zoom meetings beforehand. 

## Local Setup Instructions
### Steps to run the application:

Ensure you have the following installed:
- Node.js (includes npm) - Download and install from nodejs.org.
- MongoDB - Download and install from mongodb.com. **Ensure MongoDB server is running.**
- You will also need to use a Google API key and copy that into our project if you don't have one already, you can follow our instructions [here](#how-to-create-google-maps-api-key-for-free) to create one for free.
  
1. Clone the Repository:
   
   ```
   git clone https://github.com/thisischrissie/group7-CFG-Fullstack.git
   ```
   and navigate to the project folder (group-7-project)
2. Set Up the Backend:
   Navigate to the backend directory (api) and install dependencies:
   ```
   cd api
   npm install
   ```
3. Run the Backend Server:
   ```
   node index.js
   ```
   (At this point, if the server is running successfully, you should receive a message saying "Server running on port 3001", data should be automatically imported into your MongoDB as well)
  
4. Open another terminal
   
5. Set Up the Frontend:
   Navigate to the frontend directory (webapp) and install dependencies:
   ```
   cd webapp
   npm install
   ```
6. Start the frontend development server:
   ```
   npm start
   ```
7. You can log in using our test account if you don't want to create an account:

   email: group7@test.com

   password: 1234567

   (for testing purposes only)

## Features

### ✏️ UI/UX Design and wireframe!

<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/thisischrissie/group7-CFG-Fullstack/assets/153684178/dcc76fdf-55d2-447d-b7dd-ac932233ee13" alt="Design Image 1" style="width: 48%;">
    <img src="https://github.com/thisischrissie/group7-CFG-Fullstack/assets/153684178/94b703e4-1f91-472a-ba57-467b3acbd4c4" alt="Design Image 2" style="width: 48%;">
</div>

- Applied ‘The Law of Contrast’ for effective, eye-catching UI and used [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=0F8482) to verify contrast ratios.
- Utilised Figma to design, you can find our wireframe [here](https://www.figma.com/file/aXhDpbtc9nfqlttswALZmx/web-app-design-idea%3F?type=design&node-id=0-1&mode=design&t=uS4Rtrcs5v1xFMbt-0).

### 🪄 Functional Login/Signup System
(needs to insert an image or gif of Login here)
- Utilises a hash function to securely encrypt users' passwords.
- Implements Redux to manage user's login state across the application
- Features a dynamic UI that toggles between login and registration forms.
- Displays error messages for missing fields or authentication failures.

### 🪵 Find a Route feature
- Enter customizable details to tailor walking preferences
- Location that directs users to the best walks for their dogs
- Perfectly adapt your route to fit your dogs needs

### 🐶 Breed Info feature
- Displays a searchable list of dog breeds with detailed information on their qualities, temperament, and care requirements.
- Allows users to click on a breed name to scroll smoothly to its specific section.
- Includes a "Back to Top" button for easy navigation.
- Helps users learn more about their dog breed through detailed breed-specific information.


### 🏠 Homepage feature
- See the pups near your location!

### DEMO



https://github.com/thisischrissie/group7-CFG-Fullstack/assets/153684178/af391ee2-c2f1-4c9d-bc81-bd69a67426c0






## Future Developments ✨

> Due to time constraints, we were unable to implement certain features that would significantly enhance the user experience. We recommend considering the following additions for future development:
- **Homepage Connect with more puppy pals**: Link to other user's puppy profiles via homepage
- **Sending/Accepting Friend Requests**: Enable users to connect with one another, fostering a community of dog walkers.
  
- **Chatroom**: Provide a platform for users to communicate, facilitating easier scheduling of dog walking times and dates together.
  
- **Third-Party Login Authentication**: Integrate login options via Google, Facebook, or Apple to streamline the signup and login process.
  
- **Location-Based Services**: Implement features that help users locate the nearest refill stations and waste bins, improving the overall dog-walking experience.


## Contributors

- [Cecilia Chang](https://github.com/cecechang)
- [Chrissie Gomez](https://github.com/thisischrissie)
- [Emily Tsang](https://github.com/emts00)
- [Grace Tachie-Lewis](https://github.com/graceleewis)
- [Tara Patterson](https://github.com/Tara2805)

## How To Create Google Maps API Key for Free

### What is it?
The Google Maps API (Application Programming Interface) is a set of web services and tools provided by Google that allows developers to integrate Google Maps into their websites, applications, and services. The API enables developers to customize maps, embed them into web pages - which is our primary use of the API in our project, create location-based services, and access various features and data from Google Maps. Please note that the use of VPNs and AD-Blockers may interfere with the API, so it is recommended you turn them off. 

### Steps:
1. Firstly Go to [Google Maps](https://console.cloud.google.com)
2. Sign In with your Google account and agree to the terms and conditions
3. Create a project and name it as you want
4. Select the project and click on it
5. Navigate to APIs and Services and  click on Libraries
6. Enable the following Libraries one by one
   - Google Javascript API
   - Google Place API
   - Google Direction  API
   - Google Geolocation API
   - Google Geocoding  API
7. Navigate to APIs and Services and  click on Credentials
8. Click on Create Credentials and then the API key will show up your screen
9. Now you can optionally restrict the API key.
10. Copy the Key into your project as plain text at the path /Webapp/.env
11. You should have all dependencies already installed at the beginning with 'npm install', so you are now ready to have fun with this API!
