import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Library from './pages/library';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/library',
    element: <Library />,
  },
]); 

export default router;
