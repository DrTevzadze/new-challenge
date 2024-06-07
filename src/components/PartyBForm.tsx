import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { updateSettlement } from "../slices/settlementSlice";

interface PartyBFormProps {
  formData: {
    id: number;
    title: string;
    amount: number;
    comment: string;
    response?: "pending" | "approved" | "rejected" | "updated";
    updateAmount?: number;
  };
}

const PartyBForm: React.FC<PartyBFormProps> = ({ formData }) => {
  const dispatch = useDispatch();
  const [action, setAction] = useState<'Update' | 'Approve' | 'Reject'>('Approve');
  const [updateAmount, setUpdateAmount] = useState<number | undefined>(undefined);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (action && comment && (action !== 'Update' || (action === 'Update' && updateAmount))) {
      const updateData = {
        response: action.toLowerCase() as 'approved' | 'rejected' | 'updated',
        comment,
        ...(action === 'Update' && { updateAmount }),
      };

      dispatch(updateSettlement({ id: formData.id, update: updateData }));
      setComment('');
      setUpdateAmount(undefined);
    } else {
      alert('All fields are required');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-4">
      <div>
        <h3 className="text-lg font-medium">Form Information</h3>
        <p>Title: {formData.title}</p>
        <p>Settlement Amount: {formData.amount}</p>
        <p>Comment: {formData.comment}</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Action</label>
        <select
          value={action}
          onChange={(e) => setAction(e.target.value as 'Update' | 'Approve' | 'Reject')}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        >
          <option value="Approve">Approve</option>
          <option value="Reject">Reject</option>
          <option value="Update">Update</option>
        </select>
      </div>
      {action === 'Update' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Update Settlement Amount</label>
          <input
            type="number"
            value={updateAmount}
            onChange={(e) => setUpdateAmount(Number(e.target.value))}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-700">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        ></textarea>
      </div>
      <Button type="submit" onClick={(e) => handleSubmit(e)} name={action} />
    </form>
  );
};

export default PartyBForm;
