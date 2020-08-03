import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Form,Button } from 'react-bootstrap';
export class Login extends Component {
constructor(props){
  super(props);
  this.state={
  email:'',
  password:''
  }
 }
render() {
    return (
        
          <div class="text-center">
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>


  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  
 
  <Button variant="primary" type="submit">
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

export default Login;