import React from 'react';
import { StyleSheet, View, } from 'react-native';
import PlacesList from './src/components/PlacesList'
import PlaceInput from './src/components/PlaceInput'
import PlaceDetail from './src/components/PlaceDetail'
import Tshirt from './src/assets/tshirt.png'


export default class App extends React.Component {

  state = {
    placeName: "",
    places: [],
    selectedPlace: null

  }

  onPlaceNameChanged = (text) => {
    this.setState({
      placeName: text
    })

  }
  onItemSelected = (key) => {


    // this.setState(prevState => {
    //   return {places : prevState.places.filter((place) => {
    //       return place.key !== key
    //   })};
    // });
    this.setState( prevState => {

      return {
        selectedPlace : prevState.places.find( (place) => {
          return place.key === key
        })
      }

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
    let imageUrl = "https://orig00.deviantart.net/b6ca/f/2016/191/e/0/john_cena_render_01_by_annyrspngs-da9fzgl.png"
    let newPlace = {key: Math.random(), name:this.state.placeName, image:imageUrl}
    this.setState({
      places : this.state.places.concat(newPlace)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail place={this.state.selectedPlace}/>
        <PlaceInput textValue={this.state.placeName} onPlaceNameChanged={this.onPlaceNameChanged} onAddPressed={ () => this.onAddPressed()}/>
        <PlacesList places={this.state.places} onItemSelected={this.onItemSelected}/>
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
