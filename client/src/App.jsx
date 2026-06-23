import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ProtectedRoute from "./admin/ProtectedRoute";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Halls from "./pages/Halls";
import Booking from "./pages/Booking";

import Dashboard from "./admin/Dashboard";
import ManageUsers from "./admin/ManageUsers";
import ManageHalls from "./admin/ManageHalls";
import ManageBookings from "./admin/ManageBookings";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/halls"
          element={<Halls />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/admin"
          element={<Dashboard />}
        />
        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/halls"
  element={
    <ProtectedRoute>
      <ManageHalls />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/bookings"
  element={
    <ProtectedRoute>
      <ManageBookings />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/users"
  element={
    <ProtectedRoute>
      <ManageUsers />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;