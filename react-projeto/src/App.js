import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Planilha from "./pages/Planilha";

function App() {
  return (
    <Router future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route exact path="/planilha" element={<Planilha/>}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
