/* eslint-disable no-unused-vars */
import React from "react"
import './Square.css'

export default class Square extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            CurentColor: this.props.initColor,
        }
    }

    setCurentColor(CurentColor){
        this.setState({
            CurentColor,
        })
    }

    render () {
        const style = {
            backgroundColor: this.state.CurentColor || "red",
        }
        let textInput
        return(
            <div>
                <div style={style} className="Square">  
                    <div className="SquareControl">
                        <input ref={(ele) => {textInput = ele}} placeholder="..."></input>
                        <button onClick = {() => {this.setCurentColor(textInput.value)}}>Set bg</button>   
                    </div>
                </div>
                
             </div> 
        )
    }
}