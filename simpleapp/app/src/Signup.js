import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
export class Signup extends Component {

constructor(props){
  super(props);
  this.state=this.initialState;
  this.submitSignup=this.submitSignup.bind(this);
  this.formChange=this.formChange.bind(this);
}
initialState={
   email:'',
  password:'',
  cpassword:''
  
}
  
  submitSignup  = event =>
  {
    event.preventDefault();

    const user=
    {
    email:this.state.email,
    password:this.state.password,
    cpassword:this.state.cpassword

    };
    axios.post("", user)
    .then(response => {
      if (response.data != null)
      {
        this.setState(this.initialState);
        alert("Successfully registered")
      }
    });
  }
  formChange = event =>
  {
    this.setState({
      // map key value
      [event.target.name]:event.target.value    
    });
  }


render() {

    const{email, password, cpassword}=this.state;
    
    return (
      
          <div class="text-center">
<Form onSubmit={this.submitSignup} id="signup">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control required autoComplete="off" type="email" placeholder="Enter email" name="email" value={email}  onChange={this.formChange} />
   
  </Form.Group>


  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control required autoComplete="off" type="password" placeholder="Password" name="password" value={password}  onChange={this.formChange}/>
  </Form.Group>
  
  <Form.Group controlId="formConfirmPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" autoComplete="off" placeholder="Confirm Password" name="cpassword" value={cpassword}  onChange={this.formChange}/>
  </Form.Group>
 
  <Button variant="success" type="submit">
    Submit
  </Button>
</Form>
			  
          {/* <AppBar
             title="Sign Up"
           /> */}
           
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Signup;