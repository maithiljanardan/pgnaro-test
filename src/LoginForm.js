import React from 'react';
import './LoginForm.css'

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.createAccount = this.createAccount.bind(this)

  }

  createAccount() {
    console.log('createAccount registered')
    this.props.onRegister()
  }
  componentWillMount(){
    console.log('inside componentWillMount of LoginForm.js')
  }

  componentDidMount(){
    console.log('inside componentDidMount of LoginForm.js')
  }


  render() {
    console.log('rendering LoginForm')
    return (
          <div className="container h-100">
            <div className="row align-self-center justify-content-md-center w-100 h-100" id="pwd-container">
              <div className="col-md-6 col-md-offset-3 align-self-center h-75" >
                <section className="login-form">
                  <form method="post" action="" role="login">
                    <input type="email" name="email" placeholder="email" required className="form-control input-lg"  />
                    <input type="password" className="form-control input-lg" id="password" placeholder="password" required="" />
                    <div className="pwstrength_viewport_progress"></div>
                    <button type="submit" name="go" className="btn btn-lg btn-primary btn-block">sign in</button>
                    <div>
                      <button type="button" className="btn btn-link" onClick={this.createAccount}>create account</button> or <button type="button" className="btn btn-link">reset password</button>
                    </div>
                  </form>
                </section>
              </div>
          </div>
        </div>
    )
  }
}

export default LoginForm;
