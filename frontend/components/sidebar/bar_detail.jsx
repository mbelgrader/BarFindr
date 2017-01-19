import React from 'react';
import { selectComments } from '../../reducers/selectors';
import CommentButton from './comment_button';
import RatingButton from './rating_button';

class BarDetail extends React.Component {
  constructor(props) {
    super(props);
    this.commentDelete = this.commentDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchBar(this.props.barId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.barId !== newProps.params.barId){
      this.props.fetchBar(parseInt(newProps.params.barId));
    }
  }

  commentDelete(id) {
    this.props.deleteComment(id);
  }

  render() {
    const { name, address } = this.props.bar;
    let comments = [];
    if (this.props.bar.comments) {
      comments = this.props.bar.comments.map((comment, i) => {
        let deleteLink;
          deleteLink = <span onClick={this.commentDelete.bind(null, comment.id)}>delete</span>;
        return (<li key={i}>
                  <span>@{comment.username}</span>{comment.body}
                  {deleteLink}
                </li>
              );
      });
    }
    return(
      <div className='sidebar detail'>
        <img src={this.props.bar.image} />
        <ul>
          <li className='bar-name'>{name}</li>
          <li className='address'>{address}</li>
        </ul>

        <RatingButton />
        <CommentButton />
        {this.props.children}

        <div className='comments'>
          <ul>
            {comments}
          </ul>
        </div>
      </div>

    );
  }
}

export default BarDetail;
