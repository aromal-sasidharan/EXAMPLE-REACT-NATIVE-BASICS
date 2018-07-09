import {createStore,combineReducers} from 'redux'
import reducer from './reducers/places'

const allReducers = combineReducers({
    places: reducer
});

const configureStore = () => {
    return createStore(allReducers);
}
export default configureStore;