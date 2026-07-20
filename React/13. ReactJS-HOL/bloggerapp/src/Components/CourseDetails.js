function CourseDetails() {

    const courses = [

        {
            id: 1,
            name: "React",
            duration: "2 Months"
        },

        {
            id: 2,
            name: "Spring Boot",
            duration: "3 Months"
        },

        {
            id: 3,
            name: "Node.js",
            duration: "2 Months"
        }

    ];

    return (

        <div className="card">

            <h2>Course Details</h2>

            <ul>

                {

                    courses.map(course => (

                        <li key={course.id}>

                            <strong>{course.name}</strong>

                            <br />

                            Duration : {course.duration}

                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default CourseDetails;