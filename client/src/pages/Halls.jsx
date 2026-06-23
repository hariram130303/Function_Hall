import {
  useEffect,
  useState
} from "react";

import api from "../services/api";

export default function Halls() {
  const [halls, setHalls] =
    useState([]);

  useEffect(() => {
    fetchHalls();
  }, []);

  const fetchHalls =
    async () => {
      const res =
        await api.get("/halls");

      setHalls(res.data);
    };

  return (
    <div className="container">
      <h2>
        Available Function Halls
      </h2>

      <div className="grid">
        {halls.map((hall) => (
          <div
            key={hall._id}
            className="card"
          >
            <img
              src={
                hall.image
              }
              alt=""
            />

            <h3>
              {hall.hallName}
            </h3>

            <p>
              {
                hall.description
              }
            </p>

            <p>
              Capacity:
              {hall.capacity}
            </p>

            <p>
              ₹{hall.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}