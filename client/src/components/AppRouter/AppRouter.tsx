import HomePage from '../pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';

export enum Path {
  HomePage = '/'
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path={Path.HomePage} element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
