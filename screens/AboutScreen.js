import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView
} from 'react-native';

import IconButton from '../components/IconButton.js';

export default class AboutScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>About</Text>
				</View>
                
				<ScrollView style={styles.container}>
					<View style = {styles.imageContainer}>
						<Image
							style = {styles.image}
							source = {require(`../Assets/Symbols/14.png`)}
						/>
					</View>

					<View style={styles.iconsContainer}>

						<IconButton name = 'Version 1.0' iconName = 'cog'/>
						
						<IconButton name = "Made by FRC Team 2638 in Great Neck, NY" iconName = 'map-marker'/>
						
						<IconButton name = "Website" iconName = 'link'/>
						
					</View>

					<View style={styles.creditsContainer}>
						<Text style={styles.credits}>{`App Designed by\nReid Fleishman`}</Text>
						<Text style={styles.credits}>{`App Development Lead by\nEric Wang`}</Text>
						<Text style={styles.credits}>{`App Developed by\n Kevin Wang\nEric Yachbes`}</Text>
						<Text style={styles.credits}>{`Special Thanks to\nAndrew Dea\nJohn Motchkavitz`}</Text>
						<Text style={styles.credits}>{`Much of the content in this app was compiled by the Freshman class of 2020 (HS Class of 2023) as part of an activity`}</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}

AboutScreen.navigationOptions = {
	header: null,
};

const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#fff"
		},
		headerContainer: {
			backgroundColor: "#ddd",
			paddingTop: 30,
			paddingBottom: 10,
			borderBottomWidth: StyleSheet.hairlineWidth,
			borderBottomColor: '#bbb',
		},
		header: {
			fontSize: 20,
			textAlign: "center"
        },
        imageContainer: {
            paddingHorizontal: 30,
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center"
        },
        image: {
			width: 300,
			height: 300,
			resizeMode: "contain",
			borderRadius: 10,
			alignSelf: "center"
        },
		iconsContainer: {
			flexDirection: "row",
			flexWrap: "wrap",
			alignItems: "stretch"
        },
        creditsContainer: {
            paddingHorizontal: 40,
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center"
        },
        credits: {
            flex: 1,
            textAlign: "center",
			fontSize: 15,
			paddingVertical: 20,
        }
});
