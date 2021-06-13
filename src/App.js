import './App.css';
import Home from './components/home/index';
import store from './redux/Store/Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
