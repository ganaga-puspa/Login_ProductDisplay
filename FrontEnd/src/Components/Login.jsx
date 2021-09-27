import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';


export default class Login extends Component {
  

  constructor(props) {
    super(props)
    
    const token = localStorage.getItem("token")

    let loggedIn = true 
    if(token == null){
      loggedIn = false
    }
  
    this.state = {

      username:'',
      password:'',
      loggedIn
       
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
    
  

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm(e){
    e.preventDefault()
    const {username , password} = this.state
    if(username === "ganaga" && password === "1234"){
      localStorage.setItem("token" , "sample")
      this.setState({
        loggedIn: true
      })
    }
  }

  render() {

    if(this.state.loggedIn){
      return <Navigate to="/admin" />;

    }

    return (
      <div>
        <div className="container">
        <div className="container">
  <div className="w-50 mx-auto shadow p-5">
    <h2 className="text-center mb-4">ADMIN LOGIN</h2>
    
    <hr></hr>
    
    <form  onSubmit={this.submitForm}>
            <div className="form-group">
                <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={this.onChange}
                />
            </div>
            <hr></hr>
            <div className="form-group">
                <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.onChange}
                />
            </div>
            <hr></hr>
            <center>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            </center>
      </form>
            

     
   
  </div>
</div>
    </div>
      </div>
    )
  }
}
