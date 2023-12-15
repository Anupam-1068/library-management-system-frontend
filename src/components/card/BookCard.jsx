import {Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function BookCard({book}) {
    return (
        <Card >
            <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>
                    {book.description}
                </Card.Text>
                <NavLink className="nav-link" to={`/book/${book.id}/edit`}>Click to edit</NavLink>
            </Card.Body>
        </Card>
    )
}


export default BookCard;