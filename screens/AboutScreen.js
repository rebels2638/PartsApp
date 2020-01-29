import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default class ItemScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>About</Text>
				</View>

				

				


				<Text>Test</Text>
			</View>
		);
	}
}

ItemScreen.navigationOptions = {
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
		iconsContainer: {
				flexDirection: "row",
				flexWrap: "wrap",
				alignItems: "stretch"
		}
});
