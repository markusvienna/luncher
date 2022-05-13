// these are the default config used in every environment based on test usage
// any key can be overwritten with the spread operator
export const environment = {
  version: require('../../package.json').version,
  production: false,
  useMockService: false,
  apiURL: ''
};
