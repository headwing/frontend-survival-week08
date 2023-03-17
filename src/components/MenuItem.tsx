import styled from 'styled-components';
import Food from '../types/Food';

const Container = styled.li`
  width: 30%;
`;

const Item = styled.button`
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 2rem;
  margin: 0;
  padding: 1em;
  background-color: ${(props) => props.theme.colors.tertiary};
  text-align: start;
  cursor: pointer;
  
  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.pointer};
  }
  
  img {
    display: block;
    margin: 0 auto;
    width: 75%;
  }

  span {
    font-size: 1.5em;
    display: block;
    padding-block: 1rem;
  }
`;

type MenuItemProps = {
  food: Food;
  onClickItem: (food: Food) => void;
};

export default function MenuItem({ food, onClickItem }: MenuItemProps) {
  const { name, price, image } = food;

  return (
    <Container>
      <Item type="button" onClick={() => onClickItem(food)}>
        <img src={image} alt="" />
        <span>{name}</span>
        <span>
          {price.toLocaleString()}
          원
        </span>
      </Item>
    </Container>
  );
}
