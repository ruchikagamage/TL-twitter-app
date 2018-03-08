import TimeLineType from '../types/timeline';

var initialState = {
    action: false,
    fetching: false,
    feeds: [],
    data: ''
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
        case TimeLineType.RETWEET_SUCCESS:
            const feeds = state.feeds.map((tweet, index) => {
                if (tweet.id_str === action.id) {
                    return Object.assign({}, tweet, {
                        retweeted: true,
                    });
                }
                return tweet;
            });
            return {
                ...state,
                action: TimeLineType.RETWEET_SUCCESS,
                data: action.payload,
                feeds,
            }
        case TimeLineType.RETWEET_ERROR:
            return {
                ...state,
                action: TimeLineType.RETWEET_ERROR,
                data: action.payload
            }
        default:
            return state;

    }

    return state;
}

