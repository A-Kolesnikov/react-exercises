import { Component } from "react";
import App from "./App";

export class User extends Component {
    render() {
        return (
            <div>
                
                Username: {this.props.username}
                <br />
                Email: {this.props.email}
                <div>
                    <label>
                        <input type="checkbox" id="RememberMe" name="RememberMe" value="RememberMe" onChange={(e) => this.props.onUserClick(e.target.checked, this.props.username)} />
                        Remember Me
                    </label>
                </div>
            </div>
        );
    }
}


