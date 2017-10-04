import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '/Header.js';
import Menu from './Menu.js';
import Featured from './Featured.js';
import Current from './Current.js';
import Footer from './Footer.js';

class App extends Component {
  constructor(){
    this.super();
    this.state={
      header: true,
      menu: true,
      featured: true,
      current: true,
      footer: true,
      admin: false,
      post: false,
    }
  render() {
    return (
      <div>
        <Header />
        <Menu menu={this.state.menu}/>
        <Featured featured={this.state.featured} /> {/* Carousel of featured articles */}
        <Current current={this.state.current} />
        <Post post={this.state.post} />
        <Admin admin={this.state.admin} />
        <Footer footer={this.state.footer} />
      </div>
    );
  }
}

export default App;
