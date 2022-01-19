import {prettyDOM, render, screen} from '@testing-library/react';
import Header from './Header';

test('renders learn react screen', () => {
    render(<Header />);
    // console.log(prettyDOM());
    // const linkElement=getByText("learn react");
    // expect(linkElement).toBeTruthy()
})