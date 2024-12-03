import Note from "../../app/components/Note";

describe("Note.cy.tsx", () => {
  it("renders", () => {
    cy.mount(<Note />);
  });
});
