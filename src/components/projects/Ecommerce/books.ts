import { Book } from './types';

// TODO: Move into database
const books: Book[] = [
    {
        id: '1',
        title: 'Clean Code: A Handbook of Agile Software Craftmanship',
        author: 'Robert Martin',
        edition: '1st',
        publicationDate: 2008,
        price: 40.0,
        rating: 4.7,
        images: ['clean-code.jpg'],
        inCart: false,
    },
    {
        id: '2',
        title: 'Pragmatic Programmer: Your journey to mastery',
        author: 'David Thomas',
        edition: '2nd',
        publicationDate: 2019,
        price: 40.0,
        rating: 4.7,
        images: ['pragmatic-programmer.jpg'],
        inCart: false,
    },
    {
        id: '3',
        title: 'Debugging: The 9 Indispensable Rules for Finding Even the Most Elusive Software and Hardware Problems',
        author: 'David J. Agans',
        edition: 'Illustrated',
        publicationDate: 2006,
        price: 15.0,
        rating: 4.6,
        images: ['debugging.jpg'],
        inCart: false,
    },
    {
        id: '4',
        title: 'HTML and CSS: Design and Build Websites',
        author: 'Jon Duckett',
        edition: '1st',
        publicationDate: 2011,
        price: 20.0,
        rating: 4.7,
        images: ['html-and-css.jpg'],
        inCart: false,
    },
    {
        id: '5',
        title: 'Responsive Web Design with HTML5 and CSS: Develop future-proof responsive websites using the latest HTML5 and CSS techniques',
        author: 'Ben Frain',
        edition: '4th',
        publicationDate: 2020,
        price: 35.0,
        rating: 4.5,
        images: ['responsive-web-design.jpg'],
        inCart: false,
    },
    {
        id: '6',
        title: 'CSS: The Definitive Guide: Visual Presentation for the Web',
        author: 'Eric Meyer, Estelle Weyl',
        edition: '3rd',
        publicationDate: 2017,
        price: 40.0,
        rating: 4.6,
        images: ['css-the-definitive-guide.jpg'],
        inCart: false,
    },
];

export default books;
