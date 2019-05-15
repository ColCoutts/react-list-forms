import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    formattedText: '',
    color: 'black',
    font: 'Banner'
  }

  formatText = () => {
    const { text, font } = this.state;

    figlet.text(text, {
      font: font
    }, (err, result) => {
      this.setState({ formattedText: result });
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name] : target.value }, () => {
      this.formatText();
    });
  }

  render() {
    const { text, formattedText, font, color } = this.state;

    const fontOptions = ['Bright', 'Banner', 'Avatar', 'Alligator', 'Cards', 'Catwalk'].map(font => {
      return <option key={font} value={font}>{font}</option>;
    });

    return (
      <>
        <select name="font" value={font} onChange={this.handleChange}>{fontOptions}</select>
        <input name="text" value={text} onChange={this.handleChange}></input>
        <input name="color" type="color" value={color} onChange={this.handleChange}></input>
        <h1 style={{ color }}>{formattedText}</h1>
      </>
    );
  }
}
