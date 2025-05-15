import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Error from "./components/Error"

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
        path: "/",
        element : <AppLayout />,
        children : [
            {
                index : true,
                element : <Body />
            },
            {
                path : "about",
                element : <h1>About Us</h1>
            },
            {
                path : "contact",
                element : <h1>Contact Us</h1>
            },
            {
                path : "menu",
                element : <h1> Menu Section</h1>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
