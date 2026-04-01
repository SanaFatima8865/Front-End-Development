import React from 'react';
import '../styles/PatientInfo.css';
import schedule from '../assets/schedule.png';
import gender from '../assets/gender.png';
import insurance from '../assets/insurance.png';
import phone from '../assets/phone.png';

const PatientInfo = ({ patient }) => {
  if (!patient) return null;
  
  return (
    <section className="patient-info">
      <div className="patient-header">
        <div className="patient-avatar">
          <img 
            src={patient.profile_picture || 'https://i.pravatar.cc/150?img=68'} 
            alt={patient.name} 
          />
        </div>
        <div className="patient-details">
          <h3>{patient.name}</h3>
          <div className="patient-stats">
            <div className="stat">
              <div className="stat-avatar">
                <img src={schedule} className='stat-avatar stat-avatar-1' alt='schedule'/>
              </div>
              <div className="stat-text">
                <span className="stat-label">Date Of Birth</span>
                <span className="stat-value">{patient.date_of_birth}</span>
              </div>   
            </div>
            <div className="stat">
              <div className="stat-avatar">
                <img src={gender} className='stat-avatar' alt='gender'/>
              </div>
                <div className="stat-text">
                <span className="stat-label">Gender</span>
                <span className="stat-value">{patient.gender}</span>
              </div>
            </div>
            <div className="stat">
              <div className="stat-avatar">
                <img src={phone} className='stat-avatar' alt='phone'/>
              </div>
              <div className="stat-text">
              <span className="stat-label">Contact info.</span>
              <span className="stat-value">{patient.phone_number}</span>
              </div>
            </div>
            <div className="stat">
              <div className="stat-avatar">
                <img src={phone} className='stat-avatar' alt='phone'/>
              </div>
              <div className="stat-text">
              <span className="stat-label">Emergency Contacts</span>
              <span className="stat-value">{patient.emergency_contact}</span>
            </div>
            </div>
            <div className="stat">
              <div className="stat-avatar">
                <img src={insurance} className='stat-avatar' alt='insurance'/>
              </div>
              <div className="stat-text">
              <span className="stat-label">Insurance Provider</span>
              <span className="stat-value">{patient.insurance_type}</span>
            </div>
            </div>
          </div>
        </div>
        <div className="patient-actions">
          <button className="green-button">
            Show All Information
          </button>
        </div>
      </div>
    </section>
  );
};

export default PatientInfo;