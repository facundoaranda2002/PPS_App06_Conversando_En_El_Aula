import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app6.chat',
  appName: 'ppsapp06',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchFadeOutDuration: 1000,
      launchShowDuration : 1000,
      splashFullScreen: true,
    }
  }
};

export default config;
