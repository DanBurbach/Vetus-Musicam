// import React from 'react';
// import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { Audio } from 'expo-av';

// const audioBookPlaylist = [
// 	{
//         title: 'Bruce-Partington Plans',
// 		author: 'Sherlock Holmes - Basil Rathbone and Nigel Bruce - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/391106.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Retired Colourman',
// 		author: 'Sherlock Holmes - Basil Rathbone and Nigel Bruce - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/400311.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'Adventure Of The Missing Bloodstain',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/440515.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Book of Tobit',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/450326.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Amateur Mendicant Society',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/450402.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Viennese Strangler',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/450409.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Notorious Canary Trainer',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/450423.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'Unfortunate Tobacconist',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/450430.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Purloined Ruby',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/450507.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'On the Flanders',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/450514.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Paradol Chamber',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/450521.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Limping Ghost',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/450903.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'Colonel Warburtons Madness',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/450910.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Eyes of Mr Leyton',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/450924.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'Problem of Thor Bridge',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451001.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Vanishing Elephant',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451008.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Manor House Case',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451015.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Great Gandolfo',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451022.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'Murder in the Moonlight',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451029.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Fifth of November',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451105.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Speckled Band',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451112.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'Double Zero',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451119.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'Accidental Murderess',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451126.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'Murder in the Casbah',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451203.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'A Scandal in Bohemia',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451210.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Second Generation',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451217.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'Night Before Christmas',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451224.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'Case of the Iron Box',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/451231.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'Hampton Heath Killer',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/460107.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'Telltale Pigeon Feathers',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/460121.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'Sweeney Todd, Demon Barber',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/460128.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	},
// 	{
// 		title: 'The Cross of Damascus',
// 		author: 'Sherlock Holmes - Basil Rathbone - written by Sir Aurthur Conan Doyle',
// 		source: 'TCS',
// 		uri: 'https://archive.org/download/HQSherlockRathboneTCS/460204.mp3',
// 		imageSource: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 	}
// ]

// export default class App extends React.Component {
// 	state = {
// 		isPlaying: false,
// 		playbackInstance: null,
// 		currentIndex: 0,
// 		volume: 1.0,
// 		isBuffering: true
// 	}

// 	async componentDidMount() {
// 		try {
// 			await Audio.setAudioModeAsync({
// 				allowsRecordingIOS: false,
// 				interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
// 				playsInSilentModeIOS: true,
// 				interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
// 				shouldDuckAndroid: true,
// 				staysActiveInBackground: true,
// 				playThroughEarpieceAndroid: true
// 			})

// 			this.loadAudio()
// 		} catch (e) {
// 			console.log(e)
// 		}
// 	}

// 	async loadAudio() {
// 		const { currentIndex, isPlaying, volume } = this.state

// 		try {
// 			const playbackInstance = new Audio.Sound()
// 			const source = {
// 				uri: audioBookPlaylist[currentIndex].uri
// 			}

// 			const status = {
// 				shouldPlay: isPlaying,
// 				volume: volume
// 			}

// 			playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
// 			await playbackInstance.loadAsync(source, status, false)
// 			this.setState({
// 				playbackInstance
// 			})
// 		} catch (e) {
// 			console.log(e)
// 		}
// 	}

// 	onPlaybackStatusUpdate = status => {
// 		this.setState({
// 			isBuffering: status.isBuffering
// 		})
// 	}

// 	handlePlayPause = async () => {
// 		const { isPlaying, playbackInstance } = this.state
// 		isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

// 		this.setState({
// 			isPlaying: !isPlaying
// 		})
// 	}

// 	handlePreviousTrack = async () => {
// 		let { playbackInstance, currentIndex } = this.state
// 		if (playbackInstance) {
// 			await playbackInstance.unloadAsync()
// 			currentIndex < audioBookPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 0)
// 			this.setState({
// 				currentIndex
// 			})
// 			this.loadAudio()
// 		}
// 	}

// 	handleNextTrack = async () => {
// 		let { playbackInstance, currentIndex } = this.state
// 		if (playbackInstance) {
// 			await playbackInstance.unloadAsync()
// 			currentIndex < audioBookPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0)
// 			this.setState({
// 				currentIndex
// 			})
// 			this.loadAudio()
// 		}
// 	}

// 	renderFileInfo() {
// 		const { playbackInstance, currentIndex } = this.state
// 		return playbackInstance ? (
// 			<View style={styles.trackInfo}>
// 				<Text style={[styles.trackInfoText, styles.largeText]}>
// 					{audioBookPlaylist[currentIndex].title}
// 				</Text>
// 				<Text style={[styles.trackInfoText, styles.smallText]}>
// 					{audioBookPlaylist[currentIndex].author}
// 				</Text>
// 				<Text style={[styles.trackInfoText, styles.smallText]}>
// 					{audioBookPlaylist[currentIndex].source}
// 				</Text>
// 			</View>
// 		) : null
// 	}

// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<Image
// 					style={styles.albumCover}
// 					source = {
// 						{
// 							uri: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
// 						}
// 					}
// 				/>
// 				<View style={styles.controls}>
// 					<TouchableOpacity style={styles.control} onPress={this.handlePreviousTrack}>
// 						<Ionicons name='ios-skip-backward' size={48} color='#444' />
// 					</TouchableOpacity>
// 					<TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
// 						{this.state.isPlaying ? (
// 							<Ionicons name='ios-pause' size={48} color='#444' />
// 						) : (
// 							<Ionicons name='ios-play-circle' size={48} color='#444' />
// 						)}
// 					</TouchableOpacity>
// 					<TouchableOpacity style={styles.control} onPress={this.handleNextTrack}>
// 						<Ionicons name='ios-skip-forward' size={48} color='#444' />
// 					</TouchableOpacity>
// 				</View>
// 				{this.renderFileInfo()}
// 			</View>
// 		)
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	},
// 	albumCover: {
// 		width: 250,
// 		height: 250
// 	},
// 	trackInfo: {
// 		padding: 40,
// 		backgroundColor: '#fff'
// 	},

// 	trackInfoText: {
// 		textAlign: 'center',
// 		flexWrap: 'wrap',
// 		color: '#550088'
// 	},
// 	largeText: {
// 		fontSize: 22
// 	},
// 	smallText: {
// 		fontSize: 16
// 	},
// 	control: {
// 		margin: 20
// 	},
// 	controls: {
// 		flexDirection: 'row'
// 	}
// })

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
