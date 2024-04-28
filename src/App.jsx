import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/signup",
    element: <Login/>,
  },
  {
    path: "*",
    element: <ErrorPage/>,
  },
  
]);


function App() {
  const currentPath = window.location.pathname;

  return (
    <>
    {(currentPath !== '/signup') && (
        <div>
          <Navbar />
        </div>
      )}
     {/* <Navbar/> */}
      <div className="flex-grow">
        <RouterProvider router={router} />
      </div>
      {(currentPath !== '/signup') && (
        <div>
          <Footer/>
        </div>
      )}
    </>
  )
}

export default App
