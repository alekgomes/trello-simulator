// const createNewLane = require("../Context/LaneContext");
import { createNewLane } from "../Context/LaneContext";
const chai = require("chai");

describe("creation of new lane", () => {
  it("should return a empty lane with the laneName given", () => {
    const name = "Nova Lane";
    const newLane = createNewLane(name);

    chai.expect(newLane).to.be.an("object");
    chai.expect(newLane).to.have.all.keys("infos");
    chai.expect(newLane).to.have.nested.property("infos.laneName");
    chai.expect(newLane).to.have.nested.property("infos.cards");
    chai.expect(newLane).to.nested.include({ "infos.laneName": name });
  });
});
