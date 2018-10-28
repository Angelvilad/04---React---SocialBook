import React, {Component} from 'react';


class LoginForm extends Component {
    render () {
      return (
        <div className="login-form-wrapper">
          <label>Nombre de usuario:&nbsp;<input onChange={(event) => this.updateState(event, 'userInput')}/></label>
          <label>Password:&nbsp;<input onChange={(event) => this.updateState(event, 'passInput')}/></label>
          <button onClick={this.checkLogin}>Enviar</button>
          <p>{JSON.stringify(this.state)}</p>
        </div>  
      );
    }
    state = {
      userInput:'r',
      passInput: '',
      authors: []
    }
    componentDidMount() {
      fetch('https://randomuser.me/api?results=10&seed=abc')
        .then(response => response.json())
        .then(({results}) => this.setState({
          authors: results
        }))
    }
    updateState = (event, prop) => {
      const state = {};    
      state[prop] = event.target.value;
      this.setState(state);
    }
    checkLogin = () => {
      const [userLogged] = this.state.authors.filter(
        author => author.login.username === this.state.userInput && author.login.password === this.state.passInput);
        console.log('El usuario loggeado es:', JSON.stringify(userLogged));
    }
  }

  export default LoginForm;