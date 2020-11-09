import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { fetchShow as mockFetchShow } from './api/fetchShow'

jest.mock('./api/fetchShow.js')

const mockData = {
  data: {
    name: 'Stranger Things',
    summary: 'Stranger things happen than normal',
    image: {
      original: 'testimages'
    },
    _embedded: {
      episodes: [
        {
          id: 1,
          season: 1,
          number: 1,
          summary: 'Stuff happened in episode 1',
          runtime: '46 minutes',
        },
        {
          id: 2,
          season: 1,
          number: 2,
          summary: 'Stuff happened in episode 2',
          runtime: '46 minutes',
        },
        {
          id: 3,
          season: 1,
          number: 3,
          summary: 'Stuff happened in episode 3',
          runtime: '46 minutes',
        },
        {
          id: 4,
          season: 1,
          number: 4,
          summary: 'Stuff happened in episode 4',
          runtime: '46 minutes',
        },
      ]
    }
  }
}
test('Fetches and renders show data', async () => {
  mockFetchShow.mockResolvedValueOnce(mockData)
  render(<App />)
  await waitFor(()=>{
      const dropdown = screen.getByText(/select a season/i); 
      userEvent.click(dropdown) 
      const seasonOne = screen.getByText(/season 1/i)
      userEvent.click(seasonOne)
  });   
})
