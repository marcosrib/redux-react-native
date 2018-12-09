import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Routes from './Routes';
import { Reducer } from 'react-native-router-flux';
import Reducers from './reducers'
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAdIOBGYFkHcPy-lq2bnDv9ojBSPy-hEpY",
    authDomain: "whatsapp-clone-53c5c.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-53c5c.firebaseio.com",
    projectId: "whatsapp-clone-53c5c",
    storageBucket: "whatsapp-clone-53c5c.appspot.com",
    messagingSenderId: "436231702992"
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
    <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
      <Routes />
    </Provider>
    );
  }
}

export default App;