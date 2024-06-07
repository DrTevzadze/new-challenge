// console.log has been added to each function, in order to track the database

interface Settlement {
  id: number;
  partyAAmount: number;
  partyBResponse: "none" | "agreed" | "disputed";
}

const settlements: Settlement[] = [];

const getSettlements = (): Settlement[] => {
  console.log(settlements);
  return settlements;
};

const addSettlement = (settlement: {
  partyAAmount: number;
  partyBResponse: "none" | "agreed" | "disputed";
}): Settlement => {
  const newSettlement = {
    ...settlement,
    id: settlements.length + 1,
  };
  settlements.push(newSettlement);
  console.log(settlements);
  return newSettlement;
};

const updateSettlement = (
  id: number,
  update: {
    partyAAmount?: number;
    partyBResponse?: "none" | "agreed" | "disputed";
  }
): Settlement | null => {
  const index = settlements.findIndex((settlement) => settlement.id === id);
  if (index === -1) return null;
  settlements[index] = { ...settlements[index], ...update };
  console.log(settlements);
  return settlements[index];
};

const getSettlementById = (id: number): Settlement | undefined => {
  console.log(settlements);
  return settlements.find((settlement) => settlement.id === id);
};

export { getSettlements, addSettlement, updateSettlement, getSettlementById };
