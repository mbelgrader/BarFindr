import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchBar from './search_bar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
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
        <Link to="/"><h1 id="logo">BarFindr</h1></Link>
        <SearchBar updateFilter={updateFilter} />
        {currentUser ? this.signOut() : this.links()}
      </nav>
    );
  }
}

export default withRouter(Header);
