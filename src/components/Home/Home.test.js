import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import makeServer from '../../utils/mock/mockServer';
import seedMockData from '../../utils/mock/mockData';

describe('test the Home page', () => {
  let server;

  beforeEach(() => {
    server = makeServer({ environment: "test" });
  });

  afterEach(() => {
    server.shutdown();
  });

  test('should render Home page with filters', async () => {
    render(<BrowserRouter><Home /></BrowserRouter>);

    const filterAll = screen.getByTestId('filter-all');
    const filterAvailable = screen.getByTestId('filter-available');
    const filterPending = screen.getByTestId('filter-pending');
    const filterSold = screen.getByTestId('filter-sold');

    expect(filterAll).toBeInTheDocument();
    expect(filterAvailable).toBeInTheDocument();
    expect(filterPending).toBeInTheDocument();
    expect(filterSold).toBeInTheDocument();
  });

  test('should render home page correctly', async () => {
    seedMockData(server);

    const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>);

    await waitFor(() => {
      expect(getByText('Cat 1')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(getByText('Cat 2')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(getByText('Cat 3')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(getByText('Dog 1')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(getByText('Dog 2')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(getByText('Dog 3')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(getByText('Lion 1')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(getByText('Lion 2')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(getByText('Lion 3')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(getByText('Rabbit 1')).toBeInTheDocument();
    });
  });

  test('should filter pets by status - Available', async() => {
    render(<BrowserRouter><Home /></BrowserRouter>);

    userEvent.click(screen.getByTestId('filter-available'));

    await waitFor(() => expect(screen.getByText('Available')).toBeInTheDocument());
    
    //Filter chip should be visible
    await waitFor(() => expect(screen.getAllByText('Pending')).toHaveLength( 1 ));
    await waitFor(() => expect(screen.getAllByText('Sold')).toHaveLength( 1 ));

  });

  test('should filter pets by status - Pending', async() => {
    render(<BrowserRouter><Home /></BrowserRouter>);

    userEvent.click(screen.getByTestId('filter-available'));

    await waitFor(() => expect(screen.getByText('Pending')).toBeInTheDocument());
    
    //Filter chip should be visible
    await waitFor(() => expect(screen.getAllByText('Available')).toHaveLength( 1 ));
    await waitFor(() => expect(screen.getAllByText('Sold')).toHaveLength( 1 ));

  });

  test('should filter pets by status - Sold', async() => {
    render(<BrowserRouter><Home /></BrowserRouter>);

    userEvent.click(screen.getByTestId('filter-available'));

    await waitFor(() => expect(screen.getByText('Sold')).toBeInTheDocument());
    
    //Filter chip should be visible
    await waitFor(() => expect(screen.getAllByText('Available')).toHaveLength( 1 ));
    await waitFor(() => expect(screen.getAllByText('Pending')).toHaveLength( 1 ));

  });
});