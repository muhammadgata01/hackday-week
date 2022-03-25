import { Provider } from 'react-redux';
import store from './store';

import RoutesComp from './routes';
import Main from './Layouts/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <RoutesComp />
      </Main>
    </Provider>
  );
};

export default App;
