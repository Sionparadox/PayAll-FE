import type { Preview } from '@storybook/react';
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#222222',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    textColor: '#FFFFFF',
  },
};

export default preview;
