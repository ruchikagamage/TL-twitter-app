import React, { Component } from "react";
import { Content, Button, Logo, } from "../../components/common";
import { connect } from "react-redux";
import * as Authentication from '../../actions/auth';
import * as AuthTypes from '../../types/auth';
import "./styles.css";



class SetPinCode extends Component {


    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            btnText: "Submit Pincode",
            action: "NULL"
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    buttonOnClick = () => {
        this.props.dispatch(Authentication.signin());
    };

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.action + " == " + AuthTypes.PINCODE_ERROR + " && " + this.state.action + " === " + "PINCODE_SETTING");
        if (nextProps.action == AuthTypes.PINCODE_ERROR && this.state.action === "PINCODE_SETTING") {
            this.setState({ btnText: nextProps.error, action: "NULL" });

            setTimeout(() => {
                this.setState({ btnText: "Submit Pincode" });
            }, 2000);
        }
    }

    enterPinCode = () => {
        if (this.refs.pincode.value.trim()) {
            this.refs.tweetpostError.innerHTML = "";
            this.setState({ btnText: "Processing Please Wait", action: "PINCODE_SETTING" });
            this.props.dispatch(Authentication.requestToken(this.refs.pincode.value, this.props));
        } else {
            this.refs.tweetpostError.innerHTML = "Pincode should not be empty";
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        let disabled = this.state.btnText === "Submit Pincode" ? false : true;
        console.log("this.state.action  ", this.state.action);

        return (
            <div className="pin-wrap" style={{ height: this.state.height }}>
                <div className="pin-html">
                    <Logo size={100} />
                    <div className="row pin-active">
                        <div className="top-space ">
                            <input type="text" ref="pincode" className="pin-code" placeholder="Enter Pincode" />
                            <div className="error" ref="tweetpostError"></div>
                        </div>
                        <div className="top-space ">
                            <Button onClick={this.enterPinCode} info lg disabledStatus={disabled}>{this.state.btnText}</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cb: state.auth.cb,
        action: state.auth.action,
        error: state.auth.error
    };
}

export default connect(mapStateToProps)(SetPinCode);