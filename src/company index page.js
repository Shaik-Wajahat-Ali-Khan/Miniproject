import React from 'react';
import './company index page.css';

const CompanyIndexPage = () => {
  return (
    <div>
      <h1>Company Index</h1>
      <div className="category-container">
        <div className="category">
          <h2>Introduction to Salesforce</h2>
          <p>Delve into the platform's capabilities by exploring key features, modules & the benefits of Salesforce for businesses.</p>
          <div className="learn-more-container">
            <span>Last Date: 2023-08-31</span>
            </div>
            <div className='learn-more-container'>
            <a href="#" className="learn-more">Learn More</a>
            <button className="apply-btn">Apply</button>
          </div>
          </div>
        <div className="category">
          <h2>Build Critical Skills for Job-readiness & Employability</h2>
          <p>Understand the growing demand for Data skills, the essential skills needed, and how to develop proficiency through targeted educational resources & certification programs.</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>
        <div className="category">
          <h2>Woke master cleanse drinking vinegar salvia</h2>
          <p>Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default CompanyIndexPage;