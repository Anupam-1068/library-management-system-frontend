import axios from "axios";


const BookClient = {
    getAllBooks() {
        return axios.get("/book")
    },
    getBookById(id) {
        return axios.get(`/book/${id}`)
    },
    updateBook(book) {
        return axios.put(`/book/${book.id}`, book)
    },
    deleteBook(id) {
        return axios.delete(`/book/${id}`)
    }
}

export {BookClient}