import React from 'react';
import { withRouter } from 'react-router';

class CommentButton extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const barId = this.props.params.barId;
    const url = `/bars/${barId}/comment`;
    this.props.router.push(url);
  }

  render() {
    return (
      <button className="comment-button nav-button" onClick={this.handleClick}>
        Comment
      </button>
    );
  }
}

export default withRouter(CommentButton);
