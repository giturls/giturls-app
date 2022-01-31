import React from 'react';
import { createStore } from "redux";

import './InputSection.scss'
import { reducer } from "../../state/reducer";
import {httpUrlModified, sshUrlModified} from "../../state/actions";

export class InputSection extends React.Component {

  constructor(props) {
    super(props);
    this.store = createStore(reducer);
    this.handleChange = this.handleChange.bind(this);
  }

  dispatchChanges(fieldName) {
    switch(fieldName) {
      case 'sshUrl':
        this.store.dispatch(sshUrlModified());
        break;
      case 'httpUrl':
        this.store.dispatch(httpUrlModified());
        break;
    }
  }

  async handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    await this.setState({[name]: value});
    this.dispatchChanges(name);
  }

  render() {
    return (
      <div className='input-container'>
        <label htmlFor="url-input" className="form-label">{ this.props.label }</label>
        <input type="text" className={"form-input" + (this.state.errors[this.props.name] ? " hasError" : "") }
               id="url-input" name={ this.props.name } onChange={ this.handleChange }
               placeholder={ this.props.placeHolder } value={ this.state[this.props.name] }/>
      </div>
    );
  }
}
