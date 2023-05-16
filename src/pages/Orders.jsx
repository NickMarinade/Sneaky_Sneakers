import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://645e3b308d08100293fa31ac.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Error by orders request");
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content">
      <div className="contentHeader">
        <h1>My Orders</h1>
      </div>

      <div className="sneakers">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card
            key={index}
            ifLoading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
