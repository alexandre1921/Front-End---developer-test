import AppProvider from 'hooks';
import { FC } from 'react';

const App: FC = () => {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </AppProvider>
  );
};

export default App;
