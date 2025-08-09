import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './Components/AddCoffe.jsx';
import UpdateCoffe from './Components/UpdateCoffe.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import LayOut from './Components/LayOut.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './Components/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('http://localhost:5000/coffee'),
      },
      {
        path: "addCoffe",
        element: <AddCoffe></AddCoffe>
      },
      {
        path: "updateCoffe/:id",
        element: <UpdateCoffe></UpdateCoffe>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "signin",
        element: <SignIn></SignIn>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path:"users",
        element:<Users></Users>,
        loader:()=>fetch('http://localhost:5000/users')
      }
    ]
  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
