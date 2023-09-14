import { truncateNum } from '../Book/BookHelpers';

/**
 * Takes in a number representing current number of readers for a book and
 * shortens it to 'K' (thousand), 'M' (million), etc. to be cohesive.
 * @param {number} readers - How many readers reading a book
 * @returns paragraph element with new number bolded
 */
export function setNumReaders(readers: number): JSX.Element {
    // Default (none given) or no readers
    if (readers < 1) {
        return (<p>No one is reading</p>);
    } else if (readers < 2) {
        return (<p><b>1</b> person is reading</p>);
    } else {
        return (<p><b>{truncateNum(readers)}</b>people reading</p>)
    }
}

// export function setTags(tagN: string): JSX.Element {
//     return <span className=></span>
// }