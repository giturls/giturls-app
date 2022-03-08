import React from 'react';
import './InputSection.scss'
import { Field, reduxForm } from "redux-form";

export class InputSection extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="column http">
          <div className='input-container'>
            <label htmlFor="url-input" className="form-label">HTTP URL</label>
            <Field component="input" type="text" className={ "form-input" }
                   id="url-input" name="http" placeholder="https://github.com/giturls/giturls-app.git" />
          </div>
        </div>
        <div className="column ssh">
          <div className='input-container'>
            <label htmlFor="url-input" className="form-label">SSH URL</label>
            <Field component="input" type="text" className={ "form-input" } id="url-input" name="ssh"
                   placeholder="git@github.com:giturls/giturls-app.git"/>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

InputSection = reduxForm({
  form: 'git-urls',
})(InputSection);
