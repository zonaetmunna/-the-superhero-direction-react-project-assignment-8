import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Ceo = (props) => {
     const { name, invest, imgage, address, age, company } = props.ceo;

     const element = <FontAwesomeIcon icon={faShoppingCart} />

     return (
          <div className="col-md-4 g-3">
               <div class="card bg-dark shadow-lg border border-white  h-100">
                    <img src={imgage} class="img-fluid rounded" alt="..." />
                    <div class="card-body">
                         <h3 class="text-white">{name}</h3>
                         <p className="text-white">Company : {company}</p>
                         <p className="text-white">address : {address}</p>
                         <h6 className="text-white">age: {age}</h6>
                         <h6 className="text-primary"> Invest-Amount :  {invest}</h6>
                         <br />
                         <button onClick={() => props.handleDetails(props.ceo)} className="text-white bg-primary border border-2 border-info rounded p-1">{element} Add to details</button>
                    </div>
               </div>
          </div>



     );
};

export default Ceo;