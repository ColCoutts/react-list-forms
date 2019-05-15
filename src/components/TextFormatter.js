import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    color: 'black'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name] : target.value });
  }

  render() {
    const { text, color } = this.state;

    return (
      <>
        <input name="text" value={text} onChange={this.handleChange}></input>
        <input name="color" type="color" value={color} onChange={this.handleChange}></input>
        <h1 style={{ color }}>{text}</h1>
      </>
    );
  }
}
