import React from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/Chart.css';
import dropdown from '../assets/dropdown.png';
import respiratory from '../assets/respiratory.png';
import heart from '../assets/heart.png';
import temperature from '../assets/temperature.png';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { getBloodPressureData } from '../services/api';
import { getLatestVitals } from '../services/api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = ({ patient }) => {
  const bloodPressureData = getBloodPressureData(patient?.diagnosis_history);
  const latestVitals = getLatestVitals(patient?.diagnosis_history);
  
  const data = {
    labels: bloodPressureData.labels,
    datasets: [
      {
        label: 'Systolic',
        data: bloodPressureData.systolic,
        border: '1px solid #E66FD2',
        backgroundColor: '#E66FD2',
        tension: 0.4
      },
      {
        label: 'Diastolic',
        data: bloodPressureData.diastolic,
        backgroundColor: '#8C6FE6',
        border: '1px solid #8C6FE6',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          // text: 'Blood Pressure (mmHg)'
        }
      },
      x: {
        title: {
          display: true,
          // text: 'Time Period'
        }
      }
    }
  };

  return (
    <div className="chart-card">
      <div className="card-header">
        <h4>Diagnosis History</h4>
      </div>
      <div className='chart-hist'>
      <div className="chart-body">
        <div className='chart-head'>
          <h4>Blood Pressure</h4>
          <div className='chart-dropdown'>
            <p>Last 6 months</p>
            <img src={dropdown}/>
          </div>
        </div>
        <Line data={data} options={options} />
      </div>

      <div className='chart-body'>
        <div className='chart-vitals'>
        <p>Systolic</p>
        <h4>{patient?.diagnosis_history[0]?.blood_pressure?.systolic.value}</h4>
        <p>{patient?.diagnosis_history[0]?.blood_pressure?.systolic.levels}</p>
        </div>
        <div className='chart-vitals'>
        <p>Diastolic</p>
        <h4>{patient?.diagnosis_history[0]?.blood_pressure?.diastolic.value}</h4>
        <p>{patient?.diagnosis_history[0]?.blood_pressure?.diastolic.levels}</p>
        </div>
      </div>
</div>

      <div className="chart-history">
        <div className="history-item">
          <img src={respiratory} alt='respiratory rate'/>
          <p>Respiratory Rate</p>
          <h4>{`${latestVitals?.respiratoryRate.value} bpm`}</h4>
          <p>{latestVitals?.respiratoryRate.level}</p>
        </div>

        <div className="history-item">
          <img src={temperature} alt='temperature'/>
          <p>Temperature</p>
          <h4>{`${latestVitals?.temperature.value} °F`}</h4>
          <p>{latestVitals?.temperature.level}</p>
        </div>

        <div className="history-item">
          <img src={heart} alt='heartbeat'/>
          <p>Heart Rate</p>
          <h4>{`${latestVitals?.heartRate.value} bpm`}</h4>
          <p>{latestVitals?.heartRate.level}</p>
        </div>
    </div>
    </div>
  );
};

export default BloodPressureChart;