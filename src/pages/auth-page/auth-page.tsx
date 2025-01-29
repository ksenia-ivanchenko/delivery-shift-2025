import { useState } from 'react';
import styles from './auth-page.module.scss'

import { AuthOtp, AuthPhone } from 'components';

export const AuthPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => setCurrentStep((prev) => prev + 1);
  const goToPrevStep = () => setCurrentStep((prev) => prev - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <AuthPhone goToNextStep={goToNextStep} />;
      case 2:
        return <AuthOtp goToPrevStep={goToPrevStep} />;
      default:
        return <AuthPhone goToNextStep={goToNextStep} />;
    }
  };

  return <main className={styles.main}>{renderStep()}</main>;
};
