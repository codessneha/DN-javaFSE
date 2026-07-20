import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

import "./App.css";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (

        <div className="container">

            <h1>Blogger Application</h1>

            {/* Method 1 : Logical && */}

            {showBooks && <BookDetails />}

            {/* Method 2 : Ternary */}

            {showBlogs ? <BlogDetails /> : null}

            {/* Method 3 : Element Variable */}

            {

                (() => {

                    let component = null;

                    if (showCourses) {

                        component = <CourseDetails />;

                    }

                    return component;

                })()

            }

        </div>

    );

}

export default App;