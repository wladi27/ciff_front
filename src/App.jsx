import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";
// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
// Pages admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import Chat from "./pages/admin/Chat";
import Error404 from "./pages/Error404";
import Tickets from "./pages/admin/Tickets";
import AddPais from "./pages/admin/AddPais";
import AsisenciaList from "./pages/admin/AsisenciaList";
import AddEmpleados from "./pages/admin/AddEmpleados";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/olvide-password" element={<ForgetPassword />} />
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="addpais" element={<AddPais />} />
          <Route path="asistencialist" element={<AsisenciaList />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="add-empleados" element={<AddEmpleados />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
