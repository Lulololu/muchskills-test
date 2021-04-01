import { css, Global } from "@emotion/react";

// Emotion Global Styles
// Next.js authorizes Materialize.css (Global CSS) to be imported ONLY from _app.js
const GlobalStyles = () => (
  <Global
    // CSS Format
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      /* Text Selection */
      ::selection {
        color: var(--secondary-lightest2);
        background-color: var(--primary-main);
      }

      html {
        box-sizing: border-box;
        height: 100%;
        font-size: 16px; /* Fixed Default Font Size - Because Relative Value (rm / %) would break 
          the layout if User changed Default Font Size in navigator. So layout will
          stay the same, if User changes Default Font Size. But Zoom is still
          possible, because of REM unit use through the App */
      }

      body {
        min-width: 320px;
        height: 100%;
        font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol";
        background-color: var(--grey-1);

        /* Colors Scheme */
        --black: #000;
        --white: #fff;
        --blue: #cfe5ff;
        --blue-2: #8fb8e9;
        --grey-1: #f2f2f2;
        --grey-2: #666;
        --grey-3: #e0e0e0;
        --green-1: #375e50;
        --green-2: #b7fee4;
        --color-6: #efbdeb;
      }

      #__next {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-width: 300px;
        min-height: 100%;
      }

      @font-face {
        font-family: "Lato";
        src: url("./fonts/Lato-Regular.ttf");
      }
      @font-face {
        font-family: "Lato-Thin";
        src: url("./fonts/Lato-Thin.ttf");
      }
    `}
  />
);

export default GlobalStyles;
