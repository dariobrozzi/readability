import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'readability-gadget',
  plugins: [
    sass(),
  ],
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ]
};
