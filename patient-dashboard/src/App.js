import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PatientInfo from './components/PatientInfo';
import BloodPressureChart from './components/BloodPressureChart';
import DiagnosisHistory from './components/DiagnosisHistory';
import PatientInformationCard from './components/PatientInformationCard';
import LabResults from './components/LabResults';
import { fetchPatientData } from './services/api';
import './styles/App.css';

function App() {
  const [patientData, setPatientData] = useState(null);
  const [patientsList, setPatientsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // Fetch all patient data
        const allPatients = await fetchPatientData();
        
        // CRITICAL: Filter to find and display only Jessica Taylor
        const jessicaTaylor = allPatients.find(patient => 
          patient.name.toLowerCase() === 'jessica taylor'
        );
        
        if (!jessicaTaylor) {
          throw new Error('Jessica Taylor not found in API data');
        }
        
        setPatientData(jessicaTaylor);
        setPatientsList(allPatients);
        setError(null);
      } catch (err) {
        console.error('Error loading patient data:', err);
        setError(`Failed to load patient data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="loading-screen">Loading patient data...</div>;
  }

  if (error) {
    return <div className="error-screen">{error}</div>;
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Sidebar patients={patientsList} />
        <div className="dashboard-content">
          <div className='center-column'>
            <BloodPressureChart patient={patientData} />
            <DiagnosisHistory patient={patientData} />
          </div>
          <div className="right-column">
            <PatientInfo patient={patientData} />
            {/* <PatientInformationCard patient={patientData} /> */}
            <LabResults patient={patientData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;