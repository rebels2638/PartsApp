import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TabBarIcon from './TabBarIcon.js';

export default function ListItem(props) {
    const styles = StyleSheet.create({
        itemContainer: {
            paddingLeft: 20
        },
        itemInfoContainer: {
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: '#ccc',
            paddingVertical: 20,
            paddingLeft: 10,
            flexDirection: 'row',
            alignItems: "center"
        },
        partNameContainer: {
            flex: 1,
            paddingLeft: 10
        },
        partName: {
            fontSize: 18,
        },
        iconContainer: {
            position: "absolute",
            right: 20
        }
    });

    return (
        <View style = {styles.itemContainer}>
            <View style = {styles.itemInfoContainer}>

                <View>
                        <Image style = {{flex: 1, width: 50, height: 50, resizeMode: 'contain'}} source = {require('../Assets/Images/robot-dev.png')} />
                </View>

                <View style = {styles.partNameContainer}>
                    <Text style = {styles.partName}>{props.part.name}</Text>
                </View>
            
                <View style = {styles.iconContainer}>
                    <TabBarIcon name = {"angle-right"} />
                </View>

            </View>
        </View>
    );
}
