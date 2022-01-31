import React from 'react';
import './Main.scss'
import { InputSection } from "../input-section/InputSection";
import { reducer } from "../../state/reducer";
import { createStore } from "redux";

export class Main extends React.Component {

  constructor(props) {
    super(props);
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
