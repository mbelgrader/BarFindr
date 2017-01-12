import React from 'react';

class BarDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBar(this.props.barId);
  }

  componentWillReceiveProps(newProps) {
    this.props.params.barId;
    newProps.params.barId;

    if (this.props.params.barId !== newProps.params.barId){
      // debugger
      this.props.fetchBar(parseInt(newProps.params.barId));
    }

  }

  render() {
    const { name, address } = this.props.bar;
    return(
      <div className='sidebar detail'>
        <ul>
          <li>{name}</li>
          <li>{address}</li>
        </ul>
      </div>

    );
  }
}

export default BarDetail;
