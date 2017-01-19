import ReactStars from 'react-stars';
import React from 'react';
import { render } from 'react-dom';


class RatingButton extends React.Component {
  constructor(props) {
    super(props);
    this.ratingChanged = this.ratingChanged.bind(this);
  }

  ratingChanged(newRating) {
    console.log(newRating);
    // dispatch update rating button
  }

  render() {
    // debugger
    // gets averageRating but not displaying
    return (
      <div className='stars'>
        <ReactStars
          count={5}
          onChange={this.ratingChanged}
          size={20}
          color1={'#c3c6cc'}
          color2={'white'}
          value={this.props.averageRating} />
      </div>
      );
    }
}

export default RatingButton;
