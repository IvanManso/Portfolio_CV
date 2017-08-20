import React from 'react';

export default class Navbar extends React.Component {
   render() {
      return (
         <div>
            <Menu />
         </div>
      );
   }
}

class Menu extends React.Component {
    render() {
        return (
            <div>
                <h1>Menu</h1>
            </div>
        );
    }
}