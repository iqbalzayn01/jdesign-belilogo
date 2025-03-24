import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Login from '@/pages/login';
import Register from '@/pages/register';
import Homepage from '@/pages/home';
import DetailLogo from '@/pages/detailLogo';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/detail-logo" element={<DetailLogo />} />
    </>
  )
);

export default router;
