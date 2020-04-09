// import React from 'react';
// import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { Audio } from 'expo-av';
// import { audioBookPlaylist } from '../constants/audiobookPlaylist';

// import Slider from 'react-native-slider';

// function getTime(time) {
// 	if (!isNaN(time)) {
// 		return (
// 			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
// 		);
// 	}
// }

// class RadioScreen extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			isPlaying: false,
// 			playbackInstance: null,
// 			currentIndex: 0,
// 			volume: 1.0,
// 			isBuffering: true,
// 			paused: true,
// 			player: "stopped",
//       		sliding: false,
// 			currentTime: null,
// 			duration: null
// 		};
// 		this.onPlaybackStatusUpdate = this.onPlaybackStatusUpdate.bind(this);
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
// 		this.player.addEventListener("timeupdate", e => {
// 			this.setState({
// 				currentTime: e.target.currentTime,
// 				duration: e.target.duration
// 			});
// 		});
// 	}

// 	componentWillUnmount() {
// 	  	this.player.removeEventListener("timeupdate", () => {});
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
// 				playbackInstance,
// 			})
			
// //display in an alert the track length. To be used in Slider funcitonality
// 			let playback = playbackInstance.durationMillis
			
// 			alert(playback);

// 			// this.setState({
// 			// 	songLength: this.millisToMinutesAndSeconds(playback.duration.toFixed(0))
// 			// })
// 			// alert("song length: " + this.state.songLength)

// 		} catch (e) {
// 			console.log(e)
// 		}
// 	}

// 	millisToMinutesAndSeconds = (millis) => {
// 		let minutes = Math.floor(millis / 60000);
// 		let seconds = ((millis % 60000) / 1000).toFixed(0);
// 		return (seconds == 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" :
// 			"") + seconds);
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
// 				currentIndex,
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
// 				currentIndex,
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

// 	// onLoad() {
// 	// 	this.setState({
// 	// 		songDuration: audioBookPlaylist[currentIndex].length
// 	// 	});
// 	// 	console.log(this.state.songDuration)
// 	// }


// 	onSlidingStart = async () => {
// 		this.setState({
// 			sliding: true
// 		});
// 	}

// 	// onSlidingChange = async (value) => {
// 	// 	let songDuration = this.state.playbackInstance;


// 	// 	let newPosition = value * songDuration;
// 	// 	this.setState({
// 	// 		currentTime: newPosition
// 	// 	});
// 	// }

// 	onSlidingComplete = async () => {
// 		// this.refs.audio.seek(this.state.currentTime);
// 		this.setState({
// 			sliding: false
// 		});
// 	}

// 	render() {
// 		const {currentIndex} = this.state;
// 		let songPercentage = audioBookPlaylist[currentIndex].length;

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
// 				<Slider
// 					onSlidingStart={ this.onSlidingStart.bind(this) }
// 					onSlidingComplete={ this.onSlidingComplete.bind(this) }
// 					// onValueChange={ this.onSlidingChange.bind(this) }
// 					style={ styles.slider }
// 					trackStyle={ styles.sliderTrack }
// 					thumbStyle={ styles.sliderThumb }
// 					maximumValue = {
// 						songPercentage
// 					}
// 					minimumValue={0}
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

// export default RadioScreen;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		justifyContent: 'center',
// 		alignItems: 'center'
// 	},
// 	albumCover: {
// 		width: 450,
// 		height: 450,
// 		justifyContent: 'center'
// 	},
// 	trackInfo: {
// 		paddingTop: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 		},

// 	trackInfoText: {
// 		textAlign: 'center',
// 		flexWrap: 'wrap',
// 		color: '#550088',

// 	},
// 	largeText: {
// 		fontSize: 20
// 	},
// 	smallText: {
// 		fontSize: 16
// 	},
// 	control: {
// 		margin: 25,
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	},
// 	controls: {
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	},

// 	slider: {
// 		height: 30,
// 		backgroundColor: '#fff',
// 		marginTop: 10,
// 		width: 350
// 	},

// 	sliderTrack: {
// 		height: 2,
// 	},

// 	sliderThumb: {
// 		width: 10,
// 		height: 10,
// 		backgroundColor: '#f62976',
// 		borderRadius: 10 / 2,
// 		shadowColor: 'red',
// 		shadowOffset: {
// 			width: 0,
// 			height: 0
// 		},
// 		shadowRadius: 2,
// 		shadowOpacity: 1,
// 	}
// })


