import {prettyDOM, render, screen} from '@testing-library/react';
import MovieCard from './MovieCard';

test('renders learn react screen', () => {
    render(<MovieCard />);
    // console.log(prettyDOM());
    // const linkElement=getByText("learn react");
    // expect(linkElement).toBeTruthy()
})