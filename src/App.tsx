import { Routes, Route } from "react-router-dom";
import LayoutContainer from "./components/LayoutContainer/LayoutContainer";
import TopNav from "./components/Navigation/TopNav";
import Navigation from "./components/Navigation/Navigation";
import Feed from "./components/Feed/Feed";
import ActiveVideo from "./components/ActiveVideo/ActiveVideo";
import Login from "./components/Authentication/Login";

function App() {
  return (
    <>
      <TopNav />
      <LayoutContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/:videoId" element={<ActiveVideo />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </LayoutContainer>
    </>
  );
}

export default App;