import React, { Component } from 'react';
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from 'react-native';
import Slider from 'react-native-slider';
import { Audio } from 'expo-av';
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { audioBookPlaylist } from '../constants/audiobookPlaylist';

// class PlaylistItem {
// 	constructor(name, uri, image) {
// 		this.name = name;
// 		this.uri = uri;
// 		this.image = image;
// 	}
// }

// const PLAYLIST = {audioBookPlaylist};

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
const BACKGROUND_COLOR = '#FFFFFF';
const DISABLED_OPACITY = 0.5;
const LOADING_STRING = 'Loading...';
const BUFFERING_STRING = 'Buffering...';
const RATE_SCALE = 3.0;

class RadioScreen extends Component {
	constructor(props) {
		super(props);
		this.index = 0;
		this.isSeeking = false;
		this.shouldPlayAtEndOfSeek = false;
		this.playbackInstance = null;
		this.state = {
			playbackInstanceTitle: LOADING_STRING,
			playbackInstanceAuthor: LOADING_STRING,
			playbackInstancePosition: null,
			playbackInstanceDuration: null,
			shouldPlay: false,
			isPlaying: false,
			isBuffering: false,
			isLoading: true,
			fontLoaded: false,
			volume: 1.0,
			rate: 1.0,
			portrait: null,
		};
	}

	async componentDidMount() {
		await Audio.setAudioModeAsync({
			allowsRecordingIOS: false,
			interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
			playsInSilentModeIOS: true,
			interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
			shouldDuckAndroid: true,
			staysActiveInBackground: true,
			playThroughEarpieceAndroid: true
		});
		(async () => {
			await Font.loadAsync({
				spaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
				});
			this.setState({ fontLoaded: true });
		})();

		this._loadNewPlaybackInstance(false);
	}

	componentWillUnmount() {
		this.playbackInstance.unloadAsync();
		//  Check Your Console To verify that the above line is working
		console.log('unmount');
	}

	async _loadNewPlaybackInstance(playing) {
		if (this.playbackInstance != null) {
			await this.playbackInstance.unloadAsync();
			this.playbackInstance.setOnPlaybackStatusUpdate(null);
			this.playbackInstance = null;
		}

		const source = { uri: audioBookPlaylist[this.index].uri };
		const initialStatus = {
			shouldPlay: playing,
			rate: this.state.rate,
			volume: this.state.volume,
		};

		const { sound, status } = await Audio.Sound.createAsync(
			source,
			initialStatus,
			this._onPlaybackStatusUpdate
		);
		this.playbackInstance = sound;

		this._updateScreenForLoading(false);
	}

	_updateScreenForLoading(isLoading) {
		if (isLoading) {
			this.setState({
				isPlaying: false,
				playbackInstanceTitle: LOADING_STRING,
				playbackInstanceAuthor: LOADING_STRING,
				playbackInstanceDuration: null,
				playbackInstancePosition: null,
				isLoading: true,
			});
		} else {
			this.setState({
				playbackInstanceTitle: audioBookPlaylist[this.index].title,
				playbackInstanceAuthor: audioBookPlaylist[this.index].author,
				portrait: audioBookPlaylist[this.index].imageSource,
				isLoading: false,
			});
		}
	}

	_onPlaybackStatusUpdate = status => {
		if (status.isLoaded) {
			this.setState({
				playbackInstancePosition: status.positionMillis,
				playbackInstanceDuration: status.durationMillis,
				shouldPlay: status.shouldPlay,
				isPlaying: status.isPlaying,
				isBuffering: status.isBuffering,
				rate: status.rate,
				volume: status.volume,
			});
			if (status.didJustFinish) {
				this._advanceIndex(true);
				this._updatePlaybackInstanceForIndex(true);
			}
		} else {
			if (status.error) {
				console.log(`FATAL PLAYER ERROR: ${status.error}`);
			}
		}
	};

	_advanceIndex(forward) {
		this.index =
			(this.index + (forward ? 1 : audioBookPlaylist.length - 1)) %
			audioBookPlaylist.length;
	}

	async _updatePlaybackInstanceForIndex(playing) {
		this._updateScreenForLoading(true);

		this._loadNewPlaybackInstance(playing);
	}

