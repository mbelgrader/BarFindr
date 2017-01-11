import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirect();
  }

  componentDidMount() {

        if (this.props.formType === 'demo') {
          this.setState({email: 'demo', password: 'password'});
        }

  }

  redirect() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }

  capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  otherLink() {
    if (this.props.formType === 'login') {
      return (
        <div className='account-message'>
          <span>or </span>
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

  showErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    return (
      <div className="account-form">
        <form onSubmit={this.handleSubmit}>
          <h1>{this.capitalize(formType)}</h1>

          {this.showErrors()}

          <label>Email:
            <input type='text'
                   onChange={this.update('email')}
                   value={this.state.email} />
          </label>
          <br />
          <label>Password:
            <input type='password'
                   onChange={this.update('password')}
                   value={this.state.password} />
          </label>
          <br />
          <input className='button'type='submit' value='Submit' />

          {this.otherLink()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
