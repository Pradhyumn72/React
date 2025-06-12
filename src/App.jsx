import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Display from "./pages/Display";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Insert from "./pages/insert";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="insert" element={<Insert />} />
        <Route path="display" element={<Display />} />
        <Route path="update" element={<Update />} />

      </Route>
    </Routes>
  );
};

export default App;