	_onPlayPausePressed = () => {
		if (this.playbackInstance != null) {
			if (this.state.isPlaying) {
				this.playbackInstance.pauseAsync();
			} else {
				this.playbackInstance.playAsync();
			}
		}
	};

	_onStopPressed = () => {
		if (this.playbackInstance != null) {
			this.playbackInstance.stopAsync();
		}
	};

	_onForwardPressed = () => {
		if (this.playbackInstance != null) {
			this._advanceIndex(true);
			this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
		}
	};

	_onBackPressed = () => {
		if (this.playbackInstance != null) {
			this._advanceIndex(false);
			this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
		}
	};

	_onVolumeSliderValueChange = value => {
		if (this.playbackInstance != null) {
			this.playbackInstance.setVolumeAsync(value);
		}
	};

	_trySetRate = async rate => {
		if (this.playbackInstance != null) {
			try {
				await this.playbackInstance.setRateAsync(rate);
			} catch (error) {
				// Rate changing could not be performed, possibly because the client's Android API is too old.
			}
		}
	};

	_onRateSliderSlidingComplete = async value => {
		this._trySetRate(value * RATE_SCALE);
	};

	_onSeekSliderValueChange = value => {
		if (this.playbackInstance != null && !this.isSeeking) {
			this.isSeeking = true;
			this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
			this.playbackInstance.pauseAsync();
		}
	};

	_onSeekSliderSlidingComplete = async value => {
		if (this.playbackInstance != null) {
			this.isSeeking = false;
			const seekPosition = value * this.state.playbackInstanceDuration;
			if (this.shouldPlayAtEndOfSeek) {
				this.playbackInstance.playFromPositionAsync(seekPosition);
			} else {
				this.playbackInstance.setPositionAsync(seekPosition);
			}
		}
	};

	_getSeekSliderPosition() {
		if (
			this.playbackInstance != null &&
			this.state.playbackInstancePosition != null &&
			this.state.playbackInstanceDuration != null
		) {
			return (
				this.state.playbackInstancePosition /
				this.state.playbackInstanceDuration
			);
		}
		return 0;
	}

	_getMMSSFromMillis(millis) {
		const totalSeconds = millis / 1000;
		const seconds = Math.floor(totalSeconds % 60);
		const minutes = Math.floor(totalSeconds / 60);

		const padWithZero = number => {
			const string = number.toString();
			if (number < 10) {
				return '0' + string;
			}
			return string;
		};
		return padWithZero(minutes) + ':' + padWithZero(seconds);
	}

	_getTimestamp() {
		if (
			this.playbackInstance != null &&
			this.state.playbackInstancePosition != null &&
			this.state.playbackInstanceDuration != null
		) {
			return `${this._getMMSSFromMillis(
				this.state.playbackInstancePosition
			)} / ${this._getMMSSFromMillis(
				this.state.playbackInstanceDuration
			)}`;
		}
		return '';
	}

