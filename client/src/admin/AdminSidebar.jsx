import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="sidebar">
      <h2>Admin Panel</h2>

      <Link to="/admin">
        Dashboard
      </Link>

      <Link to="/admin/halls">
        Manage Halls
      </Link>

      <Link to="/admin/bookings">
        Bookings
      </Link>

      <Link to="/admin/users">
        Users
      </Link>
    </aside>
  );
}