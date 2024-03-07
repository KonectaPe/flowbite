import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { ProtectedRoute } from "./routes";
import RegisterPage from "./pages/RegisterPage";
import PostsPage from "./pages/PostsPage";
import { PostProvider } from "./context/postsContext";
import PostFormPage from "./pages/PostFormPage";
import Btrabajo from "./nabvar-struct/Btrabajo";
import Productos from "./nabvar-struct/Productos";
import Configuracion from "../src/user-struct/Configuracion";
import Ayuda from "../src/user-struct/Ayuda";

const App = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <main className="h-screen container content-container mx-auto px-10 md:px-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/Btrabajo" element={<Btrabajo />} />
              <Route path="/Productos" element={<Productos />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/Configuracion/*" element={<Configuracion />} />
                <Route path="/Ayuda" element={<Ayuda />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/add-post" element={<PostFormPage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  );
};

export default App;
