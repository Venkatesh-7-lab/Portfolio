import { Navigate, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Projects ,Skills,Education} from "./pages";
import { Layout } from "./components/layout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/skills"
        element={
          <Layout>
            <Skills/>
          </Layout>
        }
      />
      <Route
        path="/education"
        element={
          <Layout>
           <Education/>
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
