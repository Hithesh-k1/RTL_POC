import {prettyDOM, render, screen} from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

test('renders learn react screen', () => {
    render(<Footer />);
    // console.log(prettyDOM());
    // const linkElement=getByText("learn react");
    // expect(linkElement).toBeTruthy()
})

test('Text i doc', () => {
    render(<Footer />);
    // console.log(prettyDOM());
    const linkElement=screen.getByText("Movie App");
    expect(linkElement).toBeInTheDocument()
})