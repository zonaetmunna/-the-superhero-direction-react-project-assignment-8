
import React from 'react';
import './Details.css'

const Details = (props) => {
     const { details } = props || {};
     // console.log(details);

     const totalReducer = (privieous, current) => privieous + current.invest;
     const totalInvest = details.reduce(totalReducer, 0).toFixed(2);

     return (
          <div className=" details p-3">
               <h4>CEOs Added : <span className="text-primary">{details.length}</span></h4>
               <p>Total Invest : <span className="text-primary"> $ {totalInvest}</span></p>
               <div className="text-primary fw-bold">
                    {
                         details.map(detail => <li>{detail.name}</li>)

                    }
               </div>



          </div>
     );
};

export default Details;