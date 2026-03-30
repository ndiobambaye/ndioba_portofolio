import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Accueil from './pages/Accueil'
import Contact from './pages/Contact'
import Projets from './pages/Projets'
import Detail from './pages/Detail'



function App() {
  
   const Router = createBrowserRouter([

    //  nos routes
    { element : <Layout/> ,
      children: [
            { path:"/" , element: <Accueil/> },
            { path: "/contact", element: <Contact /> },
            { path:"/projets" , element: <Projets/> },
            { path:"/projet/:id" , element: <Detail/> },
      ]
    },
   
   

   ])

   
  return (
     <RouterProvider  router={Router} />
  )
}

export default App
