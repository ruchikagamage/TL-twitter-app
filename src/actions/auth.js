import AuthTypes from '../types/auth';
var Codebird = require("codebird");
//import Config from '../config/index';

export function signin(props) {

    var cb = new Codebird;
    cb.setConsumerKey('JeXsJLwL2FQachen6NWNkA1EZ', 'xMeOQmrFc1XGtbHcG5cnCSqCvEPjbb5YoLZ2Jz72BwleqJEthn');

    return function (dispatch) {
        cb.__call(
            "oauth_requestToken",
            { oauth_callback: "oob" },
            function (reply) {
                cb.setToken(reply.oauth_token, reply.oauth_token_secret);
                cb.__call(
                    "oauth_authorize",
                    {},
                    function (auth_url) {
                        dispatch({
                            type: AuthTypes.CODEBIRD,
                            payload: cb
                        });

                        var win = window.open(auth_url, '_blank');
                        win.focus();
                        props.history.push('/set-pin-code');
                    }
                );
            }
        );
    }
}

export function requestToken(pincode, props) {

    return function (dispatch) {
        if (props.cb.__call) {
            props.cb.__call(
                "oauth_accessToken",
                { oauth_verifier: pincode },
                function (reply, rate, err) {
                    if (err) {
                        dispatch({
                            type: AuthTypes.PINCODE_ERROR,
                            payload: "error response or timeout exceeded"
                        });
                    } else if (reply.httpstatus === 200) {
                        props.cb.setToken(reply.oauth_token, reply.oauth_token_secret);
                        localStorage.setItem('token', reply.oauth_token);
                        localStorage.setItem('token_secret', reply.oauth_token_secret);
                        localStorage.setItem('screen_name', reply.screen_name);
                        localStorage.setItem('user_id', reply.user_id);
                        props.history.push('/home');
                    } else {
                        dispatch({
                            type: AuthTypes.PINCODE_ERROR,
                            payload: "error response or timeout exceeded"
                        });
                    }
                }
            );
        } else {
            dispatch({
                type: AuthTypes.PINCODE_ERROR,
                payload: "error response or timeout exceeded"
            });
        }

    }
}