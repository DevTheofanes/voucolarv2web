import { useEffect } from 'react';

import { ChoiceYourPhone, Box } from './styles';

import { useUser } from '../../hooks/useUser';
import { useCustomize } from '../../hooks/useCustomize';

export const Customize = () => {
  const { 
    setBrand,
    model, setModel,
    availableModels, loadMarksAndModels,
  } = useCustomize();

  const { token } = useUser();

  useEffect(() => {
    loadMarksAndModels();
  }, [token]);

  const handleSelected = (brandId, phoneId) => {
    if (!brandId) {
      return setBrand(null);
    }
  
    if (!phoneId) {
      return setModel(null);
    }

    setModel(Number(phoneId));
    setBrand(Number(brandId));
  }

  return (
    <Box>
      <ChoiceYourPhone>
        <h1>ESCOLHA O SEU CELULAR: </h1>
        <div>
          {
            availableModels.map(availableModel => (
              <select key={availableModel.id} value={model && model} onChange={e => handleSelected(availableModel.id, e.target.value)}>
                <option value="0">{availableModel.name}</option>
                {
                  availableModel.models.map(phone => (
                    <option key={phone.id} value={phone.id}>{phone.name}</option>
                  ))
                }
              </select>
            ))
          }
        </div>
      </ChoiceYourPhone>
    </Box>
  );
}

