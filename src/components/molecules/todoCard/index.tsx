import React, { useCallback } from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { Button } from 'components/atoms/button';
import { Checkbox as _Checkbox } from 'components/atoms/checkbox';
import { Todo as TodoType, ChangeStatus, Delete } from 'store/todo';

interface Props extends TodoType {
  index: number;
}

export const TodoCard: React.FC<Props> = ({ index, title, status }) => {
  const dispatch = useDispatch();
  const onChange = useCallback(() => {
    dispatch(ChangeStatus({ index }));
  }, [index, dispatch]);
  const onClick = useCallback(() => {
    dispatch(Delete({ index }));
  }, [index, dispatch]);
  return (
    <Container>
      <Inner>
        <Checkbox isChecked={status === 'done'} onChange={onChange} />
        <Title>{title}</Title>
      </Inner>
      <Button onClick={onClick}>Delete</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled(_Checkbox)`
  margin-right: 8px;
`;

const Title = styled.div`
  margin-right: 8px;
  display: inline;
`;
