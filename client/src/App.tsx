import AppRoutes from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>

      <Toaster position="top-center" />
    </>
  );
}

export default App;
