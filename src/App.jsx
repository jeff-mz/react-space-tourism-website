import { Route, Routes } from "react-router";
import Crew from "./components/Crew.jsx";
import Destination from "./components/Destination.jsx";
import Homepage from "./components/Homepage.jsx";
import Technology from "./components/Technology.jsx";
const App = () => {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<Crew />} path="/crew" />
      <Route element={<Technology />} path="/technology" />
      <Route element={<Destination />} path="/destination" />
    </Routes>
  );
};

export default App;
