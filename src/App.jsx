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

const App = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
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
