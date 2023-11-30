import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';


//Добавляем функцию для добавления файла с объектами
function appendScript(scriptToAppend) {
  const script = document.createElement("script");
  script.src = "/component/Object.js";
  script.async = true;
  document.body.appendChild(script);
};
appendScript(); // Добавляем js файл с объектами



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





