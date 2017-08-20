import React from 'react';
import Header from './header/Header.jsx';
import Content from './content/Content.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}
