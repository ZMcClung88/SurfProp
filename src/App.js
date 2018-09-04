import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import firebase from 'firebase';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import Spinner from 'react-spinkit';
import HomeView from './views/HomeView';
import PropertyList from './views/PropertyList';
import SingleProperty from './views/SingleProperty';
import NewPost from './views/NewPost';
import NewListing from './views/NewListing';
import LoginView from './views/LoginView';
import AdminPropertyView from './views/AdminPropertyView';
import Blog from './views/BlogView';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import SocialLinks from './components/SocialLinks';
import SubscribeButton from './components/SubscribeButton';
import Background from './media/bg.jpg';
import Logo from './media/4a8dfe302137ea75d20d9e9e23a46c47_taal-volcano-tagaytay-vacation-house-in-philippines-tagaytay-vacation-house-clipart_2548-1482.svg';
import MediaQuery from 'react-responsive';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeView} />
          <Route path="/properties" component={PropertyList} />
          <Route path="/singleProperty" component={SingleProperty} />
          <Route path="/Blog" component={Blog} />
          <Route exact path="/admin" component={LoginView} />
          <Route path="/admin/NewPost" component={NewPost} />
          <Route path="/admin/NewListing" component={NewListing} />
          <Route path="/admin/properties" component={AdminPropertyView} />
        </div>
      </Router>
    );
  }
}

export default App;
