import React from 'react';
import { selectComments } from '../../reducers/selectors';

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
        <ul>
          <li>{name}</li>
          <li>{address}</li>
        </ul>

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

// {comments.map((comment, i) => <li key={i}>{comment}</li>)}
