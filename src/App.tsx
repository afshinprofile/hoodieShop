import { RouterProvider } from "react-router-dom";
import router from "./routes";
import ReactQueryProvider from "./providers/ReactQueryProvider";

function App() {
  return (
    <>
      <ReactQueryProvider>
        <RouterProvider router={router} />
      </ReactQueryProvider>
    </>
  );
}

export default App;
