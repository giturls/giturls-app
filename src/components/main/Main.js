import React from 'react';
import './Main.scss'
import {InputSection} from "../input-section/InputSection";

export class Main extends React.Component {

  constructor(props) {
    super(props);
      this.handleHttpUrlChange = this.handleHttpUrlChange.bind(this);
      this.handleSSHUrlChange = this.handleSSHUrlChange.bind(this);
  }

  handleHttpUrlChange(event) {
    console.log(event);
  }

  handleSSHUrlChange(event) {
    console.log(event.nativeEvent);
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="column http">
                <InputSection label="HTTP" placeHolder="https://github.com/giturls/giturls-app.git"/>
              </div>
              <div className="column ssh">
                <InputSection label="SSH" placeHolder="git@github.com:giturls/giturls-app.git" />
              </div>
          </div>
      </div>
    );
  }
}
