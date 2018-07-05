import React from 'react';
import {View, Text, StyleSheet,ScrollView, FlatList} from 'react-native';
import ListItem from './ListItem'

const PlacesList = (props) => {
    renderItem = ({item}) => {
        return (
            <ListItem name={item.value} image={item.image} onItemPressed={ () => {props.onItemDelete(item.key)}}/>
        )
    }
    return (<FlatList
        showsVerticalScrollIndicator = {false}
        style={styles.listContainer}
        data={props.places}
        renderItem={renderItem}
        keyExtractor = {(item, index) => item.key.toString()}
       />
    )
   
};

const styles = StyleSheet.create({
    listContainer:{
        width : "100%",
      }
}
);

export default PlacesList;