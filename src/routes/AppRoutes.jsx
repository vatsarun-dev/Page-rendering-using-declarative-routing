import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../screens/Home";
import Setting from "../screens/Setting";
import Blank from "../screens/Blank";
import Analysit from "../screens/Analysit";
import CalendarPage from "../screens/CalendarPage";
import Chat from "../screens/Chat";
import Clients from "../screens/Clients";
import Crypto from "../screens/Crypto";
import ECommerce from "../screens/ECommerce";
import Invoice from "../screens/Invoice";
import Order from "../screens/Order";
import Page404 from "../screens/Page404";
import Page500 from "../screens/Page500";
import Pricing from "../screens/Pricing";
import Project from "../screens/Project";
import ResetYourPassword from "../screens/ResetYourPassword";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Task from "../screens/Task";
import Profile from "../screens/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Analysit" element={<Analysit />} />
      <Route path="/Blank" element={<Blank />} />
      <Route path="/CalendarPage" element={<CalendarPage />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path="/Clients" element={<Clients />} />
      <Route path="/Crypto" element={<Crypto />} />
      <Route path="/ECommerce" element={<ECommerce />} />
      <Route path="/Invoice" element={<Invoice />} />
      <Route path="/Order" element={<Order />} />
      <Route path="/Page404" element={<Page404 />} />
      <Route path="/Page500" element={<Page500 />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/ResetYourPassword" element={<ResetYourPassword />} />
      <Route path="/Setting" element={<Setting />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Task" element={<Task />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
