import { Navbar, Nav, NavItem, NavDropdown, Container, Col } from 'react-bootstrap';  
import React, { Component } from 'react'  
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
// import './Footer.css'

const Styles = styled.div`
  footer{
    background-color: #222;
    color: white;
   
  }
  }

`;
export class Footer extends Component {  
        render() {  
  
                return ( 
                 <Navbar fixed="bottom" bg="dark" variant="dark">
                   <Container>
                     <Col lg={12} className="text-center text-muted">
                       <div>
   Made with &hearts; by Pranjal

  </div>

                     </Col>
                   </Container>
                 </Navbar>
				)
				}
			}
			export default Footer 


            
      {/* <footer class="footer">
        <div class="container">
          <div class="row">
      
            
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
             
              <p>Made with &hearts; by Pranjal </p>
              </Navbar.Brand>
              </Navbar>
            </div>
          </div>
        </div>
      </footer> */}


            
{/* <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="row justify-content-center">
            <div class="col-xs-12">
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    
    
          <Nav>
            <Navbar.Brand>
        Made with &hearts; by Pranjal
      </Navbar.Brand> 
          </Nav>           
      </Navbar> 



            </div>
            </div>

            </div> 
            </div>
                </footer> */}




  {/* <div className="fixed-bottom">  
      
          </div> */}
				