import React, { Component } from 'react'

export default class Component1 extends Component {

    componentWillUnmount(){
        console.log("Component 1 Unmounted!!!")
    }
    render() {
        return (
            <div>
                <h1>  Component1</h1>
            </div>
        )
    }
}
