import axios from "axios";


const ReviewClient = {

    getAllReviews() {
        return axios.get("/api/review")
    },

}

export {ReviewClient}