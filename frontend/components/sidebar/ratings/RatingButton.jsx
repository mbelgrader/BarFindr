import ReactStars from 'react-stars';
import React from 'react';
import { render } from 'react-dom';


class RatingButton extends React.Component {
  constructor(props) {
    super(props);
    this.ratingChanged = this.ratingChanged.bind(this);
  }

  ratingChanged(newRating) {
    const barId = this.props.barId;
    const rating = {rating: newRating, bar_id: barId};
    this.props.updateRating(rating);
  }

  render() {
    const { userRating, averageRating } = this.props;

    let ratingValue;
    let ratingSource;

    if (userRating > 0) {
      ratingValue = userRating;
      ratingSource = 'user';
    } else {
      ratingValue = averageRating;
      ratingSource = 'avg';
    }

    const ratingMessage = ratingSource === 'user' ? "Your rating" : "Average Rating";

    return (
      <div>
        <div className='stars'>
          <ReactStars
            count={5}
            onChange={this.ratingChanged}
            size={20}
            color1={'#c3c6cc'}
            color2={'white'}
            value={ratingValue} />
        </div>
        <p className='rating-message'>{ratingMessage}</p>
      </div>
      );
    }
}

export default RatingButton;
