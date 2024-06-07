import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { updateSettlement } from "../slices/settlementSlice";

interface PartyAFormProps {
  settlementId: number;
}

const PartyAForm: React.FC<PartyAFormProps> = ({ settlementId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && amount && comment) {
      dispatch(updateSettlement({
        id: settlementId,
        update: {
          title,
          amount,
          comment
        }
      }));
      setTitle('');
      setAmount(undefined);
      setComment('');
    } else {
      alert('All fields are required');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Settlement Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        ></textarea>
      </div>
      <Button type="submit" onClick={(e) => handleSubmit(e)} name="Submit" />
    </form>
  );
};

export default PartyAForm;
