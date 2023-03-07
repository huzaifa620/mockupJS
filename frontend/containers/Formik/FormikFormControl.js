import React from 'react';
import { Block } from 'baseui/block';
import { FormControl } from 'baseui/form-control';
import { getIn, FormikConsumer } from 'formik';

export const FormikFormControl = ({
  name,
  label,
  caption,
  children,
}) => {
  return (
    <FormikConsumer>
      {({ errors, touched }) => {
        const error = getIn(errors, name);
        return (
          <Block marginBottom="30px">
            <FormControl label={label} caption={caption} error={error}>
              {children}
            </FormControl>
          </Block>
        );
      }}
    </FormikConsumer>
  );
};

export default FormikFormControl;
