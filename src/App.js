import React, { Component } from 'react';
import Info from './Info';
import './App.css';
import Button from "./Button"
import Input from "./Input"


class App extends Component {
  state = {
  button:0,
  inputst:"",
  val:"",
  nom:"suma",
  prenom:"valentino",
  age:"42",
  salut:"ciao"
  }

  clickButtonrouge = () =>{
    this.setState({
      button : this.state.button +1
    })
  }

  clickButtonbleu = () =>{
    this.setState({
      button : this.state.button -1
    })
  }

  

  register = (event)=> {
    this.setState({inputst:event.target.value }) 
    console.log(this.state.inputst)
  }

  clickGo = () => {
    this.setState({
      val: this.state.inputst
    })
  }

  

  render() {
    return (
      <div className="App">
      
        <h1>beginners</h1> 
        {this.state.button} 
        <Info nom={this.state.nom} prenom={this.state.prenom} age={this.state.age} hello={this.state.salut}/>
        <Button buttrouge={this.clickButtonrouge} buttbleu = {this.clickButtonbleu} />
        <Input reg = {this.register} aff = {this.clickGo}/>
        <h1>{this.state.val}</h1>
      </div>
    );
  }
}

export default App;
