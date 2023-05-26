import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <Layout>
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <td>Date</td>
            <td>Status</td>
            <td>Recipient</td>
            <td>Products</td>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map((order) => (
              <tr key={order._id}>
                {/* Date ordered */}
                <td className="text-sm">
                  {new Date(order.createdAt).toLocaleString()}
                </td>

                {/* Payment status */}
                <td className="text-sm">
                  <span
                    className={
                      order.paid
                        ? "bg-green-200 text-green-800 px-2 py-1 rounded-sm"
                        : "bg-red-200 text-red-800 px-2 py-1 rounded-sm"
                    }
                  >
                    {order.paid ? "PAID" : "PENDING"}
                  </span>
                </td>

                {/* Customer information */}
                <td className="text-sm">
                  {order.name} <br />
                  {order.email} <br />
                  {order.streetAddress}, {order.postalCode} <br />
                  {order.city}, {order.country}
                </td>
                <td className="text-sm">
                  {order.line_items.map((l) => (
                    <>
                      {l.quantity} x {l.price_data.product_data.name}
                      <br />
                    </>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
}
