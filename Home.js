import React from 'react';
import styles from './Home.module.css'; // Assuming you have styling in Home.module.css

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Login Button */}
      

      <h1 className={styles.title}>Welcome to SkillTrack</h1>
      <p className={styles.description}>
        SkillTrack is a comprehensive platform to assess and enhance your technical skills. Choose your desired tech stack, take assessments, and receive personalized reports.
      </p>

      {/* Additional Content */}
      <div className={styles.featureSection}>
        <div className={styles.feature}>
          <h2>Customizable Assessments</h2>
          <p>Select from various tech stacks and levels to match your goals.</p>
        </div>
        <div className={styles.feature}>
          <h2>Real-Time Feedback</h2>
          <p>Get immediate feedback to learn and improve continuously.</p>
        </div>
        <div className={styles.feature}>
          <h2>Comprehensive Reports</h2>
          <p>View detailed performance analytics and personalized recommendations.</p>
        </div>
      </div>

      <button className={styles.ctaButton} onClick={() => window.location.href = '/assessments'}>
        Start an Assessment
      </button>
    </div>
  );
};

export default Home;
