import React from 'react';

class BarDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBar(this.props.barId);
  }

  render() {
    const { name, address } = this.props.bar;
    return(
      <div className='sidebar'>
        <ul>
          <li>{name}</li>
          <li>{address}</li>
        </ul>
      </div>

    );
  }
}

export default BarDetail;
