// App.tsx
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Index from "./pages";
import GlobalLayout from "./components/GlobalLayout";
import NavLayout from "./components/NavLayout";
import Iot from "./pages/main/iot";
import Others from "./pages/main/others";
import Profile from "./pages/main/profile";
import HeaderLayout from "./components/headerLayout";
import Crop from "./pages/select/crop";
import CropConfirm from "./pages/select/cropConfirm";
import Bug from "./pages/select/bug";
import BugConfirm from "./pages/select/bugConfirm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Index />} />
        <Route path="login" element={<Login />} />
        <Route path="select" element={<HeaderLayout />}>
          <Route path="crop" element={<Crop />} />
          <Route path="cropConfirm" element={<CropConfirm />} />
          <Route path="bug" element={<Bug />} />
          <Route path="bugConfirm" element={<BugConfirm />} />
        </Route>
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
