export interface IBook {
    title: string;
    image: string;
    title_long: string;
    date_published: string;
    publisher: string;
    authors: string[];
    isbn13: string;
    edition?: string;
    binding?: string;
    isbn: string;
    isbn10: string;
    language: string;
    dimensions?: string;
    pages: number;
    synopsis?: string;
}
