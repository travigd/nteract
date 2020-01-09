import { UndoableCellDelete } from "../../src/decorators/undoable/undoable-cell-delete";

describe("UndoableCellDelete", () => {
  it("does not display undo button if cell is not deleting", () => {
    const component = shallow(
      <UndoableCellDelete>
        <p>test</p>
      </UndoableCellDelete>
    );
    expect(component.find());
  });
});
