// src/pages/Reports.js
import React from 'react';
import styles from './Reports.module.css';

const Reports = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Reports</h1>
      <p className={styles.description}>
        Your performance analytics are shown below. Review your strengths and weaknesses and get personalized learning recommendations.
      </p>

      {/* Sample Performance Data */}
      <div className={styles.performanceSection}>
        <h2>Performance Summary</h2>
        <p>Overall Score: 75%</p>
        <p>Strengths: JavaScript, Data Structures</p>
        <p>Weaknesses: Algorithms, System Design</p>
      </div>

      {/* Recommendations Section */}
      <div className={styles.recommendations}>
        <h2>Recommendations</h2>
        <ul>
          <li>Focus on improving your understanding of algorithms.</li>
          <li>Consider taking advanced courses on system design.</li>
        </ul>
      </div>
    </div>
  );
};

export default Reports;
