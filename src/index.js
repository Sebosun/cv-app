import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Think about how to structure your application into components. Your application should include:
// A section to add general information like name, email, phone number.
// A section to add your educational experience 
// (school name, title of study, date of study)
// A section to add practical experience 
// (company name, position title, main tasks of your jobs,
// date from and until when you worked for that company)