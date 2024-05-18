Chong Chee Yong Coding Questions


Project Setup Instructions
Prerequisites

Ensure you have the following installed:

    Node.js (v12 or later)
    Yarn package manager
    CocoaPods (for iOS)

Installation
yarn install
cd ios && pod install
Open the .xcworkspace file in Xcode and run the project.

Project Structure

    App.js: The entry point of the application.
    MainScreen.js: The main screen containing the hamburger menu and two buttons for different functionalities.
    Question1.js: Contains two input fields for numbers and a submit button to count their sum.
    Question3.js: Contains two input fields, one for sorted numbers and another for a target number, and a button to find indices.


Screens and Navigation

    EntryPoint: The default screen which will navigate to MainScreen after 1 second.
    MainScreen: Contains a Hamburger Menu and two buttons which navigate to Question 1 and Question 3 screens respectively.

Question 1: Sum of Two Numbers

    Contains two input fields for entering numbers.
    A submit button that, when clicked, displays the sum of the two numbers.

Question 3: Find Indices of Target Sum

    Contains an input field for sorted numbers.
    Contains an input field for a target number.
    A button that, when clicked, finds and displays the indices of two numbers in the sorted list that add up to the target number.


also provide screenshot folder 