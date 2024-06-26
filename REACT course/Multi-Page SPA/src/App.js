import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  RootLayout
} from 'react-router-dom'

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage />} />
    <Route path='/' element={<ProductsPage />} />
  </Route>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: './products', element: <ProductsPage /> },
      { path: './products/:productId', element: <ProductDetailPage /> }
    ],
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
