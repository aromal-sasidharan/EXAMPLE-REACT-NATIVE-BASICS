import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore'


const store = configureStore();

const ReactNativeReduxApp = () => {
    return (
      <Provider store={store}>
            <App />
        </Provider>
    );
}


AppRegistry.registerComponent('AwesomePlaces', () => ReactNativeReduxApp);
