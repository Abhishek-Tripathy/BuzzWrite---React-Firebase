import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AllBlogs from "./pages/AllBlogs";
import BlogInfo from "./pages/BlogInfo";
import Nopage from "./pages/Nopage";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import CreateBlog from "./admin/createBlog";
import { Toaster } from "react-hot-toast";
import MyState from "./context/myState";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
        <Toaster/>
      </Router>
    </MyState>
  )
}

export default App
