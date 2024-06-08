# Group 7 Full Stack Project: Collie Meets Beagle 🐾
## About
We want to build a website that will allow dog owners to create a user profile on our site and depending on what breed/preferences they have selected, our site will show tailored information to them. 
The user signs-up, inputs their preferences and will be allowed to use our LocationAPI to display information based on their sign-up information. E.g. Large breed users will be shown walking routes of 2km+ 

## Table of contents
<!--ts-->
* [Project Description](#project-description)
* [Local Setup Instructions](#local-setup-instructions)
* [Features](#features)
    * [UI/UX Design and wireframe](#uiux-design-and-wireframe)
    * [Login/Signup System](#functional-loginsignup-system)
    * [Find a Route Feature](#find-a-route-feature)
* [Future Improvements](#future-improvements)
* [Contributors](#contributors)

<!--te-->

## Project Description

The target audience will be mainly dog owners who are looking for recommendations based on their specific breed of dog (using LocationAPI) and to understand their breeds needs better. 

It could help in scenarios where a new dog owner has moved into the area and is searching for walking routes that fit their specific needs. 
Another scenario is a new dog parent looking to train their puppy and will need to develop their social skills around other dogs.

### How will you be working? What tools will help with that?
Our team will be working in short sprint cycles, with constant communication of new changes being stated in our work chat on slack. Additionally meetings will be made whenever any new idea or change is introduced. This allows all team members to be well established with all progress made on the app. 
We will make use of the paired programme technique, this enables us to work efficiently and learn together in a collaborative setting. Furthermore, the workload of the entire app will be split equally depending on each team member's wants and needs. 

### Technology and library used:
Jira
Slack
Figma
VScode
React
Redux
Jest
Node.JS
MongoDB
Google drive


We have created a roadmap (seen on figma: https://www.figma.com/file/eJMM61TC07tVzUr0sEWPKW/User-flow%2Froadmap%2Fplan?type=whiteboard&node-id=0-1)
We have organised the workload split depending on an individual members want to learn more about a specific feature to be implemented. E.g. Working on the Location feature to learn and practise more using APIs. 
As seen on the roadmap, the entire app's progress is shown in phases. Every member has been assigned work to do in every phase as agreed upon in our zoom meetings beforehand. 

* Week 1
Design & Planning & Research & Git setup
* Week 2
Coding
* Week 3
Coding & Testing & Combining entire app
* Week 4
Coding & Touch Ups & presentation & submission
## Local Setup Instructions
### Steps to run the application:

Ensure you have the following installed:
- Node.js (includes npm) - Download and install from nodejs.org.
- MongoDB - Download and install from mongodb.com. **Ensure MongoDB server is running.**
- You will also need a Google API key if you don't have one already, you can follow our instructions [here](#how-to-create-google-maps-api-key-for-free) to create one for free.
  
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

## Features

### UI/UX Design and wireframe
- Colour (Law of contracts meaning of color something like that)
- Utilised Figma to design
- You can find our wireframe [here](https://www.figma.com/file/aXhDpbtc9nfqlttswALZmx/web-app-design-idea%3F?type=design&node-id=0-1&mode=design&t=uS4Rtrcs5v1xFMbt-0).

### Functional Login/Signup System
(needs to insert an image or gif of Login here)
- Users can sign up for a new account using a username, email and password
- Utilising hash function to encrypt user's password
- Implement Redux to manage user's login state across the application

### Find a Route feature
- Location that directs users to the best walks for their dogs
- 
- 

### Breed Info feature
- Learn more about your breed page
- 

### Homepage feature
Preview of the user’s profile(?)


## Future Improvements

> Due to time constraints, 


## Contributors

- [Cecilia Chang](https://github.com/cecechang)
- [Chrissie Gomez](https://github.com/thisischrissie)
- [Emily Tsang](https://github.com/emts00)
- [Grace Tachie-Lewis](https://github.com/graceleewis)
- [Tara Patterson](https://github.com/Tara2805)

## How To Create Google Maps API key For Free

### What is it?
The Google Maps API (Application Programming Interface) is a set of web services and tools provided by Google that allows developers to integrate Google Maps into their websites, applications, and services. The API enables developers to customize maps, embed them into web pages - which is our primary use of the API in our project, create location-based services, and access various features and data from Google Maps.

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
10. Copy the Key into your project
