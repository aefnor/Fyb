import Expo from 'expo';
import React from 'react';
import { Constants, Location, Permissions, } from 'expo';
import { StyleSheet, Text, View, AppRegistry, Button, Navigator, TouchableHighlight, Image, } from 'react-native';
import { MapView } from 'expo';

class App extends React.Component {
  //This code handles setting up the navigation and navigator
  renderScene(route, navigator) {
    	if(route.name == 'Main') {
      	return <Main navigator={navigator} {...route.passProps}  />
      }
      if(route.name == 'Home') {
      	return <Home navigator={navigator} {...route.passProps}  />
      }
      if(route.name == 'Map'){
        return <Map navigator = {navigator} {...route.passProps} />
      }
    }

    render() {
      return (
        <Navigator
        	style={{ flex:1 }}
          initialRoute={{ name: 'Main' }}
          renderScene={ this.renderScene } />
      )
    }
}

//console.warn(loc);
//How to Write to the fucking console
console.warn('YellowBox is disabled.');

//Main Screen where the action happens
class Main extends React.Component{

  //Checking if they have locations enabled
    async alertIfRemoteNotificationsDisabledAsync() {
    const { Permissions } = Expo;
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      alert('Hey! You might want to enable notifications for my app, they are good.');
    }
  }

  //Get Location
    async getLocationAsync() {
    const { Location, Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    console.warn("Test");
    if (status === 'granted') {
      console.warn("Location Accessed");
      return Location.getCurrentPositionAsync({enableHighAccuracy: true});
    } else {
      throw new Error('Location permission not granted');
    }
  }

  //JSON
  state = {
    location: null,
    errorMessage: null,
  };

  //Function called before render
    componentWillMount() {
      this.alertIfRemoteNotificationsDisabledAsync();
      this.getLocationAsync();
      this._getLocationAsync();
      console.warn("Tello");
    }

  //Get location
    _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({location});
  };
  //A navigator function passing it home
  _navigate(name) {
    	this.props.navigator.push({
      	name: name,
        passProps: {
        	name: name
        }
      })
    }

    render() {
      //
      //const { navigate } = this.props.navigation;

      let text = 'Waiting..';

      if (this.state.errorMessage) {
        text = this.state.errorMessage;
      } else if (this.state.location) {
        text = JSON.stringify(this.state.location);
      }

      //Comment for getting location cords\ect in render
      // <Text>{text}</Text> //

      return (      //I love dick in my mouth - jewefnor

        <View style={styles.container}>
          <Text style={ styles.heading }>Welcome to WhatWouldMyGirlfriendEat</Text>
          <Button
            onPress={() => this._navigate('Home')}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
 				<TouchableHighlight style={ styles.button } onPress={ () => this._navigate('Home') }>
      		<Text style={ styles.buttonText }>GO GO GO</Text>
      	</TouchableHighlight>
        </View>

      );
    }
}

class Home extends React.Component{
  _navigate(name) {
    	this.props.navigator.push({
      	name: name,
        passProps: {
        	name: name
        }
      })
    }
  render() {
    return (
    	<View style={ styles.container }>


      	<Text style={ styles.image }>Hello from { this.props.name }</Text>
 				<TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.pop() }>
      		<Text style={ styles.buttonText }>GO Back</Text>
      	</TouchableHighlight>
        <TouchableHighlight style={ styles.button } onPress={ () => this._navigate('Map') }>
      		<Text style={ styles.buttonText }>MAP</Text>
      	</TouchableHighlight>

        <TouchableHighlight style={ styles.imageContainer2 }>
            <Image style={ styles.image } source={{ uri: 'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg' }} />
       </TouchableHighlight>
      </View>
    )
  }
}
class Map extends React.Component{


  /*getInitialState() {
  return {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
}*/

/*onRegionChange(region) {
  this.setState({ region });
}erick larson is the shit.com (Fuck Austin) 8=========D
*/
  render() {
    console.log('Hi from React Native');
    return(
      <View style = { styles.test }>
      <TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.pop() }>
        <Text style={ styles.buttonText }>GO Back</Text>
      </TouchableHighlight>
      <MapView
      style = { styles.map }
      showsUserLocation={true}
      followUserLocation={true}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {

  },
  test: {
    marginTop: 60
  },
  map: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  image: {
    height:128,
    width: 128,
    borderRadius: 64
  },
  imageContainer2: {

  },
});

Expo.registerRootComponent(App);
