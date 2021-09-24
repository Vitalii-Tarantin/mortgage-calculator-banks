import React, { Component } from "react";
import Form from "../components/Form";
import Result from "../components/Result";
class Container extends Component {
    constructor() {
        super();
        this.state = {
            salary: 0,
            result: 0,
        };
        this.handleFormSSubmit = this.handleFormSSubmit.bind(this);
    };
    handleFormSSubmit(salary) {
        salary.id = Date.now();
        const updatedSalary = salary.salary;
        const maxHouseValue = updatedSalary * 3;
        this.setState({
            salary: updatedSalary,
            result: maxHouseValue
        });
    };
    render(){
        return(
            <div>
                <h1>Mortgage Calculator</h1>
                <Form onFormsSubmit={this.handleFormSSubmit} /> 
                <Result results={this.state.results} />
            </div>
        );
    };

};

export default Container;
