import React, { Component } from "react";
import Form from "../components/Form";
import Result from "../components/Result";
class Container extends Component {
    constructor() {
        super();
        this.state = {
            results: 0,
            repaymentResults: 0
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleFormSubmit(formData) {
        
        const updatedSalary = formData.salary + formData.salarySecond;
        const maxHouseValue = (updatedSalary * 3) + formData.deposit;
        const finalValue = maxHouseValue - formData.commitments;
        const outstandingDebt = finalValue - formData.deposit;
        const outstandingDebtDividedByTerm = outstandingDebt / formData.term;
        const interestAmount = formData.interest / 100;
        const yearPayment = (interestAmount * outstandingDebt) + outstandingDebtDividedByTerm;
        const finalPayments = Math.round(yearPayment / 12); 
        this.setState({
            results: finalValue,
            repaymentResults: finalPayments
        });
    };
    render(){
        return(
            <div className="calculator-container">
                <h1>Mortgage Calculator</h1>
                <Form onFormSubmit={this.handleFormSubmit} /> 
                <Result results={this.state.results} repaymentResults={this.state.repaymentResults}/>
            </div>
        );
    };

};

export default Container;
