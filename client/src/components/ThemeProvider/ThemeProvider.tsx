import { ReactNode, useEffect } from 'react';
import classes from './ThemeProvider.scss';
import './theme.scss';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
// import { setTheme } from '../../redux/reducers/themeReducer';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useTypedSelector(state => state.theme);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setTheme(localStorage.getItem('theme')));
  // }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div data-theme={theme}>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
}
