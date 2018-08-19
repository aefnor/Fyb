import {
    createStackNavigator,
} from 'react-navigation';

import HomeScreen from "Fyb/components/HomeScreen.js"
import MapScreen from "Fyb/components/MapScreen.js"

const Router = createStackNavigator({
    Home: { screen: HomeScreen },
    Map: { screen: MapScreen },
});

export default Router;