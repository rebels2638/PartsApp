import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TabBarIcon from './TabBarIcon.js';

export default function IconButton(props) {
    const styles = StyleSheet.create({
        buttonContainer: {
            paddingVertical: 10,
            paddingTop: 20,
            paddingHorizontal: 10,
            flexDirection: "column",
            flex: 1,
            alignItems: "center"
        },
        iconText: {
            fontSize: 15,
            paddingTop: 5,
            textAlign: "center"
        },
        icon: {
            backgroundColor: "#29adff",
            borderRadius: 50,
            width: 50,
            height: 50,
            alignSelf: "center",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }
    })
    return (
        <View style = {styles.buttonContainer}>
            <View style = {styles.icon}>
                <TabBarIcon name = {props.iconName} button = {true} />
            </View>
            <View style = {{alignSelf: "center"}}>
                <Text style = {styles.iconText}>{props.name}</Text>
            </View>
        </View>
    );
}
