import TimeLineType from '../types/timeline';

var initialState = {
    action: false,
    fetching: false,
    feeds: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TimeLineType.FEEDS:
            return {
                ...state,
                fetching: false,
                feeds: action.payload,
                action: TimeLineType.FEEDS
            };
        case TimeLineType.FETCHING_FEEDS:
            return {
                ...state,
                fetching: action.payload,
                feeds: [],
                action: TimeLineType.FETCHING_FEEDS
            };
        default:
            return state;

    }

    return state;
}

