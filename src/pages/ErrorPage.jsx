import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-2xl">Oops! The page you're looking for doesn't exist.</p>
      <p className="text-gray-500 italic mt-2">{error?.statusText || error?.message}</p>
    </div>
  );
}

export default ErrorPage;