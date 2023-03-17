import styled from 'styled-components';

import Restaurant from '../types/Restaurant';

import RestaurantRow from './RestaurantRow';

const Container = styled.div`
  padding-block: 5rem;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  background-color: ${(props) => props.theme.colors.background};
`;

type RestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <Container>
      <table>
        <tbody>
          {restaurants.map((restaurant) => (
            <RestaurantRow
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
