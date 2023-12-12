import { useEffect, useState } from "react";
import axios from "axios";

export function UseEffectComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  async function fetchAllUsers() {
    const response = await axios.get(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users"
    );
    setUsers(response.data);
  }

  useEffect(() => {}, []);
  return (
    <div className="border p-2 mt-2 border-black">
      <h2>Lidando com useEffect</h2>
    </div>
  );
}
