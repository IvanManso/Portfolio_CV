import React from 'react';
import Navbar from './Navbar.jsx';
import SocialMedia from './SocialMedia.jsx';

export default class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Logo</h1>
            <Navbar />
            <SocialMedia />
         </div>
      );
   }
}