import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';

export default class MyHello extends Component {
  render() {
    console.log(this.props.name);
    return ( < div > hello {
        this.props.name
      } < /div>)
    }
  }


  MyHello.propTypes = {
    name: PropTypes.string.isRequired
  };
