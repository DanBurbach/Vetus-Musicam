import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class RadioScreen Component {
    
    const radiostyles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 15,
            backgroundColor: '#fff',
        },
    });

    RadioScreen.navigationOptions = {
        title: 'Radio',
    };

    render() {
        return (
            <ScrollView style= {radiostyles.container}>
                <Text>Radio here!</Text>
            </ScrollView>
        )
    };
}



