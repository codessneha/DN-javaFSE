function BlogDetails() {

    const blogs = [

        {
            id: 1,
            title: "React Hooks",
            author: "Sneha"
        },
        {
            id: 2,
            title: "Spring Boot Basics",
            author: "Rahul"
        },
        {
            id: 3,
            title: "Java Collections",
            author: "Ankit"
        }

    ];

    return (

        <div className="card">

            <h2>Blog Details</h2>

            <ul>

                {

                    blogs.map(blog => (

                        <li key={blog.id}>

                            <strong>{blog.title}</strong>

                            <br />

                            By {blog.author}

                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default BlogDetails;