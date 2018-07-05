import React from 'react';
import { StyleSheet, View, } from 'react-native';
import PlacesList from './src/components/PlacesList'
import PlaceInput from './src/components/PlaceInput'
import Tshirt from './src/assets/tshirt.png'


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
  onItemDelete = (key) => {


    this.setState(prevState => {
      return {places : prevState.places.filter((place) => {
          return place.key !== key
      })};
    });
    // if(this.state.places[index]){
    //   this.state.places.splice(index,1)
    //   this.setState({
    //       places: this.state.places
    //   })
    // }
  }
  onAddPressed = () => {
    if(this.state.placeName.trim() === ""){
      return;
    }
    let imageUrl = "https://static.photocdn.pt/images/articles/2017/04/28/iStock-614507060.jpg"
    let newPlace = {key: Math.random(), value:this.state.placeName, image:imageUrl}
    this.setState({
      places : this.state.places.concat(newPlace)
    })
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
