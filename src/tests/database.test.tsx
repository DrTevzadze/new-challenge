import { describe, it, expect } from "vitest";
import {
  addSettlementDB,
  getSettlementsDB,
  updateSettlementDB,
  getSettlementById,
} from "../database/database";

describe("Database Tests", () => {
  it("should add a new settlement", () => {
    const newSettlement = addSettlementDB({
      partyAAmount: 1000,
      partyBResponse: "none",
    });
    expect(newSettlement).toEqual({
      id: 1,
      partyAAmount: 1000,
      partyBResponse: "none",
    });
    expect(getSettlementsDB()).toHaveLength(1);
  });

  it("should update a settlement", () => {
    const newSettlement = addSettlementDB({
      partyAAmount: 2000,
      partyBResponse: "none",
    });
    const updatedSettlement = updateSettlementDB(newSettlement.id, {
      partyAAmount: 2500,
    });
    expect(updatedSettlement).toEqual({
      id: 2,
      partyAAmount: 2500,
      partyBResponse: "none",
    });
  });

  it("should get a settlement by ID", () => {
    const newSettlement = addSettlementDB({
      partyAAmount: 3000,
      partyBResponse: "none",
    });
    const foundSettlement = getSettlementById(newSettlement.id);
    expect(foundSettlement).toEqual({
      id: 3,
      partyAAmount: 3000,
      partyBResponse: "none",
    });
  });

  it("should return null for non-existing ID on update", () => {
    const result = updateSettlementDB(999, { partyAAmount: 4000 });
    expect(result).toBeNull();
  });

  it("should return undefined for non-existing ID on get by ID", () => {
    const result = getSettlementById(999);
    expect(result).toBeUndefined();
  });
});
