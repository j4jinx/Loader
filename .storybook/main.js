export default {
  stories: ['./*.stories.jsx'],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  docs: {
    autodocs: true
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
};