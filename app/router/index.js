import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation'

//unauthorized
import login from '../screen/login'
import register from '../screen/register'

//authorized
import home from '../screen/home'

const unauthorizedStack = createStackNavigator({
    loginScreen: {
        screen: login
    },
    registerScreen: {
        screen: register
    }
})

const authorizedStack = createStackNavigator({
    homeScreen: {
        screen: home
    }
})

const RootNavigator = createSwitchNavigator({
    unauthorizedStack,
    authorizedStack
},{
    initialRouteName: 'unauthorizedStack'
})

export default createAppContainer(RootNavigator)