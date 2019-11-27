import React, { Component } from "react";


export class LifeCycles extends Component {
    constructor() {
        super();  //Its a method in all class comp that extends the functionality and the methods of the React component to the class methods so that class is able to access those methods
        console.log("constructor!!")

    }

    componentDidMount() {
        console.log('Mounted!!')
    }

    componentDidUpdate() {
        console.log('Updated!!')
    }

    shouldComponentUpdate(nextProps , nextState){
        console.log("ShouldComponentUpdated" , nextProps);  //nextprops is the recent updated props
        // return false;  //it will not undergo all the lifecycle methods
        return nextProps.text === this.props.text;
    }




    render() {
        console.log("render!!");
        return (
            <div className="lifecycles">
                <h2>Life Cycle Component</h2>
                {this.props.text}
            </div>

        )
    }
}

