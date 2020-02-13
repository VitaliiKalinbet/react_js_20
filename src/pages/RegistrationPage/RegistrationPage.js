import React, { Component } from 'react';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import routes from '../../routes/routes';
import styles from './RegistrationPage.module.css';

class RegistrationPage extends Component {
  state = {
    email: '',
    password: '',
    name: '',
  };

  inputIds = {
    emailId: shortid.generate(),
    passwordId: shortid.generate(),
    nameId: shortid.generate(),
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <section className={styles.container}>
        <h2 className={styles.title}>RegistrationPage</h2>
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
          <label htmlFor={this.inputIds.nameId}>
            <input
              className={styles.input}
              name="name"
              value={name}
              id={this.inputIds.nameId}
              type="text"
              placeholder="name"
              onChange={this.handleChange}
            />
          </label>
          <button className={styles.button} type="submit">
            Registration
          </button>
        </form>
        <Link to={routes.LOGIN_PAGE.path}>to login</Link>
      </section>
    );
  }
}

export default RegistrationPage;
