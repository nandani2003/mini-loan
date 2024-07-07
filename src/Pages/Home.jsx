import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css'

const HomePage = ({ user }) => {
  console.log("home", user);

  return (
    <div className="main-container">
      <div className="header">
        <h3 className='text-xl m-3' data-aos="fade-right" data-aos-delay="0">Welcome to the</h3>
        <h1 className='text-6xl m-6 font-bold tracking-wider' data-aos="zoom-in">Mini-Loan<span className='text-[30px]' data-aos="fade-up"
          data-aos-duration="1500">s</span></h1>

        <p className='text-[#36B3EB] text-xl m-4' data-aos="fade-left" data-aos-delay="0">"Your Financial Bridge to Instant Solutions!"</p>
        <p >Apply Easy loans and manage your Installments.</p>
      </div>

      <div className="btn-cntnr" data-aos="zoom-in" data-dos-delay='10'>

        <Link to='/about'>

        <button type="button" class="btn btn-secondary btn-lg btn-block">  Know More </button>
      
        </Link>
      </div >
    </div>

  );
};

export default HomePage;
