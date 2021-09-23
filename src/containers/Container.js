import React, { Component } from "react";
import Form from './Form';

class Container extends Component {
    constructor() {
        super();
        this.state = {
            salary: 0,
            result: 0,
        };
        this.handleFormSSubmit = this.handleFormSSubmit.bind(this);
    };
    handleFormSSubmit(submittedForm) {
        submittedForm.id = Date.now();
        const updateSalary = submittedForm.salary;
        this.setState({
            salary: updateSalary
        });
    };
    render(){
        return(
            <div>
                <h1>Mortgage Calculator</h1>
                <Form onFormsSubmit={this.handleFormSSubmit} /> 
            </div>
        );
    };

};
