import React from 'react';
import { Link, withRouter } from 'react-router';
import { Guide } from '../sidebar/Guide';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirect();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== '/demo') {
      this.setState({email: '', password: ''});
    } else {
      this.setState({email: 'demo', password: 'password'});
    }

    if (this.props.location.pathname !== newProps.location.pathname)
      this.props.clearErrors();
  }

  componentDidMount() {
    if (this.props.formType === 'demo')
      this.setState({email: 'demo', password: 'password'});
  }

  redirect() {
    if (this.props.loggedIn)
      this.props.router.push("/");
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  otherLink() {
    if (this.props.formType === 'login') {
      return (
        <div className='account-message'>
          <Link to='/signup'>Create an account</Link>
        </div>
      );
    } else {
      return (
        <div className='account-message'>
          <span>Already have an account? </span>
          <Link to='login'>Log In</Link>
        </div>
      );
    }
  }

  usernameInput() {
    if (this.props.formType === 'signup') {
      return (
        <input type='text'
               onChange={this.update('username')}
               value={this.state.username}
               className={'form-input'}
               placeholder='Username' />
      );
    }
  }

  showErrors() {
    return (
      <ul className='errors'>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    return (
      <div>
        <Guide />
        <div className="account-form">
          <form onSubmit={this.handleSubmit}>
            <h1>{this.capitalize(formType)}</h1>

            {this.showErrors()}

            {this.usernameInput()}
            <br />

            <input type='text'
                   onChange={this.update('email')}
                   value={this.state.email}
                   className={'form-input'}
                   placeholder='Email' />

            <br />

            <input type='password'
                   onChange={this.update('password')}
                   value={this.state.password}
                   className={'form-input'}
                   placeholder='Password' />

            <br />

            <input className='button form-submit' type='submit' value='Enter' />

            {this.otherLink()}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
