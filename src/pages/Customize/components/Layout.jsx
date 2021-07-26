import React from 'react';

import { NewHeader } from '../../../components/NewHeader';
import { CasePreview } from './CasePreview';

import {
  Content,
  Container,
  ContainerContent,
  ButtonAction,
  ButtonActions,
  StepContent,
} from './styles'

import { ProgressBarHeader } from './ProgressBar';

import { useCustomize } from '../../../hooks/useCustomize';

export const CustomizeLayout = ({ children, nextStepContent = 'Seguinte', prevStepContent = 'Anterior' }) => {
  const { currentStep, stepNavigate, firstStep, lastStep } = useCustomize();

  const isFirstOrLastStep = () => [firstStep.step, lastStep.step].includes(currentStep.step);

  return (
    <Container>
      <ContainerContent>
        <NewHeader title="Personalize Rápido" border={true}/>

        { ![firstStep.step, lastStep.step].includes(currentStep.step) ? (
            <ProgressBarHeader/>
          ) : '' 
        }

        <Content className={[
          isFirstOrLastStep() ? 'preview-centered' : '',
          lastStep.step === currentStep.step ? 'last-step' : ''
        ]}> 
          <CasePreview className="preview"/>

          <StepContent>
            {children}

            <ButtonActions>
              { currentStep.step ? (
                  <ButtonAction onClick={() => stepNavigate('prev')}>
                    { currentStep.prevStepText ? currentStep.prevStepText : prevStepContent}
                  </ButtonAction>
                ) : (<div></div>)
              }
              <ButtonAction onClick={() => stepNavigate('next')}>
                { currentStep.nextStepText ? currentStep.nextStepText : nextStepContent}
              </ButtonAction>
            </ButtonActions>        
          </StepContent>      
        </Content>
      </ContainerContent>
    </Container>
  );
}

