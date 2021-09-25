import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Ceo = (props) => {
     const { name, invest, imgage, address, age, company } = props.ceo;

     const element = <FontAwesomeIcon icon={faShoppingCart} />

     return (

          <div className="col-md-4">
               <div class="card mb-3 bg-dark   p-2" style={{ height: "400px" }}>
                    <div class="row  align-items-center">
                         <div class="col-md-4">
                              <img src={imgage} class="img-fluid rounded-circle" alt="..." />
                         </div>
                         <div class="col-md-8">
                              <div class="card-body">
                                   <h3 class="text-white">{name}</h3>
                                   <p className="text-white">Company : {company}</p>
                                   <p className="text-white">address : {address}</p>
                                   <h6 className="text-white">age: {age}</h6>
                                   <h6 className="text-primary"> Invest-Amount :  {invest}</h6>
                                   <button onClick={() => props.handleDetails(props.ceo)} className="text-white bg-primary border border-2 border-info rounded p-1">{element} Add to details</button>

                              </div>
                         </div>
                    </div>
               </div>
          </div >




     );
};

export default Ceo;