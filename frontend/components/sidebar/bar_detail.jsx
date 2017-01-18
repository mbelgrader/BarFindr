import React from 'react';
import { selectComments } from '../../reducers/selectors';
import CommentButton from './comment_button';
import RatingButton from './rating_button';

class BarDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBar(this.props.barId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.barId !== newProps.params.barId){
      this.props.fetchBar(parseInt(newProps.params.barId));
    }
  }

  render() {
    const { name, address } = this.props.bar;
    let comments = [];
    if (this.props.bar.comments) {
      comments = this.props.bar.comments.map((comment, i) => {
        return <li key={i}><span>@{comment.username}</span>{comment.body}</li>;
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
