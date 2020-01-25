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
            borderTopColor: '#ddd',
            paddingVertical: 20,
            paddingLeft: 10,
            flexDirection: 'row'
        },
        partNameContainer: {

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

                <View style = {styles.partImageContainer}>
                    <Image
                        source = {require('../Assets/Images/Parts/' + props.part.name + ' 1.jpg')} 
                    />
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
