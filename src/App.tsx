import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProjectDetails } from "./pages/ProjectDetails/ProjectDetails";
import { SkillDetails } from "./pages/TechDetails/SkillDetails";
import { AppHeader } from "./components/AppHeader/AppHeader";
import "./styles/main.scss";
import { AppFooter } from "./components/AppFooter/AppFooter";
import { CourseDetails } from "./pages/CourseDetails/CourseDetails";

function App() {
  return (
    <main className="app">
      <AppHeader />
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project/:name" element={<ProjectDetails />} />
        <Route path="/skill/:name" element={<SkillDetails />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <AppFooter />
    </main>
  );
}

export default App;
