import React from 'react';
import {
    // Image,
    // Platform,
    ScrollView,
    StyleSheet,
    Text,
    // TouchableOpacity,
    // View,
} from 'react-native';

export default function RadioScreen() {
    return (
        <ScrollView style= {radiostyles.container}>
            <Text>Radio here!</Text>
        </ScrollView>
    )
}

RadioScreen.navigationOptions = {
    title: 'Radio',
};

const radiostyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
    },
});
