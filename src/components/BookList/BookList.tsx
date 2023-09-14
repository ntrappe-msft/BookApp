import BookPreview from "../BookPreview/BookPreview";
import Yellowface from '../../assets/Yellowface.png';
import HarryPotter from '../../assets/HarryPotter.png';
import './BookList.css';

function BookList({ getBookFromChild }) {

    const sendBookToParent = (title: string) => {
        getBookFromChild(title);
    }

    return (
        <>
            <ul id="book-list">
                <li className="book-preview" onClick={() => sendBookToParent('Yellowface')}>
                    <BookPreview
                        cover={Yellowface}
                        title={"Yellowface"}
                        author={"R. F. Kuang"}
                        readers={300}
                    />
                </li>
                <li className="book-preview" onClick={() => sendBookToParent('Harry Potter')}>
                    <BookPreview
                        cover={HarryPotter}
                        title={"Harry Potter and the Sorcer's Stone"}
                        author={"J. K. Rowling"}
                        readers={123456789}
                    />
                </li>
                <li className="book-preview" onClick={() => sendBookToParent('default')}>
                    <BookPreview />
                </li>
            </ul>
        </>
    );
}

export default BookList;