import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import ListItem from './src/components/ListItem'
import PlacesList from './src/components/PlacesList'
import PlaceInput from './src/components/PlaceInput'

export default class App extends React.Component {

  state = {
    placeName: "",
    places: []
  }

  onPlaceNameChanged = (text) => {
    this.setState({
      placeName: text
    })

  }
  onItemDelete = (index) => {

   
    if(this.state.places[index]){
      this.state.places.splice(index,1)
      this.setState({
          places: this.state.places
      })
    }
  }
  onAddPressed = () => {
    if(this.state.placeName.trim() === ""){
      return;
    }
    this.setState({
      places : this.state.places.concat(this.state.placeName)
    })
    // this.setState(prevState => {
    //   return{
    //   places : prevState.places.concat(prevState.placeName)
    //   };
    // });
  
  }
  render() {
    
    return (
      <View style={styles.container}>
       <PlaceInput textValue={this.state.placeName} onPlaceNameChanged={this.onPlaceNameChanged} onAddPressed={ () => this.onAddPressed()}/>
       <PlacesList places={this.state.places} onItemDelete={this.onItemDelete}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
});
