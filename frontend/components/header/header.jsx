import React from 'react';
import { Link, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.clickHome = this.clickHome.bind(this);
  }

  links() {
    return (
      <div>
        <Link className='nav-button links' to="/demo">Demo</Link>
        <Link className='links' to="/signup">Sign Up</Link>
        <Link className='links' to="/login">Log In</Link>
      </div>
    );
  }

  clickHome() {
    this.props.updateFilter('tag', '');
    this.props.router.push("/");
  }

  handleLogout() {
    this.props.logout();
    this.props.router.push("/");
  }

  signOut() {
    return <button className='nav-button links'
                   onClick={this.handleLogout}>Log Out</button>;
  }

  render() {
    const { updateFilter, currentUser } = this.props;
    return(
      <nav>
        <button id='logo' onClick={this.clickHome}>BarFindr</button>;
        {currentUser ? this.signOut() : this.links()}
      </nav>
    );
  }
}

export default withRouter(Header);
