import axios from 'axios';

import {
    FETCH_POSTS,
    REQUEST_FAIL,
    REQUEST_INIT,
    REQUEST_SUCCESS,
    ADD_POST,
    REMOVE_POST
} from './types';

export const fetchPosts = () => async dispatch => {
    dispatch({ type: REQUEST_INIT });

    try {
        const response = await axios('/api/');
        dispatch({ type: FETCH_POSTS, posts: response.data });
        dispatch({ type: REQUEST_SUCCESS, message: '' });
    } catch (error) {
        dispatch({ type: REQUEST_FAIL, error });
    }
};

export const addPost = text => async dispatch => {
    dispatch({ type: REQUEST_INIT });

    try {
        const response = await axios.post('/api/', {
            text
        });
        if (response.data.status === 0) {
            dispatch({
                type: REQUEST_SUCCESS,
                message: 'post successfully stored '
            });
            dispatch({ type: ADD_POST, post: text });
        } else {
            dispatch({ type: REQUEST_FAIL, error: 'posts already exists' });
        }
    } catch (error) {
        dispatch({ type: REQUEST_FAIL, error });
    }
};

export const removePost = text => async dispatch => {
    dispatch({ type: REQUEST_INIT });

    try {
        const response = await axios.delete('/api/', {
            data: { text }
        });

        if (response.data.status === 0) {
            dispatch({
                type: REQUEST_SUCCESS,
                message: 'post successfully deleted'
            });
            dispatch({ type: REMOVE_POST, post: text });
        } else {
            dispatch({ type: REQUEST_FAIL, error: 'could not remove post' });
        }
    } catch (error) {
        dispatch({ type: REQUEST_FAIL, error });
    }
};
