import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
	StyleSheet,
	Text,
  View,
  Image
} from 'react-native';

import IconButton from '../components/IconButton.js';

export default class AboutScreen extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>About</Text>
				</View>
                
                <View style = {styles.imageContainer}>
                    <Image
                        styles = {styles.image}
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
                </View>
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
            paddingHorizontal: 20,
            paddingVertical: 10
        },
        image: {
            borderRadius: 50
        },
		iconsContainer: {
			flexDirection: "row",
			flexWrap: "wrap",
			alignItems: "stretch"
        },
        creditsContainer: {
            padding: 40,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center"
        },
        credits: {
            flex: 1,
            textAlign: "center",
            fontSize: 15
        }
});
