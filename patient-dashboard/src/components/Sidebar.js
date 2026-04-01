import React from 'react';
import '../styles/Sidebar.css';
import search from '../assets/search.png';
import more from '../assets/more-1.png';

const Sidebar = ({ patients }) => {
  return (
    <nav className="sidebar">
      <div className="logo">
        <h1>Patients</h1>
        <img src={search} alt="search" />
      </div>

      {patients.map(patient => (
        <div className="user-profile">
          <div className='avatar-info'>
            <div className="user-avatar">
              <img src={patient.profile_picture || 'https://i.pravatar.cc/150?img=68'} alt="User" />
            </div>
            <div className="user-info">
              <h4>{patient.name}</h4>
              <p>{patient.gender}, {patient.age}</p>
            </div>
          </div>
          <div className="icons">
            <img className='more' src={more} alt='more'/>
          </div>
        </div>
      ))}

      {/* <div className="user-profile">
        <div className='avatar-info'>
        <div className="user-avatar">
          <img src="https://i.pravatar.cc/150?img=32" alt="User" />
        </div>
        <div className="user-info">
          <h4>Emily Williams</h4>
          <p>Female, 18</p>
        </div>
        </div>
        <div className="icons">
          <img className='more' src={more} alt='more'/>
        </div>
      </div>

      <div className="user-profile">
        <div className='avatar-info'>
        <div className="user-avatar">
          <img src="https://i.pravatar.cc/150?img=32" alt="User" />
        </div>
        <div className="user-info">
          <h4>Ryan Johnson</h4>
          <p>Male, 45</p>
        </div>
        </div>
        <div className="icons">
          <img className='more' src={more} alt='more'/>
        </div>
      </div>

      <div className="user-profile">
        <div className='avatar-info'>
        <div className="user-avatar">
          <img src="https://i.pravatar.cc/150?img=32" alt="User" />
        </div>
        <div className="user-info">
          <h4>Brandon Mitchell</h4>
          <p>Male, 36</p>
        </div>
        </div>
        <div className="icons">
          <img className='more' src={more} alt='more'/>
        </div>
      </div>

      <div className="user-profile active">
        <div className='avatar-info'>
        <div className="user-avatar">
          <img src={patient.profile_picture || 'https://i.pravatar.cc/150?img=68'} alt="User" />
        </div>
        <div className="user-info">
          <h4>Jessica Taylor</h4>
          <p>Female, 28</p>
        </div>
        </div>
        <div className="icons">
          <img className='more' src={more} alt='more'/>
        </div>
      </div>

      <div className="user-profile">
        <div className='avatar-info'>
        <div className="user-avatar">
          <img src="https://i.pravatar.cc/150?img=32" alt="User" />
        </div>
        <div className="user-info">
          <h4>Samantha Johnson</h4>
          <p>Female, 56</p>
        </div>
        </div>
        <div className="icons">
          <img className='more' src={more} alt='more'/>
        </div>
      </div>

      <div className="user-profile">
        <div className='avatar-info'>
        <div className="user-avatar">
          <img src="https://i.pravatar.cc/150?img=32" alt="User" />
        </div>
        <div className="user-info">
          <h4>Ashley Martinez</h4>
          <p>Female, 54</p>
        </div>
        </div>
        <div className="icons">
          <img className='more' src={more} alt='more'/>
        </div>
      </div>

      <div className="user-profile">
        <div className='avatar-info'>
        <div className="user-avatar">
          <img src="https://i.pravatar.cc/150?img=32" alt="User" />
        </div>
        <div className="user-info">
          <h4>Olivia Brown</h4>
          <p>Female, 32</p>
        </div>
        </div>
        <div className="icons">
          <img className='more' src={more} alt='more'/>
        </div>
      </div>

      <div className="user-profile">
        <div className='avatar-info'>
        <div className="user-avatar">
          <img src="https://i.pravatar.cc/150?img=32" alt="User" />
        </div>
        <div className="user-info">
          <h4>Tyler Davis</h4>
          <p>Male, 19</p>
        </div>
        </div>
        <div className="icons">
          <img className='more' src={more} alt='more'/>
        </div>
      </div> */}
    </nav>
  );
};

export default Sidebar;