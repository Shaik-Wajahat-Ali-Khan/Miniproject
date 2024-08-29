import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './project.js';
import UserRegistration from './userRegistration.js';
import Forgotpwd from'./forgotpwd.js';
import EmailVerification from './emailverification.js';
import ResetPassword from './resetpwd.js';
import CompanyIndexPage from './company index page.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/userRegistration" element={<UserRegistration />} />
        <Route path="/forgotpwd" element={<Forgotpwd/>} />
        <Route path="/project" element={<Project />} />
        <Route path="/emailverification" element={<EmailVerification />} />
        <Route path="/resetpwd" element={<ResetPassword/>} /> 
        <Route path="/company-index-page" element={<CompanyIndexPage/>} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

