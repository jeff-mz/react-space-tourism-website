import { Route, Routes } from "react-router";
import Crew from "./components/Crew";
import Destination from "./components/destination";
import Homepage from "./components/Homepage";
import Technology from "./components/Technology";
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
