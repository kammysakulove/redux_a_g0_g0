import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm, { FormContext } from 'react-hook-form';
import { Todo as TodoType, Add, GetAllTodos } from 'store/todo';
import styled from 'styled-components/macro';
import { TitleForm } from 'components/molecules/titleForm';
import { TodoCard } from 'components/molecules/todoCard';

export const Todo: React.FC = () => {
  const methods = useForm<TodoType>();
  const dispatch = useDispatch();
  const todos = useSelector(GetAllTodos);
  const onSubmit = methods.handleSubmit(({ title }) => {
    dispatch(Add({ title }));
    methods.reset();
  });

  return (
    <Container>
      <FormContext {...methods}>
        <form onSubmit={onSubmit}>
          <TitleForm />
        </form>
      </FormContext>
      {todos.map((todo, index) => (
        <TodoCard key={index} index={index} {...todo} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
`;
