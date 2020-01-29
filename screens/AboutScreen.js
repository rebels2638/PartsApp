import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ListItem from '../components/ListItem.js';

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
              <Image resizeMode = "contain" style = {styles.image} source = {require('./Assets/Symbols/14.png')}></Image>
              <Text style = {styles.title}>Tools</Text>
          </View> 
          {data.tools.map(tool => <ListItem type = "Tools" item={tool} nav = {this.props.navigation}/>)}
        </ScrollView>
      </View>
    );
  }
}

ToolsListScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  titleTextContainer: {
      paddingLeft: 20,
      paddingBottom: 10,
      flexDirection: 'row',
  },
  image:{
    width: 250,
    height: 250,
    borderRadius: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30
  }
});
