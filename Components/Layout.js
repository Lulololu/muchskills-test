import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import GlobalStyles from "../styles/GlobalStyles";
import appTheme from "../styles/appTheme";
import Header from "./Header";
import Tabs from "./Tabs";

// Persistent Layout
const Layout = ({ children }) => (
  <EmotionThemeProvider theme={appTheme}>
    <GlobalStyles />
    <Header />
    <Tabs/>
    {children}
  </EmotionThemeProvider>
);

export default Layout;
