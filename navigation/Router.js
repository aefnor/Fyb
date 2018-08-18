import {
    createStackNavigator,
} from 'react-navigation';

import HomeScreen from "Fyb/components/Homescreen.js"
import ProfileScreen from "Fyb/components/ProfileScreen.js"

const Router = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
});

export default Router;