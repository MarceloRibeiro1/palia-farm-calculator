/* eslint-disable @typescript-eslint/consistent-type-imports */

import resources from './i18nextResources';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources;
    returnNull: false;
  }
}
