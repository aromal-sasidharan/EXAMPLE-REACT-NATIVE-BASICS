import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ListItem, { } from './ListItem'

const PlacesList = (props) => {
    const placesView = props.places.map((place,i) => {
        return (<ListItem key={i} placeName={place} onItemPressed={ () => {props.onItemDelete(i)}}/>)
    })
    return (<View style={styles.listContainer}>
    {placesView}
   </View>)
};

const styles = StyleSheet.create({
    listContainer:{
        width : "100%",
      }
}
);

export default PlacesList;