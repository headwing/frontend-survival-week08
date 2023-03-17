import styled from 'styled-components';

import Restaurant from '../types/Restaurant';

import Menu from './Menu';

const Row = styled.tr`
  display: flex;
  flex-direction: column;
  margin-bottom: 6em;
  
  td:first-of-type {
    font-size: 2.5em;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  
  td:last-of-type {
    width: 100%;
  }
`;

type RestaurantProps = {
  restaurant: Restaurant;
};

export default function RestaurantRow({ restaurant }: RestaurantProps) {
  const { name, menu } = restaurant;

  return (
    <Row>
      <td>
        {name}
      </td>
      <td>
        <Menu menu={menu} />
      </td>
    </Row>
  );
}
