import { ProgressBar, ProgressBarItem } from './styles'

import { useCustomize } from '../../../hooks/useCustomize';

export const ProgressBarHeader = () => { 
  const { steps, currentStep, goToStep } = useCustomize();

  return (
    <ProgressBar>
      {
        steps && steps.map((step, index) => {
          if (!step.visible) return;

          return (
            <ProgressBarItem
              key={index}
              onClick={() => goToStep(step)}
              active={currentStep.step === step.step}
              className={[currentStep.step === step.step ? '--isActive' : '' ]}
            >
              <strong>{step.step}</strong>
              <span>{step.name}</span>
            </ProgressBarItem>
          );  
        })
      }
    </ProgressBar>
  );
}

