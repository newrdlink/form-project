import React from 'react';
import './App.css';
import Applicant from '../Applicant/Applicant'
import applicantInputs from '../utils/ApplicantData/inputs'

function App() {


  return (
    <div className="App">
      <h1>Hello</h1>
      <Applicant inputs={applicantInputs} onSubmitHandler={(formData) => { console.log('from app ', formData) }} />
    </div>
  );
}

export default App;
