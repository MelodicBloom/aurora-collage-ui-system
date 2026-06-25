import { createBrowserRouter } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import CollectionScreen from '../screens/CollectionScreen';
import JournalScreen from '../screens/JournalScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import TypographyScreen from '../screens/TypographyScreen';
import DesignSystemScreen from '../screens/DesignSystemScreen';

export const routes = createBrowserRouter([
  { path: '/', element: <HomeScreen /> },
  { path: '/collection', element: <CollectionScreen /> },
  { path: '/journal', element: <JournalScreen /> },
  { path: '/product', element: <ProductScreen /> },
  { path: '/cart', element: <CartScreen /> },
  { path: '/typography', element: <TypographyScreen /> },
  { path: '/design-system', element: <DesignSystemScreen /> },
]);
