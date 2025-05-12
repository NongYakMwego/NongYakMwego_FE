// App.tsx
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Index from "./pages";
import GlobalLayout from "./components/GlobalLayout";
import NavLayout from "./components/NavLayout";
import Iot from "./pages/main/iot";
import Others from "./pages/main/others";
import Profile from "./pages/main/profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Index />} />
        <Route path="login" element={<Login />} />

        <Route path="main" element={<NavLayout />}>
          <Route path="index" element={<Index />} />
          <Route path="iot" element={<Iot />} />
          <Route path="others" element={<Others />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
