import { useState } from "react";
import api from "../services/api";

export default function Booking() {
  const [hall, setHall] =
    useState("");

  const [eventDate,
    setEventDate] =
    useState("");

  const [guests,
    setGuests] =
    useState("");

  const bookHall =
    async (e) => {
      e.preventDefault();

      const token =
        localStorage.getItem(
          "token"
        );

      await api.post(
        "/bookings",
        {
          hall,
          eventDate,
          guests
        },
        {
          headers: {
            Authorization:
              token
          }
        }
      );

      alert(
        "Booking Submitted"
      );
    };

  return (
    <div className="form">
      <h2>
        Book Function Hall
      </h2>

      <form
        onSubmit={bookHall}
      >
        <input
          placeholder="Hall ID"
          onChange={(e) =>
            setHall(
              e.target.value
            )
          }
        />

        <input
          type="date"
          onChange={(e) =>
            setEventDate(
              e.target.value
            )
          }
        />

        <input
          placeholder="Guests"
          onChange={(e) =>
            setGuests(
              e.target.value
            )
          }
        />

        <button>
          Book Now
        </button>
      </form>
    </div>
  );
}