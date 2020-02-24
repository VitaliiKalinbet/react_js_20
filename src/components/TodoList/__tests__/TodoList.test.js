import React from "react";
import { shallow } from "enzyme";
import TodoList from "../TodoList";

it("TodoList renders a li element for each received item ", () => {
  const wrapped = shallow(<TodoList />);

  expect(wrapped.find("ul").length).toBe(1);
});
