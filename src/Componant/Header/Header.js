import React from 'react';
import './Header.css'

const Header = () => {
     return (
          <div className="header bg-dark text-white text-center mb-5">
               <h1 className="p-3 "> <i class="far fa-building text-primary me-2"></i>SWITZERLAND <span className="text-primary"> CEO </span> FOUNDATION</h1>
               <p className="w-75 mx-auto  p-1">This is largest community for softeare industry devlopment.It will be big change for software industry.This year’s awardees have used their diverse backgrounds and strategic leadership to drive the growth and expansion of their companies, despite the financial stress that the COVID-19 pandemic has placed on the overall economic environment</p>
               <h3 className="pb-2">Total invest : 500 milion</h3>

          </div>
     );
};

export default Header;