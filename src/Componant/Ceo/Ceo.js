import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Ceo = (props) => {
     const { name, invest, imgage, address, age, company } = props.ceo;

     const element = <FontAwesomeIcon icon={faShoppingCart} />

     return (


          /*  <div class="card bg-dark text-white">
                <img src={imgage} class="card-img" alt="..." />
                <div class="card-img-overlay">
                     <h5 class="card-title">Card title</h5>
                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                     <p class="card-text">Last updated 3 mins ago</p>
                </div>
           </div>
  */

          <div className="col-md-4">
               <div class="card mb-3 bg-dark " style={{ height: "400px" }}>
                    <div class="row">

                         <div class="col-md-8 ">
                              <div class="card-body">
                                   <h3 class="text-white">{name}</h3>
                                   <p className="text-white">Company : {company}</p>
                                   <p className="text-white">address : {address}</p>
                                   <h6 className="text-white">age: {age}</h6>
                                   <h6 className="text-primary"> Invest-Amount :  {invest}</h6>
                                   <button onClick={() => props.handleDetails(props.ceo)} className="text-white bg-primary border border-2 border-info rounded p-1">{element} Add to details</button>

                              </div>
                         </div>
                         <div class="col-md-4 ">
                              <img src={imgage} class="img-fluid rounded " alt="..." />
                         </div>
                    </div>
               </div>
          </div>


     );
};

export default Ceo;