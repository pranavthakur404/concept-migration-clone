import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Suspense } from "react";

import PreLoading from "./components/global/PreLoading";

const RootLayout = React.lazy(() => import("./rootLayout/RootLayout"));
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const About = React.lazy(() => import("./pages/About"));
const Approvals = React.lazy(() => import("./pages/Approvals"));
const Canada = React.lazy(() => import("./pages/services/Canada"));
const Uk = React.lazy(() => import("./pages/services/Uk"));
const Contact = React.lazy(() => import("./pages/Contact"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<PreLoading />}>
          <RootLayout />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={<PreLoading />}>
            <Home></Home>
          </Suspense>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <Suspense fallback={<PreLoading />}>
            <Login></Login>
          </Suspense>
        }
      ></Route>
      <Route
        path="/about"
        element={
          <Suspense fallback={<PreLoading />}>
            <About></About>
          </Suspense>
        }
      ></Route>
      <Route
        path="/approvals"
        element={
          <Suspense fallback={<PreLoading />}>
            <Approvals></Approvals>
          </Suspense>
        }
      ></Route>
      <Route
        path="/service/canada"
        element={
          <Suspense fallback={<PreLoading />}>
            <Canada></Canada>
          </Suspense>
        }
      ></Route>
      <Route
        path="/service/uk"
        element={
          <Suspense fallback={<PreLoading />}>
            <Uk></Uk>
          </Suspense>
        }
      ></Route>
      <Route
        path="/contact-us"
        element={
          <Suspense fallback={<PreLoading />}>
            <Contact></Contact>
          </Suspense>
        }
      ></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
