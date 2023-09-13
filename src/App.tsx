/**
 * This file is the entire Book App. It should be treated like the control
 * and brains of the operation, synchronizing, rendering components, checking 
 * settings, and populating data.
 * Author(s):
 * Date: September 04, 2023 
 */

import './App.css'
import Book from './components/Book/Book';

function App() {
    return (
        // This is an example of how we create a Book component and attach to to index.html via App.tsx
        <span id="book-wrapper">
            <Book
                cover={'/assets/Yellowface.png'}
                title={"Yellowface"}
                author={"R. F. Kuang"}
                rating={3.3}
                numReviews={456}
                words={90475}
                published={'May 2023'}
                synopsis={`Authors June Hayward and Athena Liu were supposed to be twin rising stars: same 
                    year at Yale, same debut year in publishing. But Athena's a cross-genre literary darling, 
                    and June didn't even get a paperback release. Nobody wants stories about basic white girls, 
                    June thinks. So when June witnesses Athena's death in a freak accident, she acts on 
                    impulse: she steals Athena's just-finished masterpiece, an experimental novel about the unsung 
                    contributions of Chinese laborers to the British and French war efforts during World War I.
                    So what if June edits Athena's novel and sends it to her agent as her own work? So what if 
                    she lets her new publisher rebrand her as Juniper Song--complete with an ambiguously ethnic 
                    author photo? Doesn't this piece of history deserve to be told, whoever the teller? That's 
                    what June claims, and the New York Times bestseller list seems to agree. But June can't get 
                    away from Athena's shadow, and emerging evidence threatens to bring June's (stolen) success 
                    down around her. As June races to protect her secret, she discovers exactly how far she will 
                    go to keep what she thinks she deserves.`}
            />
        </span>
    );
}

export default App;
