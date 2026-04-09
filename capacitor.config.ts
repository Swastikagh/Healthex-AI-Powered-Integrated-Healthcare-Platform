import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.caresync.app',
  appName: 'CareSync',
  webDir: 'dist',
  server: {
    cleartext: true,
  },
};

export default config;