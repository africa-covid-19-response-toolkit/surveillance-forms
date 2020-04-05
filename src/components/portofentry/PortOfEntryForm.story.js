import React from 'react';
import {storiesOf} from '@storybook/react';
import PortOfEntryForm from './PortOfEntryForm';
import Ployglot from 'node-polyglot';
import en from '../../modules/lang/phrases_en';
import am from '../../modules/lang/phrases_am';

const langEn = new Ployglot({ locale: 'en', phrases: en });
const langAm = new Ployglot({ locale: 'am', phrases: am });

const onSubmit = (formValues) => {
  console.log('onSubmit', formValues);
}

storiesOf('Port of Entry Form', module)
  .add('the form - english', () => {
    return (
      <PortOfEntryForm onSubmit={onSubmit} lang={langEn} />
    )
  })
  .add('the form - amharic', () => {
    return (
      <PortOfEntryForm onSubmit={onSubmit} lang={langAm} />
    )
  })
