import React from 'react';
import { Formik } from 'formik';
import { Button } from 'baseui/button';
import { Block } from 'baseui/block';
import FormikFormControl from './FormikFormControl';
import Field from './Field';
import { FormDataSchema, FormUISchema, FormField } from './types';
import { dataSchema, uiSchema } from './schemas';

function Form({ initialValues, dataSchema, uiSchema, onSubmit }) {
  const { fields: fieldsData } = dataSchema;
  const { sections } = uiSchema;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={values => validateDataSchema({ values, dataSchema })}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ handleSubmit, values, touched }) => {
        return (
          <form onSubmit={handleSubmit}>
            {sections.map(section => {
              const { title, fields } = section;
              return (
                <Block key={title}>
                  {fields.map(fieldName => {
                    const field = fieldsData[fieldName];

                    if (!field) {
                      throw new Error('Wrong field name in ui schema');
                    }

                    if (!areFieldConditionsFulfilled({ values, field })) {
                      return null;
                    }

                    return (
                      <FormikFormControl
                        key={fieldName}
                        name={fieldName}
                        label={field.label}
                        caption={field.caption}
                      >
                        <Field field={field} name={fieldName} />
                      </FormikFormControl>
                    );
                  })}
                </Block>
              );
            })}
            <Button type="submit">Submit</Button>
          </form>
        );
      }}
    </Formik>
  );
}

function validateDataSchema({
  values,
  dataSchema,
}) {
  const { fields } = dataSchema;
  let errors = {};

  Object.keys(fields).forEach(fieldName => {
    const field = fields[fieldName];

    if (!field.required) {
      return;
    }

    if (areFieldConditionsFulfilled({ values, field })) {
      const value = getFieldValue({ name: fieldName, field, values });
      // this check should depend on the field type
      if (value === undefined || values === '' || value === null) {
        errors[fieldName] = `Field "${fieldName}" is required`;
      }
    }
  });

  console.log('errors', errors);
  return errors;
}

const areFieldConditionsFulfilled = ({
  values,
  field,
}) => {
  const { condition } = field;
  if (!condition || condition.rules.length === 0) {
    return true;
  }

  const { rules, operator } = condition;

  let areRulesRespected = true;
  let i = 0;
  while (areRulesRespected && i < rules.length) {
    const { field: fieldName, value } = rules[i];

    const fieldValue = getFieldValue({ name: fieldName, field, values });
    const isRuleRespected = fieldValue === value;

    areRulesRespected =
      operator === 'AND'
        ? areRulesRespected && isRuleRespected
        : areRulesRespected || isRuleRespected;
    i++;
  }
  return areRulesRespected;
};

const getFieldValue = ({
  name,
  field,
  values,
}) => {
  if (values[name] === undefined) {
    return undefined;
  }
  switch (field.type) {
    case 'text':
    case 'textarea':
    case 'integer':
    case 'checkbox':
    case 'radio':
    case 'date':
      return values[name];
    case 'select':
      return values[name].values;
  }
};

export default function ExampleFormFormik() {
  return (
    <Form
      initialValues={{
        name: '',
        email: '',
        dateOfBirth: '',
        favoriteColor: [],
        aboutYourself: '',
        radioGroup: '',
        profileStatus: '',
      }}
      dataSchema={dataSchema}
      uiSchema={uiSchema}
      onSubmit={values => alert(JSON.stringify(values, null, 4))}
    />
  );
}
