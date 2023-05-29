import MyNavbar from "./components/MyNavbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Todo from "./pages/Todo";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App" role="main">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
