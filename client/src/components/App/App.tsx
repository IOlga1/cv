import De from '../De/De';
import { Provider } from 'react-redux';
import { store } from '../../redux';
import classes from './App.scss';

export default function App() {
  return (
    <Provider store={store}>
      <div className={classes.check}>HELLO</div>
      <De />
    </Provider>
  );
}
