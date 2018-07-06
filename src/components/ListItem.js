import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native'


const ListItem = (props) => (
        <TouchableOpacity  onPress={props.onItemPressed}>
            <View style={styles.item}>
                <Image resizeMode="contain" style={styles.image} source={{uri:props.image}}/>
                <Text>{props.name}</Text>
            </View>
        </TouchableOpacity>
    ); 


const styles = StyleSheet.create({

    item:{
        width:"100%",
        backgroundColor:"#2196F3",
        padding : 5,
        marginBottom : 10,
        flexDirection : "row",
        alignItems:"center",
    },
    image:{
        width:30,
        height:30,
       
    }

});

export default ListItem;