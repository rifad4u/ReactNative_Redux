import React ,{ Component } from 'react';
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import HomePage from './HomePage';


const Appstack=createStackNavigator({

    Login : { screen : Login , 
        navigationOptions :{
            headerShown: false
            }
        },
    Home : { screen : HomePage ,
        navigationOptions : {
            headerShown : false
        } } 
},{
    initialRouteName : "Login"
});
export default createAppContainer(Appstack);