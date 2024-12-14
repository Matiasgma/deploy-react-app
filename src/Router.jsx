import { createBrowserRouter } from "react-router-dom";
import App from './App';
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import Layout from "./components/Layout";

// const Router = createBrowserRouter([
//     { path: '/', element: <App /> },
//     { path: '/recetas', element: <RecipeList /> },
//     { path: '/recetas/:nombre', element: <RecipeDetail /> }
// ])

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <App /> },
            { path: '/recetas', element: <RecipeList /> },
            { path: '/recetas/:nombre', element: <RecipeDetail /> }
        ]
    }
])

export default Router;

// EJERCICIO 1
// Agregar las siguientes rutas dentro de createBrowserRouter utilizando las propiedades path y element:
// ruta: '/', nombre del componente: App (no es necesario crearlo, ya existe en tu proyecto)
// ruta: '/recetas', nombre del componente: RecipeList
// ruta: '/recetas/:nombre', nombre del componente: RecipeDetail 