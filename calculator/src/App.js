import React, { PureComponent } from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import {evaluate} from "mathjs" 
// import components


class Result extends PureComponent{
  render(){
    return (
      <div className="result">
        <div className="upper-result">{this.props.eq}</div>
        <div className = "lower-result">{this.props.tot}</div>
      </div>
    );
  }
}

function Button(props){
  return (
  <button className = "cal-button" onClick={props.onClick}> {props.value}</button>
  )
}

function Rows(props){
  return (
    <div className = "cal-row">
      <Button value={props.val1} onClick = {()=>props.onClick(props.val1)}/>
      <Button value={props.val2} onClick = {()=>props.onClick(props.val2)}/>
      <Button value={props.val3} onClick = {()=>props.onClick(props.val3)}/>
      <Button value={props.val4} onClick = {()=>props.onClick(props.val4)}/>
    </div>

  )
}

class Calculator extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      equation : "",
      total : 0,
      // eqIsPressed: false,
    }
  }

  solve(){
    let current_tot = this.state.total;
    let current_eq = this.state.equation;
    let n = current_eq.length;

    if (n === 0){
      current_tot = 0;
    }
    else{  
      if (!this.isLiteral(current_eq[n-1])){
        current_eq = current_eq.substring(0,n-1);
      }

      let op = evaluate(current_eq);
      // let op = "s";
      if (op === "Infinity"){
        current_tot = 0;
        alert("Zero Division Error");
      }
      else{
        current_tot = op;
      }
    }

    this.setState({
      total: current_tot,
      equation : "",
    });
  }

  isLiteral(val){
    if(val==="+" || val==="/" || val==="*" || val==="-"){
      return false;
    }
    else{
      return true;
    }
  }

  formEq(val){
    let current_eq = this.state.equation;
    if (current_eq.length>0){
      let n = current_eq.length;
      let last = current_eq[n-1];
      let changed_str = current_eq;
      if(!this.isLiteral(last)){
        if (last === "+" && (val === "-"||val === "*"||val === "/")){
          changed_str = current_eq.substring(0,n-1) + val;
        }
        else if(last === "-" && (val === "+"||val === "*"||val === "/")){
          changed_str = current_eq.substring(0,n-1) + val;
        }
        else if((last === "/" && val === "*")||(last === "*" && val === "/")){
          changed_str = current_eq.substring(0,n-1) + "+";
        }
        else if(this.isLiteral(val)){
          changed_str = current_eq + val;;
        }
        this.setState({
          equation:changed_str,
        });
      }
      else{
        this.setState({
          equation: current_eq + val,
        })
      }
    }
    else{
      if(val!=="+" && val!=="*" && val!=="-" && val!=="/"){
        this.setState({
          equation: current_eq + val,
        })
      }
    }
  }

  handleClick(val){
    if(val === "="){
      this.solve();
    }
    else if(val === "CLR"){
      this.setState({
        equation: "",
        total : 0,
      });
    }
    else{
      this.formEq(val);
    }
  }

  render(){
    return(
      <div className = "calculator">
        <Result eq = {this.state.equation} tot = {this.state.total}/>
        <Rows val1 = "1" val2 = "2" val3 = "3" val4 = "+" onClick={(x)=>this.handleClick(x)}/>
        <Rows val1 = "4" val2 = "5" val3 = "6" val4 = "-" onClick={(x)=>this.handleClick(x)}/>
        <Rows val1 = "7" val2 = "8" val3 = "9" val4 = "*" onClick={(x)=>this.handleClick(x)}/>
        <Rows val1 = "CLR" val2 = "0" val3 = "=" val4 = "/" onClick={(x)=>this.handleClick(x)}/>
      </div>
    );
  }
}

export default Calculator;