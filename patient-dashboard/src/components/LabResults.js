import React from 'react';
import '../styles/LabResults.css';
import download from '../assets/download.png';

const LabResults = ({ patient }) => {
  if (!patient || !patient.lab_results) return null;
  
  return (
    <div className="card">
      <div className="card-header">
        <h4>Lab Results</h4>
      </div>
      <div className="card-body">
        <div className="lab-results">
          {patient.lab_results.map((item, index) => {
            // Handle both string and object formats from API
            const testName = typeof item === 'object' ? item.test || item.name : item;
            const testStatus = typeof item === 'object' ? item.status || item.levels : '';
            
            return (
              <div key={index} className="lab-result-item">
                <div className="lab-result-info">
                  <div className="lab-result-name">{testName}</div>
                  <div className="lab-result-value">
                    <img className="lab-result-value" src={download} alt='download'/>
                  </div>
                  
                </div>
                {testStatus && (
                  <span className={`lab-result-status status-${testStatus.toLowerCase().replace(/\s+/g, '-')}`}>
                    {testStatus}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LabResults;