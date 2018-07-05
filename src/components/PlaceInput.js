import React from 'react'
import {TextInput, View, Button, StyleSheet} from 'react-native'



const PlaceInput = (props) => {

    return (<View style={styles.inputTypeContainer}>
    <TextInput
      placeholder="An Awesome place"
      style={styles.inputType}
      value={props.textValue}
      onChangeText={props.onPlaceNameChanged}
    />
    <Button
      title="Add Place"
      style={styles.inputButton}
      onPress = {props.onAddPressed}
    />
  </View>)

};


const styles = StyleSheet.create({
    inputTypeContainer: {
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#CDCDCD",
        alignItems : "center"
      },
      inputType: {
        width: "70%"
      },
      inputButton:{
        width : "30%"
      },
});

export default PlaceInput;