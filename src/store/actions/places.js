
export const actionTypes = {
    DELETE   : 'DELETE',
    ADD : 'ADD',
    SELECTED :  'SELECTED',
    DESELECTED:  'DESELECTED',
};

export const addPlaceAction = (placeName) => {
    return {
            type : actionTypes.ADD,
            placeName : placeName
    }
};

export const selectPlaceAction = (placeKey) => {
    return {
        type : actionTypes.SELECTED,
        placeKey : placeKey
    }
}; 

export const deletePlaceAction = () => {
    return {
        type : actionTypes.DELETE
    }
};

export const deselectPlaceAction = () => {
    return {
        type : actionTypes.DESELECTED
    }
};
