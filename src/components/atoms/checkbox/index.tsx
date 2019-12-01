import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  isChecked: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<Props> = props => {
  return <Container {...props} type="checkbox" checked={props.isChecked} onChange={props.onChange} />;
};

const Container = styled.input``;
