import React from 'react';

// Import from Routes file
import RoutesComp from './routes';

// Import from Layout folder
import Main from './Layouts/Main';

const App = () => {
  return (
    <Main>
      <RoutesComp />
    </Main>
  );
};

export default App;
