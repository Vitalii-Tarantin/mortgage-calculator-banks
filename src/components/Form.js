import React, {Component} from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            salary: 0,
            salarySecond: 0,
            deposit : 0,
            commitments: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit(event) {
        event.preventDefault();
        const salary = parseInt(this.state.salary);
        const salarySecond = parseInt(this.state.salarySecond);
        const deposit = parseInt(this.state.deposit);
        const commitments = parseInt(this.state.commitments);
        if (!salary || !deposit || !commitments) {
            return;
        }
        this.props.onFormSubmit({
            salary,
            salarySecond,
            deposit,
            commitments
        });
        this.setState({
            salary: 0,
            salarySecond: 0,
            deposit: 0 ,
            commitments: 0
        });
    };
    render() {
        return(
            <form onSubmit={ this.handleSubmit }>
                <label name="salary">Ваша зарплатня</label>
                <input
                    type = "number"
                    placeholder = "Ваша зарплатня"
                    name = "salary"
                    value = { this.state.salary }
                    onChange = { this.handleChange }
                />
                <label name="salarySecond">Инший дохід</label>
                <input
                    type = "number"
                    placeholder = "Инший дохід"
                    name = "salarySecond"
                    value = { this.state.salary }
                    onChange = { this.handleChange }
                />
                <label>Ваш депозит</label>
                <input 
                    type = "number"
                    placeholder = "Ваш депозит"
                    name = "deposit"
                    value = { this.state.salary }
                    onChange = { this.handleChange }
                />
                <label>Щомісячний внесок</label>
                <input 
                    type = "number"
                    placeholder = "Ваш щомісячний внесок"
                    name = "commitments"
                    value = { this.state.s }
                    onChange = { this.handleChange }
                />
                <input 
                    type = "submit"
                    value = "Post"
                />
            </form>
        );
    };
};
export default Form;
