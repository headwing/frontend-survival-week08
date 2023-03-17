import { useLocalStorage } from 'usehooks-ts';

import styled from 'styled-components';

import Food from '../types/Food';

import CartItem from './CartItem';

import useCreateOrder from '../hooks/useCreateOrder';
import OperationButtons from './Cart/OperationButtons';

const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  background: ${(props) => props.theme.colors.tertiary};
  
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5em;
    margin-block: 2em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 2em;
  display: flex;
  align-items: center;
  
  img {
    display: block;
    margin-right: .1em;
    width: 1.2em;
  }
  
  span:last-of-type {
    font-size: .5em;
    margin-left: .5em;
    padding: .5em 1em;
    border-radius: 1em;
    background-color: #FF8400;
    color: #FFFFFF;
  }
`;

const TotalPrice = styled.div`
  font-size: 2em;
  
  strong {
    color: #FF8400;
  }
`;
export default function Cart() {
  const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);

  const { createOrder } = useCreateOrder();

  const handleClickRemove = (index: number) => {
    const foods = selectedFoods.filter((_, i) => i !== index);
    setFoods(foods);
  };

  const handleClickCancel = () => {
    // TODO: 인트로 페이지로 이동
  };

  const handleClickOrder = async () => {
    if (!selectedFoods.length) {
      return;
    }

    const receipt = await createOrder(selectedFoods);
    // setReceipt(receipt);

    setFoods([]);
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          <img src="/images/shopping-cart.png" alt="" />
          <span>
            주문내역
          </span>
          <span>
            10개
          </span>
        </Title>
        <TotalPrice>
          총 결제 예상금액
          {' '}
          <strong>100,000</strong>
          원
        </TotalPrice>
      </Wrapper>
      <ul>
        {selectedFoods.map((food, index) => {
          const key = `${food.id}-${index}`;

          return (
            <CartItem
              key={key}
              index={index}
              food={food}
              onClickCancel={handleClickRemove}
            />
          );
        })}
      </ul>
      <OperationButtons
        onClickCancel={handleClickCancel}
        onClickOrder={handleClickOrder}
      />
    </Container>
  );
}
