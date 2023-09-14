const HUNDRED = 100;
const THOUSAND = 1000;
const TEN_THOUSAND = 10000;
const HUN_THOUSAND = 100000;
const MILLION = 1000000;
const BILLION = 1000000000;

// TODO: Duplicates code from /components/Book/BookHelpers.tsx setReviewNum()
export function setNumReaders(readers: number): JSX.Element {
    // Default (none given) or no readers
    if (readers < 1) {
        return (<p>No one is reading</p>);
    } else if (readers < 2) {
        return (<p><b>1</b> person is reading</p>);
    } else if (readers < THOUSAND) {
        return (<p><b>{readers}</b> people reading</p>)
    } else if (readers < TEN_THOUSAND) {
        const firstDigit = Math.trunc(readers / THOUSAND);
        const secDigit = Math.trunc(readers / HUNDRED) - (firstDigit * 10);
        if (secDigit == 0) {
            return (<p><b>{firstDigit}K</b> people reading</p>);
        } else {
            return (<p><b>{firstDigit}.{secDigit}K</b> people reading</p>);
        }
    } else if (readers < MILLION) {
        const digits = Math.trunc(readers / THOUSAND);
        return (<p><b>{digits}K</b> people reading</p>);
    } else if (readers < BILLION) {
        const firstDigit = Math.trunc(readers / MILLION);
        const secDigit = Math.trunc(readers / HUN_THOUSAND) - (firstDigit * 10);
        if (secDigit == 0) {
            return (<p><b>{firstDigit}M</b> people reading</p>);
        } else {
            return (<p><b>{firstDigit}.{secDigit}M</b> people reading</p>);
        }
    } else {
        const firstDigit = Math.trunc(readers / MILLION);
        return (<p><b>{firstDigit}B</b> people reading</p>);
    }
}

// export function setTags(tagN: string): JSX.Element {
//     return <span className=></span>
// }