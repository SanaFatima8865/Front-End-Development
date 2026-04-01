import React from 'react';
import '../styles/DiagnosisHistory.css';

const DiagnosisHistory = ({ patient }) => {
  if (!patient || !patient.diagnostic_list) return null;
  
  // Format diagnosis history data for display
  const formatDiagnosisData = () => {
    return patient.diagnostic_list.map((item, index) => ({
      id: index,
      name: typeof item === 'object' ? item.name : item,
      description: typeof item === 'object' ? item.description : '',
      status: typeof item === 'object' ? item.status : ''
    }));
  };

  const diagnosisData = formatDiagnosisData();

  return (
    <div className="card">
      <div className="card-header">
        <h4>Diagnostic List</h4>
      </div>
        <div className="diagnosis-table">
          <div className='diagnosis-thead'>
              <h4>Diagnosis</h4>
              <h4>Description</h4>
              <h4>Status</h4>
          </div>
          <div className='diagnosis-tbody'>
            {diagnosisData.map((item) => (
              <div className='diagnosis-row' key={item.id}>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.status}</p>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;