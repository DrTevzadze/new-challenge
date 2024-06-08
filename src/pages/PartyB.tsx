// components/PartyB.tsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadForms } from "../slices/settlementSlice";
import FormSection from "../components/FormSection";

const PartyB: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadForms());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 to-orange-400 flex flex-col items-center justify-center">
      <header className="text-center bg-white shadow-md p-4 rounded-md mb-4">
        <h1 className="text-3xl font-bold text-blue-500 xl:text-6xl sm:text-4xl cursor-pointer">
          Party B
        </h1>
      </header>
      <FormSection isPartyA={false} />
    </div>
  );
};

export default PartyB;
