import React from 'react';
import {
    Image,
    // Platform,
    // ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    Ionicons
} from '@expo/vector-icons';

export default function RadioScreen() {
    return (
        <Text>Radio View</Text>
        <View style = {styles.container}>
            <Image style = {styles.albumCover} source = {
            { uri: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg' }}></Image>
            <View style = {styles.controls}>

                <TouchableOpacity style = {styles.control} onPress = {() => alert('')}>
                    <Ionicons name = "ios-skip-backward" size = {48}color = "#444"></Ionicons>
                </TouchableOpacity> 

                <TouchableOpacity style = {styles.control} onPress = {() => alert('')}>{this.state.isPlaying ? (<Ionicons name = "ios-pause" size = {48} color = "#444"></Ionicons>) : ( <Ionicons name = "ios-play-circle" size = {48} color = "#444"></Ionicons>)} 
                </TouchableOpacity> 

                <TouchableOpacity style = {styles.control} onPress = {() => alert('')} >
                    <Ionicons name = "ios-skip-forward" size = {48} color = "#444" />
                </TouchableOpacity> 

            </View> 
        </View>
    )
}

RadioScreen.navigationOptions = {
    title: 'Radio',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    albumCover: {
        width: 250,
        height: 250
    },
    controls: {
        flexDirection: 'row'
    },
    control: {
        margin: 20
    }
})
