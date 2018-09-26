import React, { Component } from 'react';

class Login_Form extends Component {
    /*
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }
    */

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    /*
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    */

    render() {
        const { username, password } = this.state;

        return (
            <form>
                <label>User Name</label>
                <input
                    type="text"
                    name="name"
                    value={username}
                    onChange={this.handleChange} />
                <label>Password</label>
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={this.handleChange} />
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        );
    }
}


//-----------------------------------
// Do Not Remove Below Line
//-----------------------------------
export default Login_Form;