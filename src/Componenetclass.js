import React, { Component } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'

export default class Componenetclass extends Component {

    constructor() {
        super()
        this.state = {
            number: 0
        }
    }
    componentDidMount() {
        console.log("In Component Did Mount " + this.state.number)
    }
    componentDidUpdate(){
        console.log("In Component Did update"+this.state.number)
    }

    incrementvalue=()=>{
        this.setState({number:this.state.number+1})
    }

    decrementvalue=()=>{
        this.setState({number:this.state.number-1})
    }


    render() {
        let component=this.state.number ? <Component1/>:<Component2/>
        return (
            <div>
                <h1>Component Life Cycle!!!</h1>
                <p>value is :{this.state.number}</p>
                <button type='button' onClick={this.incrementvalue}>Add</button>
                <button type='button' onClick={this.decrementvalue}>Substact</button>
                {component}
            </div>
        )
    }
}
