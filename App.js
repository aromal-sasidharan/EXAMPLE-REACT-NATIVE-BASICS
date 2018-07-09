import React from 'react';
import { StyleSheet, View, } from 'react-native';
import {connect} from 'react-redux';


import PlacesList from './src/components/PlacesList'
import PlaceDetail from './src/components/PlaceDetail'
import InputPlace from './src/components/InputPlace'
import {addPlaceAction,deletePlaceAction,selectPlaceAction,deselectPlaceAction} from './src/store/actions/places'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail place={this.props.selectedPlace} onClose={this.props.onModalClose} onDeleteItem={this.props.onItemDelete}/>
        <InputPlace onAddPressed={(text) => this.props.onAddPressed(text)} />
        <PlacesList places={this.props.places} onItemSelected={this.props.onItemSelected}/>
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

const mapStatetoProps = (state) => {
  return { 
    places : state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};
const mapActionstoProp = (dispatch) => {
    return {
      onItemDelete: () => { dispatch(deletePlaceAction()) },
      onModalClose: () => { dispatch(deselectPlaceAction())},
      onItemSelected: (key) => {dispatch(selectPlaceAction(key))},
      onAddPressed: (placeName) => {dispatch(addPlaceAction(placeName))}
    }
}

export default connect(mapStatetoProps,mapActionstoProp)(App);