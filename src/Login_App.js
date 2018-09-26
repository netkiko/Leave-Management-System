import React, { Component } from 'react';
//import Table from './Table';
import Form from './Login_Form'


class Login_App extends Component {
    //state = {};
    
    //state = {
    //    characters: []
    //};

    /* state = {
        characters: [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ]
    }; */

    state = {
        characters: [
            {
                'username': '',
                'password': ''
            }
        ]
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    onSubmit = async () => {
        const response = await this.props.mutate({
            variables: this.state,
        });
        const {token, RefreshToken} = response.data.login;
    }
    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
    }

    render() {

        return (
            <div className="container">
                <Table
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>


        );
    }
}

//-----------------------------------
// Do Not Remove Below Line
//-----------------------------------
export default App;