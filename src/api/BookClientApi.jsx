import axios from "axios";


const BookClient = {
    getAllBooks() {
        return axios.get("/api/book")
    },
    getBookById(id) {
        return axios.get(`/api/book/${id}`)
    },
    getBookByTitle(title) {
        return axios.get(`/api/book/${title}`)
    },
    updateBook(book) {
        return axios.put(`/api/book/${book.id}`, book)
    },
    deleteBook(id) {
        return axios.delete(`/api/book/${id}`)
    }

}

export {BookClient}