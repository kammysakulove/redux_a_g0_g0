import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
}

export const Input: React.FC<Props> = ({ name }) => {
  const { register } = useFormContext();
  return <input name={name} ref={register} />;
};
