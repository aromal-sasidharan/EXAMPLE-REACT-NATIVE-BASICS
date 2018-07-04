import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


// const ListItem = (props) => {

//     return (<View style={styles.listItem}>
//         <Text>{props.placeName}</Text>
//     </View>);
// };


const ListItem = (props) => (
        <TouchableOpacity  onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    ); 


const styles = StyleSheet.create({

    listItem:{
        width:"100%",
        backgroundColor:"#C7566B",
        padding : 20,
        marginBottom : 10
    }

});

export default ListItem;