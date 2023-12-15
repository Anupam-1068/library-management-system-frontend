import {useEffect, useState} from "react";
import BookCard from "../components/card/BookCard.jsx";
import {BookClient} from "../api/BookClientApi.jsx";

function AllBooksView() {

    const [books, setBooks] = useState([]);

    const loadBooks = async () => {
        const response = await BookClient.getAllBooks();

        setBooks(response.data);
    }

    useEffect(() => {
        loadBooks();
    }, [])

    return (
        <div className="mt-5">
            {
                books.map(book => {
                    return (
                        <div key={`book-${book.id}`} className="mb-3">
                            <BookCard  book={book}/>
                        </div>
                    )
                })
            }

        </div>
    )
}


export default AllBooksView;