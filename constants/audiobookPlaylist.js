import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


const audioBookPlaylist = [{
        title: 'Bruce-Partington Plans - Act I',
        author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
        source: 'TCS',
        uri: 'https://archive.org/download/HQSherlockRathboneTCS/391106.mp3',
        imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
    },
    {
        title: 'Hamlet - Act II',
        author: 'William Shakespeare',
        source: 'Librivox',
        uri: 'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3',
        imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
    },
    {
        title: 'Hamlet - Act III',
        author: 'William Shakespeare',
        source: 'Librivox',
        uri: 'http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3',
        imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
    },
    {
        title: 'Hamlet - Act IV',
        author: 'William Shakespeare',
        source: 'Librivox',
        uri: 'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act4_shakespeare.mp3',
        imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
    },
    {
        title: 'Hamlet - Act V',
        author: 'William Shakespeare',
        source: 'Librivox',
        uri: 'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3',
        imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
    }
]
export default function App() {
    return ( <View style = {styles.container} >
            <Text> Open up App.js to start working on your app! </Text> 
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})