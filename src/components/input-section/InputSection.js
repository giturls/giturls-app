import React from 'react';
import './InputSection.scss'

export class InputSection extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event);
  }

  render() {
    return (
      <div className='input-container'>
        <label htmlFor="url-input" className="form-label">{this.props.label}</label>
        <input type="text" className="form-input" id="url-input" onChange={this.handleHttpUrlChange} placeholder={this.props.placeHolder} />
      </div>
    );
  }
}
