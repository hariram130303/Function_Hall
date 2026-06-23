import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis
} from "recharts";

import AdminLayout from "./AdminLayout";

export default function Dashboard() {
  const pieData = [
    {
      name: "Bookings",
      value: 120
    },
    {
      name: "Revenue",
      value: 80
    }
  ];

  const monthlyData = [
    {
      month: "Jan",
      bookings: 20
    },
    {
      month: "Feb",
      bookings: 35
    },
    {
      month: "Mar",
      bookings: 50
    },
    {
      month: "Apr",
      bookings: 45
    }
  ];

  return (
    <AdminLayout>
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card-box">
          <h3>
            Total Bookings
          </h3>

          <h2>120</h2>
        </div>

        <div className="card-box">
          <h3>
            Revenue
          </h3>

          <h2>
            ₹12,50,000
          </h2>
        </div>

        <div className="card-box">
          <h3>
            Users
          </h3>

          <h2>350</h2>
        </div>
      </div>

      <div className="charts">
        <PieChart
          width={300}
          height={300}
        >
          <Pie
            data={pieData}
            dataKey="value"
            outerRadius={100}
          >
            <Cell />
            <Cell />
          </Pie>

          <Tooltip />
        </PieChart>

        <BarChart
          width={500}
          height={300}
          data={monthlyData}
        >
          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="bookings" />
        </BarChart>
      </div>
    </AdminLayout>
  );
}