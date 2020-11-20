import chai from "chai";
import { laneController, initialState } from "../Context/LaneContext";

describe("cardController", () => {
  it("removeCard(laneId,cardId, state)", () => {
    chai.expect(laneController().removeCard).to.be.a("function");
    // laneController().removeCard();
  });
});
