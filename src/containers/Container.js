import React, { Component } from "react";
import Form from "../components/Form";
import Result from "../components/Result";
class Container extends Component {
    constructor() {
        super();
        this.state = {
            
            result: 0,
        };
        this.handleFormSSubmit = this.handleFormSSubmit.bind(this);
    };
    handleFormSubmit(formData) {
        
        const updatedSalary = formData.salary + formData.salarySecond;
        const maxHouseValue = (updatedSalary * 3) + formData.deposit;
        const finalValue = maxHouseValue - formData.commitmens;
        this.setState({
            result: finalValue,
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
