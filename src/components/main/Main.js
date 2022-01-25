import React from 'react';
import './Main.css'

export class Main extends React.Component {

    constructor(props) {
      super(props);
        this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {

    }

    render() {
        return (
          <div className="container">
              <div className="row">
                  <div className="column">
                      <label htmlFor="exampleFormControlInput1" className="form-label">SSH URL</label>
                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="git@github.com:giturls/giturls-app.git"/>
                  </div>
                  <div className="column">
                      <label htmlFor="exampleFormControlInput2" className="form-label">HTTP URL</label>
                      <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="https://github.com/giturls/giturls-app.git"/>
                  </div>
              </div>
          </div>
        );
    }
}
