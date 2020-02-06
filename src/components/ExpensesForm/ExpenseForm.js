import React, { Component } from "react";
import shortid from "shortid";
import Form from "../shared/Form";
import Label from "../shared/Label";
import Input from "../shared/Input";
import Button from "../shared/Button";

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  state = {
    name: "",
    amount: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave({
      id: shortid.generate(),
      name: this.state.name,
      amount: Number(this.state.amount)
    });
    this.setState({ name: "", amount: 0 });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

export default ExpenseForm;
