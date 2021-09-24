import React, {Component} from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            salary: 0,
            salarySecond: 0,
            deposit : 0,
            commitments: 0,
            term: 0,
            interest: 0,
            showing: false
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
        const interest = parseFloat(this.state.interest);
        const term = parseInt(this.state.term);
        if (!salary || !deposit || !commitments || !term) {
            return;
        }

        this.props.onFormSubmit({
            salary,
            salarySecond,
            deposit,
            commitments,
            term,
            interest
        });

        this.setState({
            salary: 0,
            salarySecond: 0,
            deposit: 0 ,
            commitments: 0,
            term: 0,
            interest: 0.00

        });
    };
    render() {
        const { showing } = this.state;
        return(
            <form onSubmit={ this.handleSubmit }>
                <label name="salary">Ваша річна зарплатня</label>
                <input
                    type = "number"
                    placeholder = "Ваша зарплатня"
                    name = "salary"
                    value = { this.state.salary }
                    onChange = { this.handleChange }
                />
                <div>
                    <button onClick={() => this.setState({ showing: !showing })}>Додати инший дохід</button>
                    { showing 
                        ? <div>
                            <label name="salarySecond">Инший дохід</label>
                            <input
                                type = "number"
                                placeholder = "Инший дохід"
                                name = "salarySecond"
                                value = { this.state.salarySecond }
                                onChange = { this.handleChange }
                            />
                        </div>
                        : null
                    } 
                </div>  
                <label>Ваш депозит</label>
                <input 
                    type = "number"
                    placeholder = "Ваш депозит"
                    name = "deposit"
                    value = { this.state.deposit }
                    onChange = { this.handleChange }
                />
                <label>Щомісячний внесок</label>
                <input 
                    type = "number"
                    placeholder = "Ваш щомісячний внесок"
                    name = "commitments"
                    value = { this.state.commitments }
                    onChange = { this.handleChange }
                />
                <label>Строк іпотеки в роках</label>
                <input 
                    type = "number"
                    placeholder = "Ваш строк іпотеки в роках"
                    name = "term"
                    value = { this.state.term }
                    onChange = { this.handleChange }
                />
                <label>Щомісячна процентна ставка %</label>
                <input 
                    type="number"
                    placeholder="Ваша щомісячна процентна ставка %"
                    name="interest"
                    value = { this.state.interest }
                    onChange = { this.handleChange }
                />
                <input 
                    className="calculate"
                    type = "submit"
                    value = "Розрахувати"
                />
            </form>
        );
    };
};
export default Form;
