import React from 'react'
import { ImageBackground, View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from "Fyb/styles/Home.js"

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to FYB',
        headerStyle: { backgroundColor: '#0099cc' },
        headerTitleStyle: { color: 'white' },
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.container }>
                <ImageBackground
                    source={ require('../images/MapBackground.png') }
                    style={ styles.homeBackground }
                >
                    <Button
                        buttonStyle={ styles.fybButton }
                        title="FYB"
                        onPress={() =>
                            navigate('Map')
                        }
                    />
                </ImageBackground>
            </View>
        );
    }
}

export default HomeScreen;