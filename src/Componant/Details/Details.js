
import React from 'react';
import './Details.css'

const Details = (props) => {
     const { details } = props || {};
     // console.log(details);

     // total invest 
     const totalReducer = (privieous, current) => privieous + current.invest;
     const totalInvest = details.reduce(totalReducer, 0).toFixed(2);

     return (
          <div className=" details p-3">
               <h4><i class="fas fa-user"></i>CEOs Added : <span className="text-primary">{details.length}</span></h4>
               <p>Total Invest : <span className="text-primary"> <i class="fas fa-dollar-sign"></i> {totalInvest}</span></p>
               <h5>Investor name -</h5>
               <div className="text-primary fw-bold">
                    {
                         details.map(detail => <li>{detail.name}</li>)

                    }
               </div>
          </div>
     );
};

export default Details;