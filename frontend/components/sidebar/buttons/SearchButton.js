import React from 'react';

class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if ( newProps.tagFilters.length < 1 ) {
      this.setState({ selected: false });
    }
  }

  handleClick() {
    const tag = this.props.tag.toLowerCase();

    if (this.state.selected) {
      this.setState({ selected: false });
      this.props.deleteFilter('tags', tag);
    } else {
      this.setState({ selected: true });
      this.props.addFilter('tags', tag);
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
