// API Service for fetching patient data with Basic Authentication
const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';

const username = process.env.REACT_APP_API_USERNAME;
const password = process.env.REACT_APP_API_PASSWORD;

// Encode credentials for Basic Auth (DO NOT hardcode the encoded string)
const getAuthHeader = () => {
  const credentials = `${username}:${password}`;
  const encodedCredentials = btoa(credentials); // Proper encoding
  return {
    'Authorization': `Basic ${encodedCredentials}`,
    'Content-Type': 'application/json'
  };
};

export const fetchPatientData = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: getAuthHeader(),
      redirect: 'follow'
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // API returns an array of patients
    if (!Array.isArray(data)) {
      throw new Error('Invalid API response format');
    }
    
    return data;
  } catch (error) {
    console.error('API Service Error:', error);
    throw error;
  }
};

// Helper function to extract latest vital signs
export const getLatestVitals = (diagnosisHistory = []) => {
  if (!diagnosisHistory.length) return null;

  const latest = diagnosisHistory[0];

  return {
    heartRate: {
      value: latest.heart_rate.value,
      level: latest.heart_rate.levels
    },
    respiratoryRate: {
      value: latest.respiratory_rate.value,
      level: latest.respiratory_rate.levels
    },
    temperature: {
      value: latest.temperature.value,
      level: latest.temperature.levels
    }
  };
};

// Helper function to extract blood pressure data for the chart
export const getBloodPressureData = (diagnosisHistory) => {
  if (!diagnosisHistory || !Array.isArray(diagnosisHistory) || diagnosisHistory.length === 0) {
    // Fallback data if no diagnosis history
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      systolic: [120, 122, 118, 125, 121, 119],
      diastolic: [80, 82, 78, 85, 81, 79]
    };
  }
  
  // Take up to 6 most recent entries for the chart
  const recentHistory = diagnosisHistory.slice(0, 6);
  
  const labels = recentHistory.map(item => {
    // Format month-year display
    const month = item.month ? item.month.substring(0, 3) : '';
    const year = item.year ? item.year.toString() : '';
    return month && year ? `${month} ${year}` : 'N/A';
  });
  
  const systolic = recentHistory.map(item => 
    item.blood_pressure?.systolic?.value || 0
  );
  
  const diastolic = recentHistory.map(item => 
    item.blood_pressure?.diastolic?.value || 0
  );
  
  return { labels, systolic, diastolic };
};