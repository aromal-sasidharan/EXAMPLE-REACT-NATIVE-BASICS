import {actionTypes} from '../actions/places'

const initialState = {
      
    places: [],
    selectedPlace: null

};

deletePlace = (state) => {
    return {
        ...state,
        places : state.places.filter((place) => {
            return place.key !== state.selectedPlace.key
            }),
        selectedPlace :  null
    };
};
addPlace = (state, placeName) => {
    let imageUrl = "https://orig00.deviantart.net/b6ca/f/2016/191/e/0/john_cena_render_01_by_annyrspngs-da9fzgl.png"
    let newPlace = {key: Math.random(), name:placeName, image:imageUrl}
    return {
        ...state,
        places : state.places.concat(newPlace)
    };
};
setSelected = (state,key) => {
    return {
        ...state,
        selectedPlace : state.places.find( (place) => {
            return place.key === key
          })
    };
};
deSelect = (state) => {
    return {
        ...state,
        selectedPlace : null
    };

};
const reducer = (state = initialState,action) => {

    switch(action.type){
        
        case actionTypes.ADD:
        return addPlace(state,action.placeName);
        case actionTypes.SELECTED:
        return setSelected(state,action.placeKey);
        case actionTypes.DELETE:
        return deletePlace(state);
        case actionTypes.DESELECTED:
        return deSelect(state);
        default:
        return state;
    }
};


export default reducer;