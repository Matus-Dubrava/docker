import {
    REQUEST_FAIL,
    REQUEST_INIT,
    REQUEST_SUCCESS,
    FETCH_POSTS,
    ADD_POST,
    REMOVE_POST
} from '../actions/types';

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: '',
    message: ''
};

const requestInit = state => {
    return {
        ...state,
        message: '',
        error: '',
        loading: true
    };
};

const requestSuccess = (state, { message }) => {
    return {
        ...state,
        message,
        error: '',
        loading: false
    };
};

const requestFail = (state, { error }) => {
    return {
        ...state,
        message: '',
        error,
        loading: false
    };
};

const addPost = (state, { post }) => {
    return {
        ...state,
        posts: [post, ...state.posts]
    };
};

const fetchPosts = (state, { posts }) => {
    return {
        ...state,
        posts: posts.reverse(),
        loading: false,
        error: '',
        message: ''
    };
};

const removePost = (state, { post }) => {
    return {
        ...state,
        loading: false,
        posts: state.posts.filter(p => p !== post)
    };
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REMOVE_POST:
            return removePost(state, action);
        case REQUEST_FAIL:
            return requestFail(state, action);
        case REQUEST_INIT:
            return requestInit(state, action);
        case REQUEST_SUCCESS:
            return requestSuccess(state, action);
        case FETCH_POSTS:
            return fetchPosts(state, action);
        case ADD_POST:
            return addPost(state, action);
        default:
            return state;
    }
};
