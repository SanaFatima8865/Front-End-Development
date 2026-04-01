import React from 'react';

const PatientInformationCard = ({ patient }) => {
  const patientInfo = patient?.patient_info || {
    date_of_birth: '1985-06-15',
    phone: '(555) 123-4567',
    email: 'jessica.taylor@email.com',
    address: '123 Medical St, Health City',
    emergency_contact: 'John Taylor (555) 987-6543',
    insurance: 'HealthCare Plus - PPO',
    primary_physician: 'Dr. Alex Morgan'
  };

  const infoItems = [
    { label: 'Date of Birth', value: patientInfo.date_of_birth },
    { label: 'Phone Number', value: patientInfo.phone },
    { label: 'Email Address', value: patientInfo.email },
    { label: 'Address', value: patientInfo.address },
    { label: 'Emergency Contact', value: patientInfo.emergency_contact },
    { label: 'Insurance Provider', value: patientInfo.insurance },
    { label: 'Primary Physician', value: patientInfo.primary_physician },
    { label: 'Last Visit', value: '2024-01-15' }
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h4>Patient Information</h4>
        <i className="fas fa-edit"></i>
      </div>
      <div className="card-body">
        <div className="info-grid">
          {infoItems.map((item, index) => (
            <div className="info-item" key={index}>
              <span className="info-label">{item.label}</span>
              <span className="info-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientInformationCard;