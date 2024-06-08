// features/settlement/settlementSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Form {
  id: string;
  title: string;
  amount: number;
  comment: string;
  status: 'pending' | 'complete' | 'updated';
}

interface SettlementState {
  forms: Form[];
}

const initialState: SettlementState = {
  forms: [],
};

const settlementSlice = createSlice({
  name: 'settlement',
  initialState,
  reducers: {
    submitForm: (state, action: PayloadAction<Form>) => {
      state.forms.push(action.payload);
      sessionStorage.setItem('forms', JSON.stringify(state.forms));
    },
    updateForm: (state, action: PayloadAction<{ id: string; status: Form['status']; amount?: number; comment?: string }>) => {
      const form = state.forms.find((form) => form.id === action.payload.id);
      if (form) {
        form.status = action.payload.status;
        if (action.payload.amount !== undefined) {
          form.amount = action.payload.amount;
        }
        if (action.payload.comment) {
          form.comment = action.payload.comment;
        }
      }
      sessionStorage.setItem('forms', JSON.stringify(state.forms));
    },
    loadForms: (state) => {
      const storedForms = sessionStorage.getItem('forms');
      if (storedForms) {
        state.forms = JSON.parse(storedForms);
      }
    },
  },
});

export const { submitForm, updateForm, loadForms } = settlementSlice.actions;
export default settlementSlice.reducer;
