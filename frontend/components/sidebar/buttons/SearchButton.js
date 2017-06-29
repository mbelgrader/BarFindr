import React from 'react';

class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // e.preventDefault();
    if (this.state.selected) {
      this.setState({ selected: false });
      this.props.updateFilter('tag', '');
    } else {
      this.setState({ selected: true });
      const tag = this.props.tag.toLowerCase();
      this.props.updateFilter('tag', tag);
    }
  }

  render() {
    const style = this.state.selected ? 'selected-button' : 'unselected-button';
    return (
      <button className={style} onClick={this.handleClick}>
        {this.props.tag}
      </button>
    );
  }
}

export default SearchButton;
