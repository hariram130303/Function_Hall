import AdminLayout from "./AdminLayout";

export default function ManageUsers() {
  return (
    <AdminLayout>
      <h1>
        Manage Users
      </h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>

            <th>Email</th>

            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John</td>

            <td>
              john@gmail.com
            </td>

            <td>User</td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
}