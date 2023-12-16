import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProjectDetails } from "./pages/ProjectDetails/ProjectDetails";
import { SkillDetails } from "./pages/TechDetails/SkillDetails";
import { AppHeader } from "./components/AppHeader/AppHeader";
import "./styles/main.scss";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <main className="app">
      <AppHeader />
      <Sidebar />
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project/:name" element={<ProjectDetails />} />
        <Route path="/skill/:name" element={<SkillDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
