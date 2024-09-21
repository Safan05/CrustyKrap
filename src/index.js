import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../node_modules/bootstrap/js/src/collapse";
import "../node_modules/bootstrap/js/src/dropdown";
import "../node_modules/bootstrap/dist/js/bootstrap";
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import "../node_modules/react-toastify/dist/ReactToastify.css";
const root = createRoot(document.getElementById('root'));
root.render(<App/>);