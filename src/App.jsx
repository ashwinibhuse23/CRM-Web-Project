import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes";
import Layout from "./components/layout/Layout";


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RoutesConfig />
      </Layout>
    </BrowserRouter>
  );
}
