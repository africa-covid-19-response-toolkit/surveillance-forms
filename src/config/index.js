// Import all environment config files here
import local from './local';
import dev from './dev';

// Map to environment name
const envToConfig = {
  'local': local,
};

const env = process.env.REACT_APP_BUILD_ENV; // eslint-disable-line no-undef
const envName = env ? env : 'local';
const envConfig = envToConfig[envName];

const config = {
  ...envConfig,
  isLocal: env === 'local',
  isDev: env === 'dev',
  isProd: env === 'prod',
};

export default config;
