import React from 'react';
// import { useFormContext } from 'react-hook-form';

import { Input } from 'components/atoms/input';

export const TitleForm: React.FC = () => {
  // const { errors } = useFormContext();
  return (
    <>
      <label>Todo Title</label>
      <Input name="title" />
      <input type="submit" />
    </>
  );
};
