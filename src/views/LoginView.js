import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardText, Input } from 'reactstrap';
import firebase from 'firebase';
import config from '../config';
import Spinner from 'react-spinkit';
import { BrowserRouter as Router, Redirect, Link, Route, Switch, withRouter } from 'react-router-dom';
import { loginSuccess } from '../actions';

import HomeView from './HomeView';

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
      redirect: false
    };
  }
  componentWillMount = () => {
    localStorage.setItem('myCat', 'Tom');
  };
  componentDidMount = () => {
    firebase.initializeApp(config);
    console.log('item', localStorage.getItem('myCat'));
  };

  onButtonClick = () => {
    // console.log('click click', this.props);
    let email = 'z@z.com';
    let password = 'password';

    localStorage.setItem('user', firebase.auth());
    this.props.loginSuccess({ email, password });
  };

  getUserInfo = () => {
    console.log('user info');
    console.log('user', localStorage.getItem('user'));
  };

  // onLoginFail() {
  //   this.setState({ error: 'Authentication Failed', loading: false });
  // }
  //
  // onLoginSuccess = () => {
  //   this.setState({
  //     email: '',
  //     password: '',
  //     loading: false,
  //     error: '',
  //     redirect: true
  //   });
  //   this.props.history.push('/admin/NewListing');
  // };

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return <Button onClick={this.onButtonClick}>Log in</Button>;
  }

  render() {
    return (
      <Card>
        <CardBody>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
        </CardBody>

        <CardBody>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
          />
        </CardBody>

        <CardText style={styles.errorTextStyle}>{this.state.error}</CardText>

        <CardBody>{this.renderButton()}</CardBody>
        <Button onClick={this.getUserInfo}>User?</Button>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  const uid = state;
  console.log('chirp chirp', uid);
  return {
    uid: state.uid
  };
};

export default withRouter(connect(mapStateToProps, { loginSuccess })(LoginView));
