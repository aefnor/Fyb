import React from 'react'
import {Button, View, Text} from 'react-native'
class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Dad',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>DAD</Text>
            </View>
        );
    }
}
export default ProfileScreen;