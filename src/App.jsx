import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";

const App = () => {
  let element = useRoutes(routes);

  return element;
};
export default App;
