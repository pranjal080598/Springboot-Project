import React from 'react'
import { Carousel, Alert } from 'react-bootstrap';
export const Home = () => (
  <div>
   <div className='container-fluid mt-3'>  
                         <div>
                         <Carousel>  
                         <Carousel.Item >  
                         <img style={{'height':"200px", 'width':"100%"}}  
                         className="d-block w-100"  
                        src={'/slide1.jpg'}  />  
                           <Carousel.Caption>  
                             <h3></h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item >  
                                 <img style={{'height':"200px"}}  
                                   className="d-block w-100"  
                                    src={'/slide2.jpg'}    />  
                                       <Carousel.Caption>  
                                   <h3></h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item >  
                                       <img style={{'height':"200px"}}  
                                        className="d-block w-100"  
                                         src={'/slide3.jpg'}   />  
                                        <Carousel.Caption>  
                                          <h3></h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                                </div>
                                
                                	<div>
						
						<Alert>
							<Alert.Heading>History</Alert.Heading>
					
					<p className="mb-0">
						Clinics have long existed in most countries. 
						Developing countries, which contain a large proportion of the world’s population, 
						generally do not have enough hospitals, equipment, and trained staff to handle the volume of 
						persons who need care. Thus, people in these countries do not always receive the benefits of modern 
						medicine, public health measures, or hospital care, and they generally have lower life expectancies.
					</p>
					<hr />
					<Alert.Heading>Known For</Alert.Heading>
					<p>
						Serving the wide-ranging needs of the community, the Clinic has often developed 
						outpatient facilities, as well as emergency, psychiatric, and rehabilitation services. In addition, 
						“bedless hospitals” provide strictly ambulatory (outpatient) care and day surgery. Patients arrive at the
						facility for short appointments. They may also stay for treatment in surgical or medical units for part 
						of a day or for a full day, after which they are discharged for follow-up by a primary care health provider.
					</p>
					<hr />
					<Alert.Heading>Ownership</Alert.Heading>
					<p>
						Serving the wide-ranging needs of the community, the Clinic has often developed 
						outpatient facilities, as well as emergency, psychiatric, and rehabilitation services. In addition, 
						“bedless hospitals” provide strictly ambulatory (outpatient) care and day surgery. Patients arrive at the
						facility for short appointments. They may also stay for treatment in surgical or medical units for part 
						of a day or for a full day, after which they are discharged for follow-up by a primary care health provider.
					</p>
					</Alert>
										</div>
                    </div>
)
