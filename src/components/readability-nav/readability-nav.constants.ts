export const READABILITY_SETTINGS = [
  {
    label: 'Theme',
    options: [
      {
        label: 'Light',
        description: 'Light Theme',
        selected: true,
      },
      {
        label: 'Dark',
        description: 'Dark Theme',
        className: 'dark-theme',
      },
    ],
  },
  {
    label: 'Column Width',
    options: [
      {
        label: 'Adaptive',
        description: 'Adaptive width',
        selected: true,
      },
      {
        label: 'Narrow',
        description: 'Narrow width',
        className: 'narrow-width',
      },
    ],
  },
  {
    label: 'Font Type',
    options: [
      {
        label: 'Serif',
        description: 'Serif font type',
        selected: true,
      },
      {
        label: 'Sans-Serif',
        description: 'Sans-Serif font type',
        className: 'font-plain',
      },
    ],
  },
  {
    label: 'Font Size',
    options: [
      {
        label: 'Small',
        description: 'Small font size',
        className: 'font-small',
      },
      {
        label: 'Medium',
        description: 'Medium font size',
        selected: true,
      },
      {
        label: 'Large',
        description: 'Large font size',
        className: 'font-large',
      },
    ],
  },
  {
    label: 'Vertical spacing',
    options: [
      {
        label: 'Default',
        description: 'Default spacing',
        selected: true,
      },
      {
        label: 'Double',
        description: 'Double spacing',
        className: 'double-space',
      },
    ],
  },
];
