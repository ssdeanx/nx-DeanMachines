export interface Environment {
  production: boolean;
  apiUrl: string;
  version: string;
  featureFlags: {
    enableNewDashboard: boolean;
    enableAnalytics: boolean;
  };
}

export const environment: Environment = {
  production: process.env.NODE_ENV === 'production',
  apiUrl: process.env.NX_API_URL || 'https://api.example.com',
  version: process.env.NX_APP_VERSION || '0.1.0',
  featureFlags: {
    enableNewDashboard: process.env.NX_ENABLE_NEW_DASHBOARD === 'true',
    enableAnalytics: process.env.NX_ENABLE_ANALYTICS === 'true',
  },
};
