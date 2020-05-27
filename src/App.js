import React from 'react';
import Router from './router';
import configureStore from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
const {store, persistor} = configureStore();


function App() {
  return (
    <div>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router/>
            </PersistGate>
        </Provider>
    </div>
    );
}

export default App;
