// this is the only place where you can use global css (in src/components/css) UNLESS YOU ARE USING CSS MODULES
// import "../src/components/styles.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Nav from "../src/components/nav";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
