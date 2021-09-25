
import React from 'react';

const Details = (props) => {
     const { details
     } = props;
     // console.log(details);

     let totals = 0;
     for (const total of details) {
          console.log(total)
          totals = totals + total.invest;

     }

     return (
          <div className=" p-3" style={{ background: "black", height: "300px" }}>
               <h4 >CEOs Added :{details.length}</h4>
               <p>Total Invest : $ {totals.toFixed(2)}</p>
          </div>
     );
};

export default Details;