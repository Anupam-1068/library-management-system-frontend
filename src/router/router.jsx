import App from "../App.jsx";
import {createBrowserRouter} from "react-router-dom";
import AllBooksView from "../views/AllBooksView.jsx";
import EditBookView from "../views/EditBookView.jsx";
import ReviewTable from "../components/table/ReviewTable.jsx";
import HomePage from "../views/HomePage.jsx";

export const Books_VIEW_PATH = "/book";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: Books_VIEW_PATH,
                element: <AllBooksView/>,
            },
            {
                path: "/home",
                element: <HomePage/>,
            },
            {
                path: "/book/:bookId/edit",
                element: <EditBookView/>,
            },
            {
                path: "/test",
                element: <div>Router is working</div>,
            },
            {
                path: "/review",
                element: <ReviewTable/>
            },

        ],
    },

]);


export default router;