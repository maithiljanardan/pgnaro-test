import React, { Component } from 'react';

import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

class LoginControl extends Component {


      constructor(props) {

            super(props);
            console.log('inside LoginControl.js constructor =>  concalling constructor for setting state and binding event handlers')
            this.state = { isRegistered: true }
            this.handleLoginReg = this.handleLoginReg.bind(this);
      }

      componentWillMount(){
            console.log('inside componentWillMount of LoginControl.js')
      }

      componentDidMount(){
            console.log('inside componentDidMount of LoginControl.js')
      }

      handleLoginReg(e) {
            console.log('login and registration buttons are being handled here');
            this.setState(prevState => ({
                  isRegistered: !prevState.isRegistered
            }))
      }

      render() {
            console.log('rendering the LoginControl Component')
            const isRegistered = this.state.isRegistered;
            let form;

            form = isRegistered ? (<LoginForm onRegister={this.handleLoginReg} />) : (<RegistrationForm onLogin={this.handleLoginReg} />)

            return (
                  form
            )
      }
}

export default LoginControl;
