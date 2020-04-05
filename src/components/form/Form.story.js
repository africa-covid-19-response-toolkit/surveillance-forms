import React from 'react';
import {storiesOf} from '@storybook/react';
import {
  renderField
} from './form-util';
import { isEmpty } from 'lodash';

const onTextFieldChange = newValue => console.log('text field changed:', newValue);
const onSubmit = value => console.log('submit', value)

const textField = {
  type: 'text',
  label: 'First Name',
  property: 'firstName',
  onChange: onTextFieldChange
};

const selectField = {
  type: 'select',
  label: 'Count',
  property: 'count',
  onChange: onTextFieldChange,
  choices: [
    { label: 'Ten', value: '10' },
    { label: 'Tewnty', value: '20' },
    { label: 'Thiry', value: '30' },
  ]
};

const switchField = {
  type: 'switch',
  label: 'Question',
  onLabel: 'On',
  offLabel: 'Off',
  onChange: onTextFieldChange,
};

const checkboxField = {
  type: 'check',
  label: 'Fever',
  onChange: onTextFieldChange,
}

storiesOf('Form', module)
  .add('text - empty', () => {
    return renderField(textField);
  })
  .add('text - focused', () => {
    return renderField({ ...textField, focus: true });
  })
  .add('text - populated', () => {
    return renderField({ ...textField, value: 'Maya' });
  })
  .add('text - disabled', () => {
    return renderField({ ...textField, disabled: true });
  })
  .add('text - validation', () => {
    return renderField({
      ...textField,
      onValidate: (val) => {
        return !isEmpty(val) && val.length >= 3;
      },
      validationErrorMsg : 'Name has to be atleast three characters long.'
    });
  })
  .add('text - amharic field', () => {

    return renderField({
      ...textField,
      label: 'ስም',
      onValidate: (val) => {
        return !isEmpty(val) && val.length >= 3;
      },
      validationErrorMsg : 'ስም ይሙሉ'
    });
  })
  .add('select', () => {
    return renderField(selectField);
  })
  .add('switch - simple', () => {
    return renderField(switchField);
  })
  .add('switch - with value ', () => {
    return renderField({ ...switchField, value: true });
  })
  .add('check - simple', () => {
    return renderField(checkboxField);
  })
  .add('check - with value ', () => {
    return renderField({ ...checkboxField, value: true });
  })
