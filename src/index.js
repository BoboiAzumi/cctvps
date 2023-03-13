import React from 'react';
import './index.css'
import UIControll from './UI/UIControl'
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<UIControll />}/>
        <Route path="/img" element={(
          <>
            <img src="/img/cctv.jpg" className="w-full"/>
          </>
        )} />
        <Route path="*"/>
      </Routes>
    </Router>
  </React.StrictMode>
);