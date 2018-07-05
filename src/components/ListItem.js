import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native'


// const ListItem = (props) => {

//     return (<View style={styles.listItem}>
//         <Text>{props.placeName}</Text>
//     </View>);
// };


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
        backgroundColor:"#C7566B",
        padding : 5,
        marginBottom : 10,
        flexDirection : "row",
        alignItems:"center"
    },
    image:{
        width:30,
        height:30,
        marginRight:10
    }

});

export default ListItem;