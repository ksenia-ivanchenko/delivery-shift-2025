import { useState } from 'react';

export const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => setCurrentStep((prev) => prev + 1);
  const goToPreviousStep = () => setCurrentStep((prev) => prev - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <>1</>;
      case 2:
        return <>2</>;
      case 3:
        return <>3</>;
      case 4:
        return <>4</>;
      case 5:
        return <>5</>;
      case 6:
        return <>6</>;
      case 7:
        return <>7</>;
      default:
        return <>1</>;
    }
  };

  return (
    <div>
      {renderStep()}
      <button onClick={goToPreviousStep} disabled={currentStep === 1}>
        Назад
      </button>
      <button onClick={goToNextStep} disabled={currentStep === 7}>
        Далее
      </button>
    </div>
  );
};
