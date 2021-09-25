import React, { useEffect, useState } from 'react';
import Ceo from '../Ceo/Ceo';
import Details from './Details/Details';

const Ceos = () => {
     const [ceos, setCeos] = useState([]);
     const [details, setDetails] = useState([]);
     useEffect(() => {
          fetch('./ceo.JSON')
               .then(res => res.json())
               .then(data => setCeos(data))
     }, [])
     const handleDetails = (ceo) => {
          const newDetails = [...details, ceo];
          setDetails(newDetails);

     }

     return (
          <div>

               <div class="row m-2">
                    <div class="col-lg-9">
                         <div class="row">
                              {
                                   ceos.map(ceo => <Ceo
                                        key={ceo.id}
                                        ceo={ceo}
                                        handleDetails={handleDetails}
                                   ></Ceo>)
                              }

                         </div>

                    </div>
                    <div class="col-lg-3 ">
                         <Details details={details}></Details>


                    </div>
               </div >


          </div>
     );
};

export default Ceos;