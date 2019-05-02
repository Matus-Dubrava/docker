import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from './Message';

import * as actions from '../actions';

class App extends Component {
    state = {
        inputText: ''
    };

    componentDidMount() {
        if (!this.props.posts || !this.props.posts.length) {
            this.props.onFetchPosts();
        }
    }

    inputChangeHandler = event => {
        this.setState({ inputText: event.target.value });
    };

    formSubmitHandler = event => {
        event.preventDefault();

        if (this.state.inputText.length) {
            this.setState({ inputText: '' });
            this.props.onAddPost(this.state.inputText);
        }
    };

    renderForm() {
        const buttonStyle = {
            width: '100%',
            marginTop: '10px',
            height: '35px',
            backgroundColor: 'green',
            color: '#eee',
            border: 'none',
            borderRadius: '3px',
            fontSize: 'inherit',
            textTransform: 'uppercase',
            outline: 'none',
            cursor: 'pointer'
        };

        return (
            <form onSubmit={this.formSubmitHandler}>
                <div>
                    <label>Enter text: </label>
                    <input
                        value={this.state.inputText}
                        type="text"
                        onChange={this.inputChangeHandler}
                    />
                </div>
                <button style={buttonStyle} type="submit">
                    submit
                </button>
            </form>
        );
    }

    renderTodos() {
        if (Array.isArray(this.props.posts)) {
            return this.props.posts.map(post => (
                <li key={post}>
                    {post}
                    <button onClick={this.props.onRemovePost.bind(null, post)}>
                        X
                    </button>
                </li>
            ));
        }

        return null;
    }

    renderErrorMessage() {
        if (this.props.error) {
            return <Message type="error" message={this.props.error} />;
        }
    }

    renderSuccessMessage() {
        if (this.props.message) {
            return <Message type="success" message={this.props.message} />;
        }
    }

    render() {
        const appContainerStyle = {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '70px',
            color: '#333'
        };
        return (
            <div>
                {this.renderSuccessMessage()}
                {this.renderErrorMessage()}
                <div style={appContainerStyle}>
                    <h1>TODO APP</h1>
                    {this.renderForm()}
                    <ul
                        style={{
                            listStyle: 'none'
                        }}
                    >
                        {this.renderTodos()}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProsp = state => {
    return {
        posts: state.posts.posts,
        error: state.posts.error,
        message: state.posts.message,
        loading: state.posts.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(actions.fetchPosts()),
        onAddPost: text => dispatch(actions.addPost(text)),
        onRemovePost: text => dispatch(actions.removePost(text))
    };
};

export default connect(
    mapStateToProsp,
    mapDispatchToProps
)(App);
