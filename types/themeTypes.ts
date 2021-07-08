import 'styled-components';

interface media {
  phone: string;
  tablet: string;
  desktop: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryBg: string;
    secondaryBg: string;
    secondaryBgLighter: string;
    secondaryBgLightest: string;
    primaryGolden: string;
    primaryWhite: string;
    primaryRed: string;
    darkGray: string;
    lightGray: string;
    lightestGray: string;
    maxWidth: string;
    media: media;
  }
}