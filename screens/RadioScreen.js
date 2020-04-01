import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { audioBookPlaylist } from '../constants/audiobookPlaylist';

import Slider from 'react-native-slider';

class RadioScreen extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isPlaying: false,
			playbackInstance: null,
			currentIndex: 0,
			volume: 1.0,
			isBuffering: true,
			paused: true,
      		sliding: false,
			currentTime: 0,
			songIndex: props.songIndex
		};
		this.onPlaybackStatusUpdate = this.onPlaybackStatusUpdate.bind(this);
	}

	async componentDidMount() {
		try {
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: false,
				interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
				playsInSilentModeIOS: true,
				interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
				shouldDuckAndroid: true,
				staysActiveInBackground: true,
				playThroughEarpieceAndroid: true
			})

			this.loadAudio()
		} catch (e) {
			console.log(e)
		}
	}

	async loadAudio() {
		const { currentIndex, isPlaying, volume } = this.state

		try {
			const playbackInstance = new Audio.Sound()
			const source = {
				uri: audioBookPlaylist[currentIndex].uri
			}

			const status = {
				shouldPlay: isPlaying,
				volume: volume
			}

			playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
			await playbackInstance.loadAsync(source, status, false)
			this.setState({
				playbackInstance
			})
		} catch (e) {
			console.log(e)
		}
	}

	onPlaybackStatusUpdate = status => {
		this.setState({
			isBuffering: status.isBuffering
		})
	}

	handlePlayPause = async () => {
		const { isPlaying, playbackInstance } = this.state
		isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

		this.setState({
			isPlaying: !isPlaying
		})
	}

	handlePreviousTrack = async () => {
		let { playbackInstance, currentIndex } = this.state
		if (playbackInstance) {
			await playbackInstance.unloadAsync()
			currentIndex < audioBookPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 0)
			this.setState({
				currentIndex
			})
			this.loadAudio()
		}
	}

	handleNextTrack = async () => {
		let { playbackInstance, currentIndex } = this.state
		if (playbackInstance) {
			await playbackInstance.unloadAsync()
			currentIndex < audioBookPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0)
			this.setState({
				currentIndex
			})
			this.loadAudio()
		}
	}

	renderFileInfo() {
		const { playbackInstance, currentIndex } = this.state
		return playbackInstance ? (
			<View style={styles.trackInfo}>
				<Text style={[styles.trackInfoText, styles.largeText]}>
					{audioBookPlaylist[currentIndex].title}
				</Text>
				<Text style={[styles.trackInfoText, styles.smallText]}>
					{audioBookPlaylist[currentIndex].author}
				</Text>
				<Text style={[styles.trackInfoText, styles.smallText]}>
					{audioBookPlaylist[currentIndex].source}
				</Text>
			</View>
		) : null
	}

	// onLoad() {
	// 	this.setState({
	// 		songDuration: audioBookPlaylist[currentIndex].length
	// 	});
	// 	console.log(this.state.songDuration)
	// }


	// onSlidingStart() {
	// 	this.setState({
	// 		sliding: true
	// 	});
	// }

	// onSlidingChange(value) {
	// 	let newPosition = value * this.state.songDuration;
	// 	this.setState({
	// 		currentTime: newPosition
	// 	});
	// }

	// onSlidingComplete() {
	// 	this.refs.audio.seek(this.state.currentTime);
	// 	this.setState({
	// 		sliding: false
	// 	});
	// }

	render() {
		const {currentIndex} = this.state;
		let songPercentage = audioBookPlaylist[currentIndex].length;

		return (
			<View style={styles.container}>
				<Image
					style={styles.albumCover}
					source = {
						{
							uri: 'https://images.unsplash.com/photo-1545114687-ab1c9f9fc260?ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80.jpg'
						}
					}
				/>
				<Slider
					// onSlidingStart={ this.onSlidingStart.bind(this) }
					// onSlidingComplete={ this.onSlidingComplete.bind(this) }
					// onValueChange={ this.onSlidingChange.bind(this) }
					style={ styles.slider }
					trackStyle={ styles.sliderTrack }
					thumbStyle={ styles.sliderThumb }
					maximumValue={100}
					minimumValue={0}
					value={songPercentage}
				/>
				<View style={styles.controls}>
					<TouchableOpacity style={styles.control} onPress={this.handlePreviousTrack}>
						<Ionicons name='ios-skip-backward' size={48} color='#444' />
					</TouchableOpacity>
					<TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
						{this.state.isPlaying ? (
							<Ionicons name='ios-pause' size={48} color='#444' />
						) : (
							<Ionicons name='ios-play-circle' size={48} color='#444' />
						)}
					</TouchableOpacity>
					<TouchableOpacity style={styles.control} onPress={this.handleNextTrack}>
						<Ionicons name='ios-skip-forward' size={48} color='#444' />
					</TouchableOpacity>
				</View>
				{this.renderFileInfo()}
			</View>
		)
	}
}

export default RadioScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	albumCover: {
		width: 450,
		height: 450,
		justifyContent: 'center'
	},
	trackInfo: {
		paddingTop: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
		},

	trackInfoText: {
		textAlign: 'center',
		flexWrap: 'wrap',
		color: '#550088',

	},
	largeText: {
		fontSize: 20
	},
	smallText: {
		fontSize: 16
	},
	control: {
		margin: 25,
		alignItems: 'center',
		justifyContent: 'center'
	},
	controls: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},

	slider: {
		height: 20,
		backgroundColor: '#fff',
		marginTop: 10
	},

	sliderTrack: {
		height: 2,
	},

	sliderThumb: {
		width: 10,
		height: 10,
		backgroundColor: '#f62976',
		borderRadius: 10 / 2,
		shadowColor: 'red',
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 2,
		shadowOpacity: 1,
	}
})
