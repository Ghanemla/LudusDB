import { apiEnv } from './api.env';

export const environment = {
  production: true,
  BASE_URL: 'https://api.rawg.io/api',
  api_key: apiEnv.api_key,
};
