import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator,
    createDrawerNavigator
} from 'react-navigation'
import React from 'react'
import { Icon } from 'native-base';
import { COLOR } from '../asset';
import DrawerComponent from '../component/dawer'
//unauthorized
import login from '../screen/login'
import register from '../screen/register'

//authorized
import home from '../screen/home'
import friend from '../screen/friend'

const unauthorizedStack = createStackNavigator({
    loginScreen: {
        screen: login
    },
    registerScreen: {
        screen: register
    }
})

const authorizedStack = createDrawerNavigator({
    homeScreen: {
        screen: home,
        navigationOptions: {
            drawerIcon: ({focused, tintColor}) => (
                <Icon name="md-home" style={{ fontSize: 20, color: focused ? COLOR.white : tintColor}} />
            ),
           title: 'News Feed'
        }
    },
    messageScreen: {
        screen: home,
        navigationOptions: {
            drawerIcon: ({focused, tintColor}) => (
                <Icon name="message"  type="MaterialIcons" style={{ fontSize: 20, color: focused ? COLOR.white : tintColor}} />
            ),
           title: 'Message'
        }
    },
    friendScreen: {
        screen: friend,
        navigationOptions: {
            drawerIcon: ({focused, tintColor}) => (
                <Icon name="user-friends"  type="FontAwesome5" style={{ fontSize: 20, color: focused ? COLOR.white : tintColor}} />
            ),
           title: 'Friends'
        }
    },
    photoScreen: {
        screen: home,
        navigationOptions: {
            drawerIcon: ({focused, tintColor}) => (
                <Icon name="photo"  type="FontAwesome" style={{ fontSize: 20, color: focused ? COLOR.white : tintColor}} />
            ),
           title: 'Photos'
        }
    },
    eventScreen: {
        screen: home,
        navigationOptions: {
            drawerIcon: ({focused, tintColor}) => (
                <Icon name="calendar"  type="FontAwesome" style={{ fontSize: 20, color: focused ? COLOR.white : tintColor}} />
            ),
           title: 'Events'
        }
    },
    groupScreen: {
        screen: home,
        navigationOptions: {
            drawerIcon: ({focused, tintColor}) => (
                <Icon name="group"  type="FontAwesome" style={{ fontSize: 20, color: focused ? COLOR.white : tintColor}} />
            ),
           title: 'Groups'
        }
    }
}, {
    backBehavior: 'initialRoute',
    contentComponent: DrawerComponent
})

const RootNavigator = createSwitchNavigator({
    unauthorizedStack,
    authorizedStack
},{
    initialRouteName: 'unauthorizedStack'
})

export default createAppContainer(RootNavigator)