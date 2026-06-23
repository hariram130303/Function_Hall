import {
  useEffect,
  useState
} from "react";

import api from "../services/api";
import AdminLayout from "./AdminLayout";

export default function ManageBookings() {
  const [bookings,
    setBookings] =
    useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings =
    async () => {
      const token =
        localStorage.getItem(
          "token"
        );

      const res =
        await api.get(
          "/bookings",
          {
            headers: {
              Authorization:
                token
            }
          }
        );

      setBookings(res.data);
    };

  return (
    <AdminLayout>
      <h1>
        Manage Bookings
      </h1>

      <table>
        <thead>
          <tr>
            <th>User</th>

            <th>Guests</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map(
            (booking) => (
              <tr
                key={
                  booking._id
                }
              >
                <td>
                  {
                    booking.user
                      ?.name
                  }
                </td>

                <td>
                  {
                    booking.guests
                  }
                </td>

                <td>
                  {
                    booking.status
                  }
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
}