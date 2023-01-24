import './styles/App.css';
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from './pages/home';
import Product from './pages/product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

function App() {
  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
