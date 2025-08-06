import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/router";

function App() {
  return (
    <div className="bg-black min-h-screen font-sans">
       <RouterProvider router={Router} />
    </div>
  );
}

export default App;
