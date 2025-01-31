import React from 'react';
import { FieldProps } from '../../shared/schema';

const withFieldDefault = (Comp, defaultProps) => {
  const HOC = (props: FieldProps) => {
    const newProps: FieldProps = {
      ...(typeof defaultProps === 'function' ? defaultProps(props) : defaultProps),
      ...props,
    };
    return <Comp {...newProps} />;
  };
  HOC.displayName = 'MultipleSelect';
  return HOC;
};

export default withFieldDefault;
