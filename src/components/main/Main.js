import React from 'react';
import './Main.scss'

export class Main extends React.Component {

    constructor(props) {
      super(props);
        this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      console.log(event.nativeEvent);
    }

    render() {
        return (
          <div className="container">
              <div className="row">
                  <div className="column http">
                      <div className='input-container'>
                        <label htmlFor="exampleFormControlInput2" className="form-label">HTTP</label>
                        <input type="text" className="form-input" id="http-input" onChange={this.handleChange} placeholder="https://github.com/giturls/giturls-app.git"/>
                      </div>
                  </div>
                  <div className="column ssh">
                    <div className='input-container'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">SSH</label>
                      <input type="text" className="form-input" id="ssh-input" onChange={this.handleChange} placeholder="git@github.com:giturls/giturls-app.git"/>
                    </div>
                  </div>
              </div>
          </div>
        );
    }
}
