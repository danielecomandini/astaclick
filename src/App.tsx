import { useState } from 'react';
import ACInput from './UI/forms/ACInput';
import { validateFormData } from './utils/FormValidator';
import type { ACInputField } from './UI/forms/ACInputField';

const App = () => {
  const checkName = (name: string) => {
    return name === 'Daniele';
  };

  const [formData, setFormData] = useState<Record<string, ACInputField>>({
    firstName: {
      value: 'Test',
      valid: true,
      required: true,
      validation: {
        method: checkName,
        errMsg: 'Nome non valido. Immettere valore Daniele.',
      },
    },
    lastName: {
      value: '',
      valid: true,
      required: true,
    },
  });

  const onClickHandler = () => {
    console.clear();
    console.log('onClickHandler...');
    const result = validateFormData(formData);
    setFormData({ ...result.updatedFormData });
  };

  return (
    <div>
      <ACInput
        id="firstName"
        label="Nome"
        value={formData}
        setValue={setFormData}
        color="#00AA00"
      />
      <ACInput id="lastName" label="Cognome" value={formData} setValue={setFormData} />
      <button onClick={onClickHandler}>CLICK ME!</button>
    </div>
  );
};

export default App;
