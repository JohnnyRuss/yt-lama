import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LayoutContainer from "./components/LayoutContainer/LayoutContainer";
import TopNav from "./components/Navigation/TopNav";
import Navigation from "./components/Navigation/Navigation";
import Spinner from "./components/Layouts/Spinner/Spinner";

const HomePage = lazy(() => import("./Pages/HomePage"));
const ActiveVideoPage = lazy(() => import("./Pages/ActiveVideoPage"));
const AuthPage = lazy(() => import("./Pages/AuthPage"));
const ExplorePage = lazy(() => import("./Pages/ExplorePage"));
const SubscribtionsPage = lazy(() => import("./Pages/SubscribtionsPage"));
const BookmarksPage = lazy(() => import("./Pages/BookmarksPage"));
const ProfilePage = lazy(() => import("./Pages/ProfilePage"));
const SearchPage = lazy(() => import("./Pages/SearchPage"));

function App() {
  return (
    <>
      <TopNav />
      <LayoutContainer>
        <Navigation />
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route index element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/subscribtions" element={<SubscribtionsPage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/:videoId" element={<ActiveVideoPage />} />
            <Route path="/auth/login" element={<AuthPage />} />
          </Routes>
        </Suspense>
      </LayoutContainer>
    </>
  );
}

export default App;
