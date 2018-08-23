import React, { Component } from 'react';
import { Button, Card, CardBody, CardText, Input } from 'reactstrap';
import firebase from 'firebase';
import config from '../config';
import Spinner from 'react-spinkit';
import { BrowserRouter as Router, Redirect, Link, Route, Switch, withRouter } from 'react-router-dom';

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
  componentDidMount = () => {
    firebase.initializeApp(config);
  };

  onButtonClick = () => {
    const { email, password, error } = this.state;

    this.setState({ error: '', loading: true });

    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then(this.onLoginSuccess.bind(this))
    //     .catch(() => {
    //       firebase
    //         .auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .then(this.onLoginSuccess.bind(this))
    //         .catch(this.onLoginFail.bind(this));
    //     });
    // }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  };

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
      redirect: true
    });
    this.props.history.push('/');
  };

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

export default withRouter(LoginView);
