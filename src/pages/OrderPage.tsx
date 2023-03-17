import styled from 'styled-components';

import FilterableRestaurantTable from '../components/FilterableRestaurantTable';
import Cart from '../components/Cart';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

const Container = styled.div`
  position: relative;
`;

export default function OrderPage() {
  const restaurants = useFetchRestaurants();

  return (
    <Container>
      <FilterableRestaurantTable restaurants={restaurants} />
      <Cart />
    </Container>
  );
}
