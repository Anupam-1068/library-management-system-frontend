import {useEffect, useState} from "react";
import BookCard from "../components/card/BookCard.jsx";
import {BookClient} from "../api/BookClientApi.jsx";

function AllBooksView() {

    const [books, setBooks] = useState([]);

    const loadBooks = async () => {
        try {
            const response = await BookClient.getAllBooks();

            // Check if response.data is an array before setting state
            if (Array.isArray(response.data)) {
                setBooks(response.data);
            } else {
                console.error("Data from the API is not an array:", response.data);
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }

    useEffect(() => {
        loadBooks();
    }, [])


    // const mockData = [
    // {id : 1,title:'testname',author:'Khan',
    //     description:"hggh"
    //
    // },{id : 2,name:'testname',author:'Khan',
    //     description:"hgghj"},
    // ]
    return (
        <div className="mt-5">
            {
                // eslint-disable-next-line no-undef
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