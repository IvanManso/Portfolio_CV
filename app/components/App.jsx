// ES5
// var React = require('react');

// var App = React.createClass({
//     render: function() {
//         return <h1>Setup Ready</h1>;
//     }
//   });

import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Setup Ready</h1>
            </div>
        );
    }
}