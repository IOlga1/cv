import { Outlet } from 'react-router-dom';
// import BaseStyleLayout from '../BaseStyleLayout/BaseStyleLayout';
import './Layout.scss';

export default function Layout() {
  return (
    // <BaseStyleLayout>
    <main>
      <Outlet />
    </main>
    // </BaseStyleLayout>
  );
}
