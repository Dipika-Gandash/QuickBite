import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
     <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<h1>This is about section</h1>} />
          <Route path="/menu" element={<h1>This is menu section </h1>} />
          <Route path="/contact" element={<h1>This is contact section</h1>} />
          <Route path="*" element={<h1>404 - Not Found</h1>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
