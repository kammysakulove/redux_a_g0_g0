import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import sanitize from 'styled-sanitize';

import { Todo } from 'components/organisms/todo';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Todo />
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
${sanitize}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`;
