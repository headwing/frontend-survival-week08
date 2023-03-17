import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 1.5em;
  padding-block: 1.5em;
  width: 49%;
  border: 0;
  border-radius: 3em;
  color: #FFFFFF;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: #44272B;
`;

const OrderButton = styled(Button)`
  background-color: #FF8400;
`;

type OperationButtonsProps = {
  onClickCancel: () => void;
  onClickOrder: () => void;
}

export default function OperationButtons({
  onClickCancel, onClickOrder,
}: OperationButtonsProps) {
  return (
    <Container>
      <CancelButton
        type="button"
        onClick={onClickCancel}
      >
        취소
      </CancelButton>
      <OrderButton
        type="button"
        onClick={onClickOrder}
      >
        주문하기
      </OrderButton>
    </Container>
  );
}
