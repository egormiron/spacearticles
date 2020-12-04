import React from 'react';
import ReactDOM from 'react-dom';

const MainComponent = React.createElement('h1', null, 'Hello, World')
const container = document.getElementById('root')

ReactDOM.render(MainComponent, container)
