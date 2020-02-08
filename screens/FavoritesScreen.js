import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
	StyleSheet,
	Text,
    View,
    Dimensions,
    StatusBar
} from 'react-native';

export default class FavoritesScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
                <StatusBar hidden />
				<View style={styles.headerContainer}>
					<Text style={styles.header}>Favorites</Text>
				</View>
                <View style = {styles.largeTextContainer}>
                    <Text style = {styles.largeText}>Coming Soon!</Text>
                </View>
			</View>
		);
	}
}

FavoritesScreen.navigationOptions = {
	header: null,
};

const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#fff"
		},
		headerContainer: {
			backgroundColor: "#ddd",
			paddingVertical: 15,
			borderBottomWidth: StyleSheet.hairlineWidth,
			borderBottomColor: '#bbb',
		},
		header: {
			fontSize: 20,
			textAlign: "center"
        },
        largeTextContainer: {
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        largeText: {
            color: "#ddd",
            fontSize: Dimensions.get('window').width * 0.25,
            textAlign: "center"
        }
});
