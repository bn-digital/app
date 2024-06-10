import type { Attribute, Schema } from '@strapi/strapi';

export interface DataEntry extends Schema.Component {
  collectionName: 'components_data_entries';
  info: {
    displayName: 'Entry';
    icon: 'clipboard-list';
    description: '';
  };
  attributes: {
    key: Attribute.String;
    value: Attribute.Text & Attribute.Required;
  };
}

export interface DataSet extends Schema.Component {
  collectionName: 'components_data_sets';
  info: {
    displayName: 'Set';
    icon: 'align-justify';
  };
  attributes: {
    value: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'data.entry': DataEntry;
      'data.set': DataSet;
    }
  }
}
