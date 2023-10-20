import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
