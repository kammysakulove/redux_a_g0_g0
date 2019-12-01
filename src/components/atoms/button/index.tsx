import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ onClick, children }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

const Container = styled.button``;
