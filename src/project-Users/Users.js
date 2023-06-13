import { Component } from "react";
import App from "./App";

export class Users extends Component{
    render(){
        return(
            <div>
                <h2>Users</h2>
                {this.props.children}
            </div>
        )
    }
}