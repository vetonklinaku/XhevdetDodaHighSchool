import React from "react";

export default class SignOutRoute extends React.Component {
    goHome = () => {
        this.props.history.push("/");
        window.location.reload();
    }

    componentDidMount() {
        localStorage.removeItem("usertoken");
    }
    render() {
        return (
            <React.Fragment>
                {this.goHome()}
            </React.Fragment> 
        )
    }
}


