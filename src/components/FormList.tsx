import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import PartyAForm from "./PartyAForm";
import PartyBForm from "./PartyBForm";
import { RootState } from "../store";
import { addSettlement } from "../slices/settlementSlice";

function FormList() {
  const dispatch = useDispatch();
  const settlements = useSelector(
    (state: RootState) => state.settlement.settlements
  );

  const handleAddSettlement = () => {
    dispatch(addSettlement({
      id: Date.now(),
      title: '',
      amount: 0,
      comment: '',
      response: 'pending'
    }));
  };

  return (
    <div className="bg-white rounded-md min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 border border-gray-300 rounded-md">
          <h2 className="text-lg font-bold mb-4">Party A View</h2>
          <Button
            type="button"
            onClick={handleAddSettlement}
            name="New Form"
          />
          {settlements.map((settlement) => (
            <PartyAForm key={settlement.id} settlementId={settlement.id} />
          ))}
        </div>
        <div className="p-4 border border-gray-300 rounded-md">
          <h2 className="text-lg font-bold mb-4">Party B View</h2>
          {settlements.map((settlement) => (
            <PartyBForm key={settlement.id} formData={settlement} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormList;
