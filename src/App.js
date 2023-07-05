import { useState } from "react";
import BookCreate from './components/BookCreate';

function App() {

    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log('Book created', title);
    };

    return (
        <BookCreate onCreate={createBook}></BookCreate>
    );
}

export default App;