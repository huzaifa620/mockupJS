import React from 'react';
import { getIn, FormikConsumer, FormikProps } from 'formik';
import { Input } from 'baseui/input';
import { Textarea } from 'baseui/textarea';
import { Checkbox } from 'baseui/checkbox';
import { RadioGroup, Radio } from 'baseui/radio';
import { Datepicker } from 'baseui/datepicker';
import { Select } from 'baseui/select';
import { FormField } from './types';

export default function Field({ field, name }) {
  return (
    <FormikConsumer>
      {formikProps => {
        const { errors, touched, values } = formikProps;
        const error = getIn(errors, name);
        const isTouched = !!getIn(touched, name);
        const value = getIn(values, name);
        return (
          <FieldSwitch
            name={name}
            field={field}
            hasError={isTouched && !!error}
            isValid={!error && isTouched}
            value={value}
            {...formikProps}
          />
        );
      }}
    </FormikConsumer>
  );
}


function FieldSwitch({
  name,
  field,
  handleChange,
  setFieldValue,
  setFieldTouched,
  value,
}) {
  const onBlur = () => setFieldTouched(name);

  switch (field.type) {
    case 'text': {
      return (
        <Input
          name={name}
          value={value}
          onChange={(e) => setFieldValue(name, e.target.value)}
          onBlur={onBlur}
          overrides={{
            InputContainer: {
              style: () => {
                return { backgroundColor: 'transparent' };
              },
            },
          }}
        />
      );
    }

    case 'textarea': {
      return (
        <Textarea
          name={name}
          value={value}
          onChange={(e) => setFieldValue(name, e.target.value)}
          onBlur={onBlur}
          overrides={{
            InputContainer: {
              style: () => {
                return { backgroundColor: 'transparent' };
              },
            },
          }}
        />
      );
    }

    case 'integer': {
      return (
        <Input
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          type="number"
          overrides={{
            InputContainer: {
              style: () => {
                return { backgroundColor: 'transparent' };
              },
            },
          }}
        />
      );
    }

    case 'checkbox': {
      const { checkboxLabel } = field;
      return (
        <Checkbox
          checked={value}
          onChange={(e) => setFieldValue(name, e.target.checked)}
          onBlur={onBlur}
        >
          {checkboxLabel}
        </Checkbox>
      );
    }

    case 'radio': {
      const { options } = field;
      return (
        <RadioGroup
          value={value}
          onChange={e => setFieldValue(name, e.target.value)}
          onBlur={onBlur}
        >
          {options.map(option => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </RadioGroup>
      );
    }

    case 'date': {
      return (
        <Datepicker
          value={value}
          onChange={({ date }) => setFieldValue(name, date)}
        />
      );
    }

    case 'select': {
      const { options } = field;
      return (
        <Select
          options={options}
          value={value}
          onChange={params => setFieldValue(name, params.value)}
          onBlur={onBlur}
          overrides={{
            ControlContainer: {
              style: () => {
                return { backgroundColor: 'transparent' };
              },
            },
          }}
        />
      );
    }

    default:
      return null;
  }
}
