import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateFilter('tag', this.state.input.toLowerCase());
  }

  handleChange(e) {
    this.setState({ input: e.currentTarget.value });
  }

  render() {
    return (
      <div className='search-container'>
        <form onSubmit={this.handleSubmit}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input className='search'
                 onChange={this.handleChange}
                 type='text'
                 value={this.state.input}
                 placeholder='Search by keyword..'/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
