import { createBrowserRouter, RouterProvider} from "react-router-dom";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from './components/GalleryNavigation';

const router = createBrowserRouter([
  {
    path: "*",
    element: <h2>Page Not Found</h2>
  },
  {
    path: "galleries",
    element: <GalleryNavigation />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
