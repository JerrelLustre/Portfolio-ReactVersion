// Routing
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// Pages
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import MissingPage from "./pages/404";
// Projects
import WinterCityLights from "./pages/projects/WinterCityLights";
import Patchwork from "./pages/projects/Patchwork";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="About" element={<About />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="Projects/WinterCityLights" element={<WinterCityLights />} />
      <Route path="Projects/Patchwork" element={<Patchwork />} />
      <Route path="*" element={<MissingPage />} />
    </Route>
  )
);

export default function App() {
  return (
      <RouterProvider router={router} />
  );
}
