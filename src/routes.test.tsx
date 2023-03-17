import { render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is “/”', () => {
    it('renders the intro page', () => {
      renderRouter('/');

      screen.getByText(/Welcome/);
    });
  });

  context('when the current path is “/order”', () => {
    it('renders the order page', () => {
      renderRouter('/order');

      screen.getByText(/This is test/);
    });
  });

  context('when the current path is “/order/complete”', () => {
    it('renders the order result page', () => {
      renderRouter('/order/complete');

      screen.getByText(/Welcome/);
    });
  });
});
