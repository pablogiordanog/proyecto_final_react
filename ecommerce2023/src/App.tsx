import "./App.css"
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx"
import Home from './components/Home.jsx';
import Footer from "./components/Footer.jsx"
import About from "./components/About.jsx"
import IndexShop from "./components/shop/IndexShop.jsx"
import IndexStories from "./components/stories/IndexStories.jsx"
import Search from "./components/Search.jsx"

import Login from "./components/Login.jsx"
import Page404 from "./components/Page404.jsx"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/indexshop" element={<IndexShop />} />
          <Route path="/indexstories" element={<IndexStories />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>      
    </div>
  )
}

export default App
