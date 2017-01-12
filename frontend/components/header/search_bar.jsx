import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: ''};
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ filter: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input className='search'
               onChange={this.update}
               type='text'
               value={this.state.filter}
               placeholder='Search..'/>
      </div>
    );
  }
}

export default SearchBar;
