import React from "react";
import { shallow } from "enzyme";
import TodoEditor from "../TodoEditor";

describe("TodoEditor ", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<TodoEditor />);
  });
  it("renders an input and a button", () => {
    expect(wrapped.find('input[type="text"]').length).toBe(1);
    expect(wrapped.find('button[type="submit"]').length).toBe(1);
    expect(wrapped.find("form").length).toBe(1);
  });

  describe("event on input[type=text] ", () => {
    let todo;
    beforeEach(() => {
      todo = "Hello React";
      const eventMock = {
        target: {
          value: todo
        }
      };
      wrapped.find('input[type="text"]').simulate("change", eventMock);
    });

    it("can enter text into an input ", () => {
      expect(wrapped.find('input[type="text"]').prop("value")).toBe(todo);
    });

    it("on form submit, input should get emptied ", () => {
      wrapped.update();
      expect(wrapped.find('input[type="text"]').prop("value")).toBe(todo);

      const eventMockForSubmit = {
        preventDefault: () => null
      };
      const props = {
        onSave: () => null
      };
      wrapped.setProps(props);
      wrapped.find("form").simulate("submit", eventMockForSubmit);
      wrapped.update();
      expect(wrapped.find('input[type="text"]').prop("value")).toBe("");
    });

    it("onSave prop has been called ", () => {
      wrapped.update();
      expect(wrapped.find('input[type="text"]').prop("value")).toBe(todo);

      const mockCallback1 = jest.fn(() => null);
      const eventMockForSubmit = {
        preventDefault: mockCallback1
      };
      const mockCallback2 = jest.fn(() => null);
      const props = {
        onSave: mockCallback2
      };
      wrapped.setProps(props);
      wrapped.find("form").simulate("submit", eventMockForSubmit);
      wrapped.update();
      expect(mockCallback1.mock.calls.length).toBe(1);
      expect(mockCallback2.mock.calls.length).toBe(1);
    });
  });
});
