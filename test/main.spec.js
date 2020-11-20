import chai from "chai";
import { laneController, initialLanesState } from "../Context/LaneContext";

describe("cardController", () => {
  it("removeCard(laneId,cardId, state)", () => {
    chai.expect(laneController().removeCard).to.be.a("function");
    const newState = laneController().removeCard("ijrf", "123", [
      ...initialLanesState,
    ]);
    chai.expect(newState).be.a("array");
    chai.expect(newState[0].cards).to.have.lengthOf(0);
  });

  it("addCard(laneId, information)", () => {
    chai.expect(laneController().addCard).to.be.a("function");
    const newState = laneController().addCard(
      "sookf",
      {
        title: "title",
        body: "body",
      },
      [...initialLanesState]
    );
    chai.expect(newState[1].cards).to.have.lengthOf(2);
    chai.expect(newState[1].cards[1].title).to.be.equal("title");
  });
});
