import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettlementState {
  amount: number;
  status: "submitted" | "agreed" | "disputed" | null;
  partyBResponse: "agreed" | "disputed" | null;
}

const initialState: SettlementState = {
  amount: 0,
  status: null,
  partyBResponse: null,
};

const settlementSlice = createSlice({
  name: "settlement",
  initialState,
  reducers: {
    submitSettlement: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
      state.status = "submitted";
      state.partyBResponse = null;
      sessionStorage.setItem("settlement", JSON.stringify(state));
    },
    respondSettlement: (
      state,
      action: PayloadAction<"agreed" | "disputed">
    ) => {
      state.status = action.payload;
      state.partyBResponse = action.payload;
      sessionStorage.setItem("settlement", JSON.stringify(state));
    },
    loadSettlement: (state) => {
      const storedSettlement = sessionStorage.getItem("settlement");
      if (storedSettlement) {
        return JSON.parse(storedSettlement);
      }
      return state;
    },
  },
});

export const { submitSettlement, respondSettlement, loadSettlement } =
  settlementSlice.actions;
export default settlementSlice.reducer;
