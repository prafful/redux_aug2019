import React from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from './rootcomponent/parentcomponent';
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from './reducers/combine-reducers';

var location = document.getElementById("reduxroot")

const reduxStore = createStore(allReducers)

ReactDOM.render(
            <Provider store={reduxStore}>
                <ParentComponent>
                </ParentComponent>
            </Provider>  ,
                location
                )