// eslint-disable-next-line no-unused-vars
import React from 'react'
export default class Counter extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            currentNumber: this.props.initnumber
        }
    }

    increment () {
        this.setState((preState) => ({
            currentNumber:parseInt(preState.currentNumber)  + 1
        }))
    }

    decrement () {
        // if(this.state.currentNumber > this.props.initnumber){
        //     this.setState((preState) => ({
        //         currentNumber: preState.currentNumber - 1
        //     }))       
        // }

        this.setState((preState) => ({
            currentNumber: preState.currentNumber - 1
        }))    
    }
    
    render () {
        return (
            <div>
                <span>{this.state.currentNumber}</span>
                <br/>
                <button onClick={() => this.increment()}>Tăng Số</button>
                <button onClick={() => this.decrement()}>Giảm Số</button>
            </div>
        )
    }
}