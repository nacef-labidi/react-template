import React from 'react';

class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {myComments: []};
    }

    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.name}</strong>
                    {comment.body}
                    {/*<button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>*/}
                </p>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const {postId} = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(result=> result.json())
            .then(json => this.setState({myComments: json}));
    }

    render() {
        return (
            <div className="comments">
                {this.state.myComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        );
    }
}

export default Comments;