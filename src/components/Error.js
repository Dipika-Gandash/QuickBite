import { useRouteError } from "react-router-dom";

const Error = () => {
     const error = useRouteError();
     return (
          <div className="error">
               <h1>404 - Page Not Found</h1>
               <h2>{error.message} || {error.statusText}</h2>     
          </div>
     )
}

export default Error;