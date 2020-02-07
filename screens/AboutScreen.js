import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	Linking
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
							style = {{
								width: 300,
								height: 300,
								resizeMode: "contain",
								borderRadius: 10
							}}
							source = {require(`../Assets/Symbols/14.png`)}
						/>
					</View>

					<View style={styles.iconsContainer}>

						<IconButton name = 'Version 1.0' iconName = 'cog'/>
						
						<IconButton name = "Made by FRC Team 2638 in Great Neck, NY" iconName = 'map-marker'/>
						
						<IconButton onPress = {() => Linking.openURL("https://www.gnsrobotics.com/")} name = "Website" iconName = 'link'/>
						
					</View>

					<View style={styles.creditsContainer}>
						<View style = {styles.hrContainer}><View style = {styles.hr}></View></View>
						
						<Text style={styles.credits}>{`UI Design and App Concept by\nReid Fleishman\n\nApp Development Team 2020\nReid Fleishman\nEric Wang (for a bit)\nEric Yachbes\nKevin Wang\n\nApp Programmed by\nEric Yachbes\nKevin Wang`}</Text>
						
						
						<View style = {styles.hrContainer}><View style = {styles.hr}></View></View>

						<Text style={styles.credits}>{`Special Thanks To\nAndrew Dea for helping organize the whole thing\n\nCole Kniesly and especially Mrs. Zinn for proofreading the descriptions (like "Scratch All").  You are truly Zinntastic!\n\nOur mentors John Motchkavitz, Mr. Corrigan, Squeegee, the aforementioned Mrs. Zinn, and our other mentors.`}</Text>

						<View style = {styles.hrContainer}><View style = {styles.hr}></View></View>

						<Text style={styles.credits}>{`Much of the content in this app was compiled by the Freshman Class of 2020 (HS Class of 2023) as part of an activity.  So, we would like to thank the following students who contributed to this app:\n\nIsaac Ahn\nAntranig Baghdassarian\nOskar Bohaczyk\nElia Botros\nIssac Chan\nSooah Kwak\nThomas Lo\nLeo Lui`}</Text>

						<View style = {styles.hrContainer}><View style = {styles.hr}></View></View>

						<View style = {styles.imageContainer}>
							<Image
								style = {{
									width: 150,
									height: 150,
									resizeMode: "contain",
								}}
								source = {require(`../Assets/Symbols/16.png`)}
							/>
						</View>

						<Text style={{
							textAlign: "center",
							fontSize: 15,
							paddingBottom: 10}}
						>
							© 2020 Rebel Robotics
						</Text>
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
            paddingTop: 10,
            flexDirection: "row",
            alignSelf: "center"
        },
        image: {
			width: 300,
			height: 300,
			resizeMode: "contain",
			borderRadius: 10
        },
		iconsContainer: {
			flexDirection: "row",
			flexWrap: "wrap",
			alignItems: "stretch"
        },
        creditsContainer: {
            paddingHorizontal: 30,
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center"
        },
        credits: {
            flex: 1,
            textAlign: "center",
			fontSize: 15,
			paddingVertical: 20,
		},
		hrContainer: {
			flexDirection: "row"
		},
		hr: {
			borderBottomColor: "black", 
    		borderBottomWidth: StyleSheet.hairlineWidth, 
    		alignSelf:'stretch',
    		width: "100%"
		}
});
