import { useState } from 'react';
import ACInput, { type ACInputField } from './UI/forms/ACInput';

function App() {
  const [formData, setFormData] = useState<Record<string, ACInputField>>({
    firstName: { value: '', valid: true },
    lastName: { value: '', valid: true },
    email: { value: '', valid: true },
  });

  const checkName = (name: any) => {
    return name === 'Daniele';
  };

  return (
    <div>
      <ACInput
        id="firstName"
        type="date"
        label="Nome"
        required
        value={formData}
        setValue={setFormData}
        additionalValidation={{
          method: checkName,
          errorMsg: 'Il nome deve essere Daniele',
        }}
        color="orange"
      />
      <button onClick={() => console.log(formData)}>CLICK ME!</button>
    </div>
  );
}

export default App;
