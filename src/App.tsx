// App.tsx
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Index from "./pages";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
