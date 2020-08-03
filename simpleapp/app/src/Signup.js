import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Form,Button } from 'react-bootstrap';

import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
export class Signup extends Component {

constructor(props){
  super(props);
  this.state={
  email:'',
  password:'',
  cpassword:''
  };
  this.submitSignup=this.submitSignup.bind(this);
  this.formChange=this.formChange.bind(this);
}
  
  submitSignup(event) 
  {
    alert(this.state.email);
    alert(this.state.password);
    alert(this.state.cpassword);
    event.preventDefault();
  }
  formChange(event)
  {
    this.setState({
      // map key value
      [event.target.name]:event.target.value    
    });
  }

render() {
    return (
      
          <div class="text-center">
<Form onSubmit={this.submitSignup} id="signup">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control required type="email" placeholder="Enter email" name="email" value={this.state.email}  onChange={this.formChange} />
   
  </Form.Group>


  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control required type="password" placeholder="Password" name="password" value={this.state.password}  onChange={this.formChange}/>
  </Form.Group>
  
  <Form.Group controlId="formConfirmPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" name="cpassword" value={this.state.cpassword}  onChange={this.formChange}/>
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