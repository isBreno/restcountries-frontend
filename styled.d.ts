import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    inputColor: string;
    background: string;
    elements: string;
    text: string;
    font: {
      font_family: string;
      text_light: number;
      text_medium: number;
      text_title: number;
    };
  }
}

