import './BookPreview.css';
import { setNumReaders } from './BookPreviewHelpers';
import { setTitle } from '../../components/Book/BookHelpers';
import { DEFAULT_AUTHOR, DEFAULT_TITLE } from '../Book/BookHelpers';
import DEFAULT_COVER from '../../assets/blank-cover.png';

function BookPreview({
    cover = DEFAULT_COVER,
    title = DEFAULT_TITLE,
    author = DEFAULT_AUTHOR,
    readers = 0,
    tags = []
}) {
    return (
        <>
            <div id="preview-cover-wrapper">
                <img src={cover} alt="No bookcover found"/>
            </div>
            <div id="preview-content-wrapper">
                <div id="preview-title-wrapper">
                    {setTitle(title)}
                    <h3 id="author-text">{author}</h3>
                </div>
                <div id="preview-tags-wrapper">
                    <span className='adventure tag'>Adventure</span>
                    <span className='bestseller tag'>Bestseller</span>
                </div>
                <div id="preview-readers-wrapper">
                    {setNumReaders(readers)}
                </div>
            </div>
        </>
    );
}

export default BookPreview;