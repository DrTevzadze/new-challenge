// components/FormSection.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { submitForm, Form } from '../slices/settlementSlice';
import { RootState } from '../store';

interface FormSectionProps {
  isPartyA: boolean;
}

const FormSection: React.FC<FormSectionProps> = ({ isPartyA }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [comment, setComment] = useState('');
  const forms = useSelector((state: RootState) => state.settlement.forms);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newForm: Form = {
      id: uuidv4(),
      title,
      amount,
      comment,
      status: 'pending',
    };
    dispatch(submitForm(newForm));
    // Trigger the storage event by using localStorage
    localStorage.setItem('trigger', new Date().toISOString());
  };

  return (
    <div className="p-4">
      {isPartyA && (
        <div className="mb-4">
          <h2>Create a New Settlement Form</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="number"
            placeholder="Settlement Amount"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="border p-2 mb-2 w-full"
          />
          <textarea
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <button onClick={handleSubmit} className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </div>
      )}
      <div>
        <h2>Submitted Forms</h2>
        {forms.map((form) => (
          <div key={form.id} className="border p-2 mb-2">
            <h3>Form: {form.title}</h3>
            <p>Status: {form.status}</p>
            <p>Settlement Amount: {form.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormSection;
