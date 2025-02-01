import { useState } from 'react';

import styles from './progress-bar.module.scss';

type ProgressBarProps = {
  currentStep: number;
  steps: number;
};

export const ProgressBar = ({ currentStep, steps }: ProgressBarProps) => (
  <div className={styles.progressContainer}>
    <span className={styles.steps}>
      Шаг {currentStep} / {steps}
    </span>
    <div className={styles.progressBar}>
      <div className={styles.progressFill} style={{ width: `${(currentStep / steps) * 100}%` }} />
    </div>
  </div>
);
