import type { Schema, Struct } from '@strapi/strapi';

export interface AddComponentKeyFeatures extends Struct.ComponentSchema {
  collectionName: 'components_add_component_key_features';
  info: {
    displayName: 'key_features';
  };
  attributes: {};
}

export interface AddComponentUseCases extends Struct.ComponentSchema {
  collectionName: 'components_add_component_use_cases';
  info: {
    displayName: 'use_cases';
    icon: 'bell';
  };
  attributes: {
    sub_title: Schema.Attribute.Component<'component.sub-title', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentSubTitle extends Struct.ComponentSchema {
  collectionName: 'components_component_sub_titles';
  info: {
    displayName: 'subTitle';
  };
  attributes: {
    sub1: Schema.Attribute.String;
    sub2: Schema.Attribute.String;
    sub3: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'add-component.key-features': AddComponentKeyFeatures;
      'add-component.use-cases': AddComponentUseCases;
      'component.sub-title': ComponentSubTitle;
    }
  }
}
