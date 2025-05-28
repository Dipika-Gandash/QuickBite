import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Error from "./components/error"
import RestaurantMenu from "./components/RestaurantMenu";
import '../style.css';

const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                index : true,
                element : <Body />
            },
            {
                path : "about",
                element : (
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <About />
                    </Suspense>
                )
            },
            {
                path : "contact",
                element : (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Contact />
                    </Suspense>
                )
            },
            {
                path : "menu",
                element : <Menu />
            },
            {
                path : "restaurant/:resId",
                element : <RestaurantMenu />
            }
        ],
        errorElement : <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);