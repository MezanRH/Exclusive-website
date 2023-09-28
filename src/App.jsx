
import Home from "./components/home/Home"

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/rootLayout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
      path="/"
      element={<RootLayout/>}
      >
        <Route
        path="/"
        element={<Home/>}
        ></Route>
      </Route>
    </Route>
  )
);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
