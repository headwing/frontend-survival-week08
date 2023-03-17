import { render } from '@testing-library/react';

import FilterableRestaurantTable from './FilterableRestaurantTable';

import fixtures from '../../fixtures';

describe('FilterableRestaurantTable', () => {
  const { restaurants } = fixtures;

  it('renders without crash', () => {
    render(<FilterableRestaurantTable restaurants={restaurants} />);
  });
});
