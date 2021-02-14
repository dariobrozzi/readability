import {Config} from '@stencil/core';
import {sass} from '@stencil/sass';


export const config: Config = {
  namespace: 'readability',
  bundles: [{components: ['readability-nav', 'readability-nav-toggle', 'readability-nav-option']}],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass(),
  ],
};
