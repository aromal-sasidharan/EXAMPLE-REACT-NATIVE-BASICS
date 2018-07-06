import React from 'react'
import {TextInput, View, Button, StyleSheet} from 'react-native'


class InputPlace extends React.Component{
    state = {
        placeName:""
    }
    onTextChanged = (val) => {
        this.setState({
            placeName:val
        })
    }
    onSubmitPressed = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onAddPressed(this.state.placeName)
    }
    render() {
       return( 
            <View style={styles.inputTypeContainer}>
                <TextInput
                placeholder="An Awesome place"
                style={styles.inputType}
                value={this.state.placeName}
                onChangeText={this.onTextChanged}
                />
                <Button
                title="Add Place"
                style={styles.inputButton}
                onPress = {this.onSubmitPressed}
                />
        </View>
       )
    }
}

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

export default InputPlace;