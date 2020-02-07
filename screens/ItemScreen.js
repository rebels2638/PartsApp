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

export default class ItemScreen extends React.Component {
	render() {
		const item = this.props.navigation.getParam('item', {});
		const type = this.props.navigation.getParam('type', "Parts");
		let currentImage = 0;

		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>{item.name}</Text>
				</View>

				<ScrollView style={styles.container}>
					<View style = {styles.imageContainer}>
						<Image
							style = {styles.image}
							source = {item.fileName[currentImage]}
						/>
					</View>

					<View style={styles.iconsContainer}>
						<IconButton
							name={type}
							iconName = {type == 'Parts' ? 'cog' : 'wrench'}
						/>
						
						<IconButton onPress = {() => item.link ? Linking.openURL(item.link) : undefined} name={item.found} iconName = 'map-marker'/>
						
						{item.vendor? <IconButton name={item.vendor} iconName = 'shopping-cart'/> : <View></View>}
						
					</View>

					<View style={styles.descriptionContainer}>
						<Text style={styles.description}>{item.description}</Text>
					</View>
				</ScrollView>
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
		imageContainer: {
			paddingHorizontal: 20,
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
		imageContainer: {
            paddingHorizontal: 20,
            paddingVertical: 10,
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
			alignItems: "stretch",
    	},
		descriptionContainer: {
			padding: 40,
			flexDirection: "row",
			flexWrap: "wrap",
			alignItems: "center"
		},
		description: {
			flex: 1,
			textAlign: "center",
			fontSize: 15
		}
});
