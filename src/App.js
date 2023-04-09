import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";

import AuthorPage from "./components/Author/AuthorPage";
import BlogPage from "./components/Blog/BlogPage";
import HomePage from "./components/Home/HomePage";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
