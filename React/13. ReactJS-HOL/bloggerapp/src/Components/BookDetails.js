function BookDetails() {

    const books = [
        {
            id: 1,
            title: "React Explained",
            author: "Zac Gordon"
        },
        {
            id: 2,
            title: "Effective Java",
            author: "Joshua Bloch"
        },
        {
            id: 3,
            title: "Clean Code",
            author: "Robert C. Martin"
        }
    ];

    return (

        <div className="card">

            <h2>Book Details</h2>

            <ul>

                {

                    books.map(book => (

                        <li key={book.id}>

                            <strong>{book.title}</strong>

                            <br />

                            Author : {book.author}

                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default BookDetails;