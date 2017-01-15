import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.updateFilter('tag', this.state.input);
  }

  handleChange(e) {
    this.setState({ input: e.currentTarget.value });
    // debugger
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input className='search'
                 onChange={this.handleChange}
                 type='text'
                 value={this.state.input}
                 placeholder='Search..'/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
