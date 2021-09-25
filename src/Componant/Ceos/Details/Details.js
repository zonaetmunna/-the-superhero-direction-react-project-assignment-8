
import React from 'react';
import './Details.css'

const Details = (props) => {
     const { details
     } = props;
     // console.log(details);

     let name = '';
     let totals = 0;
     for (const total of details) {
          // console.log(total)
          totals = totals + total.invest;
          // console.log(total.imgage);
          // image = image + total.imgage;
          name = name + total.name;
     }

     return (
          <div className=" details p-3">
               <h4>CEOs Added : <span className="text-primary">{details.length}</span></h4>
               <p>Total Invest : <span className="text-primary"> $ {totals.toFixed(2)}</span></p>
               <li>{name}</li>
          </div>
     );
};

export default Details;