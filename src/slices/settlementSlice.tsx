import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Settlement {
  id: number;
  title: string;
  amount: number;
  comment: string;
  response?: "pending" | "approved" | "rejected" | "updated";
  updateAmount?: number;
}

interface SettlementState {
  settlements: Settlement[];
}

const initialState: SettlementState = {
  settlements: [],
};

const settlementSlice = createSlice({
  name: "settlement",
  initialState,
  reducers: {
    addSettlement: (state, action: PayloadAction<Settlement>) => {
      state.settlements.push(action.payload);
    },
    updateSettlement: (
      state,
      action: PayloadAction<{ id: number; update: Partial<Settlement> }>
    ) => {
      const index = state.settlements.findIndex(
        (s) => s.id === action.payload.id
      );
      if (index !== -1) {
        state.settlements[index] = {
          ...state.settlements[index],
          ...action.payload.update,
        };
      }
    },
  },
});

export const { addSettlement, updateSettlement } = settlementSlice.actions;
export default settlementSlice.reducer;
