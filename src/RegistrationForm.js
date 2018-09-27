import React from 'react';


class RegistrationForm extends React.Component {


  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this)

  }

  signIn() {
    console.log('signIn registered')
    this.props.onLogin()
  }


  componentWillMount(){
        console.log('inside componentWillMount of RegistrationForm.js')
  }

  componentDidMount(){
        console.log('inside componentDidMount of RegistrationForm.js')
  }

  render() {

    console.log('rendering RegistrationForm')
    return (
      <div className="container h-100">
        <div className="row align-self-center justify-content-md-center w-100 h-100" id="pwd-container">
          <div className="col-md-6 col-md-offset-3 align-self-center h-75" >
            <section className="login-form">
              <form method="post" action="" role="login">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="name" />
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" />
                  <input type="password" className="form-control input-lg" id="password" placeholder="password" required="" />
                  <input type="password" className="form-control input-lg" id="confirm-password" placeholder="confirm password" required="" />
                  <button type="submit" name="go" className="btn btn-lg btn-success btn-block">register</button>
                  <div>
                    <button type="button" className="btn btn-link" onClick={this.signIn}>sign in</button> 
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    )
  }
}


export default RegistrationForm;
