import React from 'react';
import { withRouter } from 'react-router';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.redirect = this.redirect.bind(this);
  }

  // redirect() {
  //   this.props.router.push(`/bars/${this.props.params.barId}`);
  // }

  handleSubmit(e) {
    e.preventDefault();
    const barId = parseInt(this.props.params.barId);
    const comment = Object.assign({}, this.state, {
      bar_id: barId
    });
    this.props.createComment({comment});
    // this.redirect();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="comment-form">
        <form onSubmit={ this.handleSubmit }>

          <label>Comment</label>
          <br/>
          <textarea
            cols='30'
            rows='10'
            value={ this.state.body }
            onChange={ this.update("body") }></textarea>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    );
 }
}

export default withRouter(CommentForm);
// <button onClick={ this.redirect }>X</button>
