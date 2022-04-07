import React, { Component } from 'react'

export default class Component2 extends Component {

    componentWillUnmount(){
        console.log("Component 2 Unmounted!!!")
    }
    render() {
        return (
            <div>
                <h1>  Component2</h1>
            </div>
        )
    }
}
