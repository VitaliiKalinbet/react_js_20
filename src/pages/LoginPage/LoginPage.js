/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as authOperations from '../../redux/auth/authOperations';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import styles from './LoginPage.module.css';
import routes from '../../routes/routes';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  inputIds = {
    emailId: shortid.generate(),
    passwordId: shortid.generate(),
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { login } = this.props;
    login({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <section className={styles.container}>
        <h2 className={styles.title}>LoginPage</h2>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.inputIds.emailId}>
            <input
              className={styles.input}
              name="email"
              value={email}
              id={this.inputIds.emailId}
              type="email"
              placeholder="email"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor={this.inputIds.passwordId}>
            <input
              className={styles.input}
              name="password"
              value={password}
              id={this.inputIds.passwordId}
              type="password"
              placeholder="password"
              onChange={this.handleChange}
            />
          </label>
          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
        <Link to={routes.REGISTRATION_PAGE.path}>to register</Link>
      </section>
    );
  }
}

const mDTP = dispatch => ({
  login: user => dispatch(authOperations.login(user)),
});

export default withAuthRedirect(connect(null, mDTP)(LoginPage));
