import { Provider } from 'react-redux';
import classes from './App.scss';
import { store } from '../../redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <div className={classes.check}>HELLO</div>
    </Provider>
  );
}
