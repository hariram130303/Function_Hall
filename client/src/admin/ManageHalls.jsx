import {
  useEffect,
  useState
} from "react";

import api from "../services/api";
import AdminLayout from "./AdminLayout";

export default function ManageHalls() {
  const [halls, setHalls] =
    useState([]);

  const [hallName,
    setHallName] =
    useState("");

  useEffect(() => {
    fetchHalls();
  }, []);

  const fetchHalls =
    async () => {
      const res =
        await api.get("/halls");

      setHalls(res.data);
    };

  const addHall =
    async () => {
      await api.post("/halls", {
        hallName
      });

      fetchHalls();
    };

  return (
    <AdminLayout>
      <h1>Manage Halls</h1>

      <input
        placeholder="Hall Name"
        value={hallName}
        onChange={(e) =>
          setHallName(
            e.target.value
          )
        }
      />

      <button
        onClick={addHall}
      >
        Add Hall
      </button>

      {halls.map((hall) => (
        <div key={hall._id}>
          {hall.hallName}
        </div>
      ))}
    </AdminLayout>
  );
}