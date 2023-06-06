import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { MaterialButton } from './TopBar';

const organizationSizes = [
    'Just Me :)',
    '1-10',
    '10-50',
    '50-150',
    '150-500',
    '500+',
];

const models = [
    'BLOOM',
    'GPT-2',
    'GPT-J',
    'GPT-NeoX',
    'LLaMA',
    'MPT',
    'Custom/Private models',
];

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
`;

const FormLabel = styled.label`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  text-align: left;

`;

const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  &:focus {
    outline: none;
    border-bottom: 2px solid #3f51b5;
  }
  margin-bottom: 10px
`;

const FormSelect = styled.select`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  &:focus {
    outline: none;
    border-bottom: 2px solid #3f51b5;
  }
  width: 100%;
  padding: 1em;
  margin-bottom: 10px
   
`;

const FormTextArea = styled.textarea`
    margin-top: 1px;
    margin-bottom: 10px;
    padding: 16.5px 14px;
`;

const CheckboxLabel = styled.label`
  font-size: 0.8em;
  color: #333;
  padding-bottom: 5px;
  margin-left: 30px;
  text-align: left;
`;

interface IFormState {
    name: string;
    email: string;
    organizationSize: string;
    modelsInterested: string[];
    otherModels: string;
    description: string;
  }

export const WaitlistForm = () => {
  const [form, setForm] = useState<IFormState>({
    name: '',
    email: '',
    organizationSize: '',
    modelsInterested: [],
    otherModels: '',
    description: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value)
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(form.modelsInterested.filter(model => model !== e.target.value));
    if(e.target.checked) {
      setForm({ ...form, modelsInterested: [...form.modelsInterested, e.target.value] });
    } else {
      setForm({ ...form, modelsInterested: form.modelsInterested.filter(model => model !== e.target.value) });
    }
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormLabel>Email</FormLabel>
      <FormInput
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <FormLabel>Organisation Size</FormLabel>
      <FormSelect name="organizationSize" value={form.organizationSize} onChange={handleChange}>
        <option value="">Select...</option>
        {organizationSizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </FormSelect>
      
      <FormLabel>What models are you interested in?</FormLabel>
        {models.map((model, index) => (
        <CheckboxLabel key={index}>
            <input
                type="checkbox"
                name="modelsInterested"
                value={model}
                checked={form.modelsInterested.includes(model)}
                onChange={handleCheckboxChange}
            />
            {model}
        </CheckboxLabel>
      ))}

      <FormLabel>Are there other models you want?</FormLabel>
      <FormTextArea
        name="otherModels"
        value={form.otherModels}
        onChange={handleChange}
        placeholder="Model X, ..."
      />

      <FormLabel>Tell us a bit more about what you're/wanting to build?</FormLabel>
      <FormTextArea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder=""
      />

      <MaterialButton type="submit" >Submit</MaterialButton>
    </StyledForm>
  );
};
