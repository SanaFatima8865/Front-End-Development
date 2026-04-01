import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';
import rightLogo from '../assets/right-logo.png';
import settings from '../assets/settings.png';
import more from '../assets/more.png';
import home from '../assets/home.png';
import patients from '../assets/patients.png';
import message from '../assets/message.png';
import schedule from '../assets/schedule.png';
import transactions from '../assets/transactions.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Patient Dashboard Logo" className="header-logo" />
      </div>

      <div className='header-center'>
        <div className='overview'>
            <img src={home} alt="Home" />
            <p>Overview</p>
        </div>
         <div className='overview green-button'>
            <img src={patients} alt="Patients" />
            <p>Patients</p>
        </div>
         <div className='overview'>
            <img src={schedule} alt="schedule" />
            <p>Schedule</p>
        </div>
         <div className='overview'>
            <img src={message} alt="Messages" />
            <p>Message</p>
        </div>
         <div className='overview'>
            <img src={transactions} alt="Transactions" />
            <p>Transactions</p>
        </div>
      </div>
      
      <div className="header-right">
        <img src={rightLogo} alt='Doctor'/>
        <div>
            <p className='name'> Dr. Jose Simmons</p>
            <p>General Practitioner</p>
        </div>
        <div className="header-icons">
          <img className='settings' src={settings} alt='settings'/>
          <img className='more' src={more} alt='more'/>
        </div>
      </div>
    </header>
  );
};

export default Header;