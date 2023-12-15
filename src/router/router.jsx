import App from "../App.jsx";
import {createBrowserRouter} from "react-router-dom";
import AllBooksView from "../views/AllBooksView.jsx";
import EditBookView from "../views/EditBookView.jsx";

export const Books_VIEW_PATH = "/book";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: Books_VIEW_PATH,
                element: <AllBooksView/>,
            },
            {
                path: "/home",
                element: <div><h1>Home</h1></div>,
            },
            {
                path: "/book/:bookId/edit",
                element: <EditBookView/>,
            },
        ],
    },

]);


export default router;