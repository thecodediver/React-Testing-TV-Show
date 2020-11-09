import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { fetchShow as mockFetchShow } from './api/fetchShow'

import App from './App'
jest.mock('./api/fetchShow')



test('Episodes renders correctly', () => {
  render(<App />)
})

test('Fetches and renders show data', () => {
  mockFetchShow.mockResolvedValueOnce({
    data: {
      name: 'Stranger Things',
      summary: 'Stranger things happen than normal',
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
  })
  render(<App />)
})
