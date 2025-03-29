import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Login from '@/pages/login';
import Register from '@/pages/register';
import Homepage from '@/pages/home';
import DetailLogo from '@/pages/detailLogo';
import DesignerPage from '@/pages/designer';
import Terjual from '@/pages/logoTerjual';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/detaillogo" element={<DetailLogo />} />
      <Route path="/designer" element={<DesignerPage />} />
      <Route path="/terjual" element={<Terjual />} />
    </>
  )
);

export default router;
