import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Accueil from "./pages/Home";
import Contacts from "./pages/contact";
import Projets from './pages/projets'
import NotFound from './pages/NotFound'
import Detail from './pages/Detail'



function App() {
  
   const Router = createBrowserRouter([

    //  nos routes
    { element : <Layout/> ,
      children: [
            { path:"/" , element: <Accueil/> },
            { path:"/contact" , element: <Contacts/> },
            { path:"/projets" , element: <Projets/> },
            { path:"/projet/:id" , element: <Detail/> },
      ]
    },
    { path:"*" , element: <NotFound/> },
   

   ])

   
  return (
     <RouterProvider  router={Router} />
  )
}

export default App