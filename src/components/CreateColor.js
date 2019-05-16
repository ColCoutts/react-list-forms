import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends PureComponent {
  static propTypes = {
    addColor: PropTypes.func.isRequired
  }

  state = {
    name: '',
    color: '#000000'
  }

  addColor = ({ name, color }) => {
    this.setState({ name, hex: color });
  }

  handleSubmit = event => {
    event.peventDefault();
    const { name, color } = this.state;

    this.props.addColor({ name, hex: color });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { color, name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" type="text" value={name} onChange={this.handleChange} />
        <input name="color" type="text" value={color} onChange={this.handleChange} />
        <button>ADD COLORS</button>
      </form>
    );
  }
}
