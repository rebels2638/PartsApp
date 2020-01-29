import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

import IconButton from '../components/IconButton.js';

export default class ItemScreen extends React.Component {
	render() {
		const item = this.props.navigation.getParam('item', {});

		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>{item.name}</Text>
				</View>

				<View style={styles.iconsContainer}>
					<IconButton
						name={this.props.navigation.getParam('type', 'Part')}
						iconName = {this.props.navigation.getParam('type', 'Part') == 'Part' ? 'cog' : 'wrench'}
					/>
					
					<IconButton name = {item.found} iconName = 'map-marker'/>
					
					<IconButton name = 'Vendor' iconName = 'shopping-cart'/>
				</View>
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
