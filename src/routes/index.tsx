import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Login from '@/pages/login';
import Homepage from '@/pages/home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </>
  )
);

export default router;