	render() {
		return !this.state.fontLoaded ? (
			<View />
		) : (
			<View style={styles.container}>
				<View style={styles.portraitContainer}>
					<Image
						style={styles.portrait}
						source={{
							uri: this.state.portrait,
						}}
					/>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={[styles.text]}>
						{this.state.playbackInstanceTitle}
					</Text>
					<Text style={[styles.text]}>
						{this.state.playbackInstanceAuthor}
					</Text>
					<Text style={[styles.text]}>
						{this.state.isBuffering ? (
							BUFFERING_STRING
						) : (
							this._getTimestamp()
						)}
					</Text>
				</View>
				<View
					style={[
						styles.buttonsContainerBase,
						styles.buttonsContainerTopRow,
						{
							opacity: this.state.isLoading
								? DISABLED_OPACITY
								: 1.0,
						},
					]}
				>
					<TouchableHighlight
						underlayColor={BACKGROUND_COLOR}
						style={styles.wrapper}
						onPress={this._onBackPressed}
						disabled={this.state.isLoading}
					>
						<View>
							<MaterialIcons
								name="fast-rewind"
								size={40}
								color="#000000"
							/>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={BACKGROUND_COLOR}
						style={styles.wrapper}
						onPress={this._onPlayPausePressed}
						disabled={this.state.isLoading}
					>
						<View>
							{this.state.isPlaying ? (
								<MaterialIcons
									name="pause"
									size={40}
									color="#000000"
								/>
							) : (
								<MaterialIcons
									name="play-arrow"
									size={40}
									color="#000000"
								/>
							)}
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={BACKGROUND_COLOR}
						style={styles.wrapper}
						onPress={this._onStopPressed}
						disabled={this.state.isLoading}
					>
						<View>
							<MaterialIcons
								name="stop"
								size={40}
								color="#000000"
							/>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={BACKGROUND_COLOR}
						style={styles.wrapper}
						onPress={this._onForwardPressed}
						disabled={this.state.isLoading}
					>
						<View>
							<MaterialIcons
								name="fast-forward"
								size={40}
								color="#000000"
							/>
						</View>
					</TouchableHighlight>
				</View>
				<View
					style={[
						styles.playbackContainer,
						{
							opacity: this.state.isLoading
								? DISABLED_OPACITY
								: 1.0,
						},
					]}
				>
					<Slider
						style={styles.playbackSlider}
						value={this._getSeekSliderPosition()}
						onValueChange={this._onSeekSliderValueChange}
						onSlidingComplete={this._onSeekSliderSlidingComplete}
						thumbStyle={ styles.sliderThumb }
						trackStyle={ styles.sliderTrack }
						minimumTrackTintColor="#4CCFF9"
						disabled={this.state.isLoading}
					/>
				</View>
				<View
					style={[
						styles.buttonsContainerBase,
						styles.buttonsContainerMiddleRow,
					]}
				>
					<View style={styles.volumeContainer}>
						<View>
							<MaterialIcons
								name="volume-down"
								size={40}
								color="#000000"
							/>
						</View>
						<Slider
							style={styles.volumeSlider}
							value={1}
							onValueChange={this._onVolumeSliderValueChange}
							thumbStyle={ styles.sliderThumb }
							trackStyle={ styles.sliderTrack }
							minimumTrackTintColor="#4CCFF9"
						/>
						<View>
							<MaterialIcons
								name="volume-up"
								size={40}
								color="#000000"
							/>
						</View>
					</View>
				</View>
				<View
					style={[
						styles.buttonsContainerBase,
						styles.buttonsContainerBottomRow,
					]}
				>
					<View>
						<MaterialIcons
							name="call-received"
							size={30}
							color="#000000"
						/>
					</View>
					<Slider
						style={styles.rateSlider}
						value={this.state.rate / RATE_SCALE}
						onSlidingComplete={this._onRateSliderSlidingComplete}
						thumbStyle={ styles.sliderThumb }
						trackStyle={ styles.sliderTrack }
						minimumTrackTintColor="#4CCFF9"
					/>
					<View>
						<MaterialIcons
							name="call-made"
							size={30}
							color="#000000"
						/>
					</View>
				</View>
			</View>
		);
	}
}

export default RadioScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: BACKGROUND_COLOR,
	},
	portraitContainer: {
		marginTop: 0,
	},
	portrait: {
		height: 450,
		width: 450,
	},
	detailsContainer: {
		height: 90,
		marginTop: 10,
		alignItems: 'center',
	},
	playbackContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	playbackSlider: {
		alignSelf: 'stretch',
		marginLeft: 10,
		marginRight: 10,
	},
	text: {
		fontSize: 16,
		minHeight: 16,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	sliderThumb: {
		width: 12,
		height: 12,
		backgroundColor: '#f62976',
		borderRadius: 10 / 2,
		shadowColor: 'red',
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 2,
		shadowOpacity: 1,
	},
	sliderTrack: {
		height: 2,
		backgroundColor: '#D3D3D3',
	},
	buttonsContainerBase: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 10
	},
	buttonsContainerTopRow: {
		maxHeight: 40,
		minWidth: DEVICE_WIDTH / 2.0,
		maxWidth: DEVICE_WIDTH / 2.0,
	},
	buttonsContainerMiddleRow: {
		maxHeight: 40,
		alignSelf: 'stretch',
		paddingRight: 20,
	},
	volumeContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		minWidth: DEVICE_WIDTH - 40,
		maxWidth: DEVICE_WIDTH - 40,
	},
	volumeSlider: {
		width: DEVICE_WIDTH - 80,
	},
	buttonsContainerBottomRow: {
		alignSelf: 'stretch',
	},
	rateSlider: {
		width: DEVICE_WIDTH - 80,
	},
});
