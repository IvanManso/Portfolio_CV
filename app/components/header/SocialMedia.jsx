import React from 'react';

export default class SocialMedia extends React.Component {
   render() {
      return (
         <div>
            <LinkedIn />
            <GitHub />
            <Twitter />
            <Instagram />
         </div>
      );
   }
}

class LinkedIn extends React.Component {
    render() {
        return (
            <div>
                <h1>LinkedIn</h1>
            </div>
        );
    }
}

class GitHub extends React.Component {
    render() {
        return (
            <div>
                <h1>GitHub</h1>
            </div>
        );
    }
}

class Twitter extends React.Component {
    render() {
        return (
            <div>
                <h1>Twitter</h1>
            </div>
        );
    }
}

class Instagram extends React.Component {
    render() {
        return (
            <div>
                <h1>Instagram</h1>
            </div>
        );
    }
}