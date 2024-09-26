// src/pages/Assessments.js
import React, { useState } from 'react';
import styles from './Assessments.module.css';

const Assessments = () => {
  const [techStack, setTechStack] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleStartAssessment = () => {
    if (techStack && difficulty) {
      alert(`Starting ${difficulty} assessment for ${techStack} stack.`);
      // Redirect to the assessment page or handle the start logic here
    } else {
      alert('Please select a tech stack and difficulty level.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Assessments</h1>
      <p className={styles.description}>
        Choose your tech stack and difficulty level to begin an assessment.
      </p>

      {/* Dropdowns for Tech Stack and Difficulty Level */}
      <div className={styles.dropdownContainer}>
        <select
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          className={styles.dropdown}
        >
          <option value="">Select Tech Stack</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="AWS">AWS</option>
          <option value="JavaScript">JavaScript</option>
        </select>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className={styles.dropdown}
        >
          <option value="">Select Difficulty</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* Start Button */}
      <button className={styles.startButton} onClick={handleStartAssessment}>
        Start Assessment
      </button>
    </div>
  );
};

export default Assessments;
