// src/pages/Leaderboards.js
import React from 'react';
import styles from './Leaderboards.module.css';

const Leaderboards = () => {
  const topPerformers = [
    { name: 'Grace Johnston', score: 105, techStack: 'JavaScript' },
    { name: 'Albert Maldonado', score: 74, techStack: 'Python' },
    { name: 'Sallie Hunter', score: 50, techStack: 'Java' },
    { name: 'Dustin Terry', score: 32, techStack: 'React' },
    { name: 'Julia Mendoza', score: 28, techStack: 'Node.js' }
  ];

  const maxScore = Math.max(...topPerformers.map(p => p.score)); // Finding max score for scaling

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sales Leaderboard</h1>
      <p className={styles.description}>
        Use a leaderboard to track and compare individual or team performance.
      </p>

      <div className={styles.leaderboardGraph}>
        {topPerformers.map((performer, index) => (
          <div key={index} className={styles.rankContainer}>
            <span className={styles.rank}>{performer.name}</span>

            <div className={styles.bar}>
              <div
                className={styles.barFill}
                style={{
                  width: `${(performer.score / maxScore) * 100}%`
                }}
              />
            </div>

            <span className={styles.score}>{performer.score}k</span>
            <span className={styles.techStack}>{performer.techStack}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboards;
