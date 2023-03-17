import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useDarkMode } from 'usehooks-ts';

import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import routes from './routes';

import GlobalStyle from './styles/GlobalStyle';
import darkTheme from './styles/darkTheme';
import defaultTheme from './styles/defaultTheme';

const router = createBrowserRouter(routes);

export default function App() {
  // const { isDarkMode, toggle: toggleDarkMode } = useDarkMode();

  // const theme = isDarkMode ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
