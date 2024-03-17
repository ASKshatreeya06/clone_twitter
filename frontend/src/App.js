import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./forms/login";
import Signup from "./forms/signup";
import Sidebar from "./components/sidebar";
import Post from "./components/post";
import { useState } from "react";
import Profile from "./components/profile";


function App() {
  const [postModelOpen, setPostModelOpen] = useState(false);

    const openPostModel = () => {
        setPostModelOpen(true);
    };
  return (

    <BrowserRouter>
     <Sidebar openPostModel={openPostModel}/>
     <Post postModelOpen={postModelOpen} setPostModelOpen={setPostModelOpen}/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //  
    // </div>
  );
}

export default App;
