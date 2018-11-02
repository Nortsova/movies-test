# Configuring
firebaseconfig.js which is root folder is used for configuring firebase.
You can use your own database. In firebaseconfig.example.js you can see examples of your config.
# Development
To get started install the [Expo](https://expo.io/learn) on your system.
Install all dependencies using:
```sh
$ npm install
```
For starting development server execute:
```sh
$ expo start
```
Open localhost:19002 in your browser and you can see log of building.
To see this app you can use expo on your mobile phone or using X-code.

Code divides by this folders:
-- actions
-- api
-- assets
-- components
-- constants
-- containers
-- reducers
-- sagas
-- store
-- utils

I use redux for easier use store. And i use sagas for side effects like connecting to database or requests to other API.
In containers i hold all aplication screens.
All components located in components folder.