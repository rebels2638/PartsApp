import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking
} from 'react-native';

import Touchable from 'react-native-platform-touchable';
import IconButton from '../components/IconButton.js';

export default class MoreScreen extends React.Component {
  render() {
  return (
    <View style={styles.container}>
        <View style = {styles.headerContainer}>
            <Text style = {styles.header}>More</Text>
        </View>
        <View style = {styles.iconsContainer}>
          <IconButton onPress={() => alert(1)} name='Clear All Favorites' iconName='heart'/>
          <IconButton name='About' iconName='info'/>
          <IconButton name='Suggest' iconName='pencil-square' />
        </View>
    </View>
  );
  }
}

MoreScreen.navigationOptions = {
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
