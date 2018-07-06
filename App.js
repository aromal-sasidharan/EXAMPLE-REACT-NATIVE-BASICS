import React from 'react';
import { StyleSheet, View, } from 'react-native';
import PlacesList from './src/components/PlacesList'
import PlaceDetail from './src/components/PlaceDetail'
import InputPlace from './src/components/InputPlace'

export default class App extends React.Component {

  state = {
  
    places: [],
    selectedPlace: null

  }

 
  onItemDelete = () => {
     this.setState(prevState => {
      return {
          places : prevState.places.filter((place) => {
              return place.key !== prevState.selectedPlace.key
              }),
          selectedPlace : null
            }
    })
    
  }
  onModalClose = () => [
    this.setState({
      selectedPlace : null
    })

  ]
  onItemSelected = (key) => {
    this.setState( prevState => {
      return {
        selectedPlace : prevState.places.find( (place) => {
          return place.key === key
        })
      }
    });
  }
  onAddPressed = (text) => {
    let imageUrl = "https://orig00.deviantart.net/b6ca/f/2016/191/e/0/john_cena_render_01_by_annyrspngs-da9fzgl.png"
    let newPlace = {key: Math.random(), name:text, image:imageUrl}
    this.setState({
      places : this.state.places.concat(newPlace)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail place={this.state.selectedPlace} onClose={this.onModalClose} onDeleteItem={this.onItemDelete}/>
        <InputPlace onAddPressed={(text) => this.onAddPressed(text)} />
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
