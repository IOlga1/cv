import { Outlet } from 'react-router-dom';
import ThemeProvider from '../ThemeProvider/ThemeProvider';
import './Layout.scss';

export default function Layout() {
  return (
    <ThemeProvider>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
