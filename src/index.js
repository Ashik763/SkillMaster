import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './Components/Contexts/AuthProvider';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Mood from './Components/Contexts/Mood';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <Mood> 
    <AuthProvider> 
        <ProSidebarProvider>
            <App />
        </ProSidebarProvider>

    </AuthProvider>

    </Mood>
 
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//console.log();))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
