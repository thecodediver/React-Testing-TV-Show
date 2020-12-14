import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Episodes from './Episodes'

test('Episodes renders correctly', () => {
  render(<Episodes episodes={[{ id: '1', name: 'Mike', season: 1, number: 1, summary: 'This is episode 1', runtime: '46 minutes' },{ id: '2', name: 'Mike', season: 1, number: 2, summary: 'This is episode 2', runtime: '54 minutes' },{ id: '3', name: 'Mike', season: 1, number: 3, summary: 'This is episode 3', runtime: '34 minutes' },{ id: '4', name: 'Mike', season: 1, number: 4, summary: 'This is episode 4', runtime: '51 minutes' }]} />)
})

test('First Episode Title is correct', () => {
  render(<Episodes episodes={[{ id: '1', name: 'Mike', season: 1, number: 1, summary: 'This is episode 1', runtime: '46 minutes' },{ id: '2', name: 'Mike', season: 1, number: 2, summary: 'This is episode 2', runtime: '54 minutes' },{ id: '3', name: 'Mike', season: 1, number: 3, summary: 'This is episode 3', runtime: '34 minutes' },{ id: '4', name: 'Mike', season: 1, number: 4, summary: 'This is episode 4', runtime: '51 minutes' }]} />);
  const episodeOne = screen.queryAllByText('/season/i');
  expect(episodeOne).not.toBeNull();
})
