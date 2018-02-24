import TimeLineTypes from '../types/timeline';
const Codebird = require("codebird");
//import Config from '../config/index';

export function getTimeline() {

    var cb = new Codebird;
    cb.setConsumerKey('JeXsJLwL2FQachen6NWNkA1EZ', 'xMeOQmrFc1XGtbHcG5cnCSqCvEPjbb5YoLZ2Jz72BwleqJEthn');

    return function (dispatch) {
        dispatch({
            type: TimeLineTypes.FETCHING_FEEDS,
            payload: true
        });
        cb.setToken(localStorage.getItem('token'), localStorage.getItem('token_secret')); // see above
        cb.__call(
            "statuses_homeTimeline",
            { "count": 20 },
            function (reply, rate, err) {
                if (err) {
                    dispatch({
                        type: TimeLineTypes.FEEDS_ERROR,
                        payload: err
                    });
                } else {
                    dispatch({
                        type: TimeLineTypes.FEEDS,
                        payload: reply
                    });
                }
            }
        );
    }
}

export function tweet(tweet) {

    var cb = new Codebird;
    cb.setConsumerKey('JeXsJLwL2FQachen6NWNkA1EZ', 'xMeOQmrFc1XGtbHcG5cnCSqCvEPjbb5YoLZ2Jz72BwleqJEthn');

    return function (dispatch) {
        dispatch({
            type: TimeLineTypes.FETCHING_FEEDS,
            payload: true
        });
        cb.setToken(localStorage.getItem('token'), localStorage.getItem('token_secret'));
        cb.__call(
            "statuses_update",
            { "status": tweet },
            function (reply, rate, err) {
                if (err) {
                    dispatch({
                        type: TimeLineTypes.FEEDS_ERROR,
                        payload: err
                    });
                } else {
                    cb.setToken(localStorage.getItem('token'), localStorage.getItem('token_secret')); // see above
                    cb.__call(
                        "statuses_homeTimeline",
                        { "count": 20 },
                        function (reply, rate, err) {
                            if (err) {
                                dispatch({
                                    type: TimeLineTypes.FEEDS_ERROR,
                                    payload: err
                                });
                            } else {
                                dispatch({
                                    type: TimeLineTypes.FEEDS,
                                    payload: reply
                                });
                            }
                        }
                    );
                }
            }
        );
    }
}