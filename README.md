# Taste it! is an online cooking book for storing and sharing recipes

## Purpose

This project is created for an exam at Software University Sofia and implements the specific assignment for development of Angular application.

## Description

The application provides a collection of recipes to prepare tasty food. Users can publish their own recipes and keep it as a personal cooking book for future reference how they prepare their favourite meals. Users can also browse the recipes published by other users, make comments about every recipe and like it to increase the recipe's rating.

### Public part

When opening the app all users can browse all the recipes available in the application. Recipes can be filtered based on their category. Recipes with the best ratings are listed first in the recipes collection. Every recipe can be explored in detail with all ingredients and preparation steps. Below the recipe description the comments of other users are visible. 

All users can register and login to use the private part of the application.

### Private part

After successfull registration or login users have access to all the functionalities of the application. They can post comments and give likes to the recipes of other users. 

Logged in users have their own collection of recipes where they can publish, update and delete their recipes. 

## Architecture

The application (the client-side) is developed using Angular and has a source folder holding modules, components, services, guards and intreceptors. The client application communicates to a server developed using Node.js and deployed at Heroku. The data is stored in a MongoDB collection.

### Modules and services

Appart from the app module, there are two more modules. One is the users module which encapuslates the service and components responsible for authenticating users and the user recipes service with components which manage CRUD operations for the user's collection of recipes. The other module is the recipes module which holds the components for displaying the app's collection of recipes using a recipe service back-end communication.

### Common Components

The application has 4 common components declared in the app module. These are accessible by all parts of the application. They are the Home, the Page Not Found, the Navigation bar and an Error component which renders errors received by the server.

### User Components

User components provide functionality for registering, logging users in and out. The user service provide functions to send requests to the back-end. 

### UserRecipes Components

When a user is logged-in the User recipes component is responsible for rendering the collection of user recipes. From this component the user can add new recipe, edit existing recipes and delete them. A form provides functionality to add new the new recipe or edit the existing one. Both components use the user recipe service to communicate to the back-end for data persistence.

### Recipe components

There are two main recipe components accessible for all users (logged-in or not). The recipes component provides the list of all recipes with filtering options based on the recipes category. The recipe component provides details for a single recipe. Two helper components are avalaible to logged-in users. These are recipeComments component and recipeLike component. 


### Guards

The AuthGuard is a class which
