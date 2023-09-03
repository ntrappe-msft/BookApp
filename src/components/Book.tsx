import './Book.css';
import Yellowface from '../assets/Yellowface.png';
import FilledStar from '../assets/star-fill.png';
import EmptyStar from '../assets/star-empty.png';
import HalfStar from '../assets/half-star.png';

const Frag = <></>;

function Book() {
    const SynopsisSummary = "Authors June Hayward and Athena Liu were supposed to be twin rising stars: same year at Yale, same debut year in publishing. But Athena's a cross-genre literary darling, and June didn't even get a…";
    const FullSynopsis = "Authors June Hayward and Athena Liu were supposed to be twin rising stars. But Athena’s a literary darling. June Hayward is literally nobody. Who wants stories about basic white girls, June thinks. So when June witnesses Athena’s death in a freak accident, she acts on impulse: she steals Athena’s just-finished masterpiece, an experimental novel about the unsung contributions of Chinese laborers during World War I. So what if June edits Athena’s novel and sends it to her agent as her own work? So what if she lets her new publisher rebrand her as Juniper Song—complete with an ambiguously ethnic author photo? Doesn’t this piece of history deserve to be told, whoever the teller? That’s what June claims, and the New York Times bestseller list seems to agree. But June can’t get away from Athena’s shadow, and emerging evidence threatens to bring June’s (stolen) success down around her. As June races to protect her secret, she discovers exactly how far she will go to keep what she thinks she deserves.";
    
    const NumStars = 1.5;

    return (
        <>
            <div id="cover-wrapper">
                <img src={Yellowface} alt="Cover for Yellowface Book"/>
            </div>
            <div id="title-wrapper">
                <h2>Yellowface</h2>
                <h3 id="author">R. F. Kuang</h3>
            </div>
            <div id="stats-wrapper">
                <div id="rating-box">
                    <div className="stars">
                        {GetStars(NumStars)}
                    </div>
                    <h5>11K Reviews</h5>
                </div>
                <div id="length-box">
                    <h4>Medium</h4>
                    <h5>70K Pages</h5>
                </div>
                <div id="stats-box">
                    <h4>May 2023</h4>
                    <h5>Published</h5>
                </div>
            </div>
            <p id="synopsis-wrapper">{SynopsisSummary}</p>
            <div id="reviews-wrapper">Reviews Wrapper</div>
        </>
    );
}

function GetStars(rating: number) {
    const MAX_STARS = 5;
    let Stars = [];
    let i = 0;

    console.clear();

    /* If an invalid rating, just use 5 empty stars */
    if (rating < 0.5 || rating > 5) {
        console.warn('ERROR: Rating should be within [0.5, 5]');
        for (i = 0; i < MAX_STARS; i++) {
            Stars.push(<img className="star" src={EmptyStar} alt="star"/>);
        }
    /* For a valid rating, iterate thru full, half, & empty stars */
    } else {
        console.log('rating is ' + rating);
        for (i = 0; i < MAX_STARS; i++) {
            if (rating >= 1) {
                rating -= 1;
                console.log('added fill + now rating is ' + rating);
                Stars.push(<img className="star" src={FilledStar} alt="star"/>);
            } else if (rating >= 0.5) {
                console.log('added half + now rating is ' + rating);
                rating -= 0.5;
                Stars.push(<img className="star" src={HalfStar} alt="star"/>);
            } else {
                console.log('added empty, rating should be 0? ' + rating);
                Stars.push(<img className="star" src={EmptyStar} alt="star"/>);
            }
        }
    }
    return Stars;
}

export default Book;