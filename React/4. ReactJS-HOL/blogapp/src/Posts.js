import React, { Component } from "react";

class Posts extends Component {

    constructor() {
        super();

        // Initialize state
        this.state = {
            posts: []
        };
    }

    // Method to fetch posts from API
    loadPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    posts: data
                });
            })
            .catch((error) => {
                throw error;
            });
    }

    // Lifecycle method called after component is mounted
    componentDidMount() {
        this.loadPosts();
    }

    // Lifecycle method to catch errors
    componentDidCatch(error, errorInfo) {
        alert("An error occurred: " + error);
        console.error(error);
        console.error(errorInfo);
    }

    // Display posts
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Blog Posts</h1>

                {this.state.posts.map((post) => (
                    <div
                        key={post.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "15px",
                            marginBottom: "15px",
                            borderRadius: "5px"
                        }}
                    >
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;