import React, { Component } from 'react';
import { createStore } from 'redux';

/*
 * Store
 */
 export default class Store extends Component {
     const store = createStore(counterReducer);
 }
