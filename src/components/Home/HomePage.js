import React from 'react';
import { Header } from '../Header/Navbar';
import Banner from './Banner';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <h1>Hello World</h1>
        <Banner />
      </div>
    );
  }
}

export { HomePage };