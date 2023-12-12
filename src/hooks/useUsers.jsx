import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function useUsers() {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  function handleUser(e) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function createUser() {
    await axios.post(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users",
      user
    );
    await fetchUsers();
  }

  function clearFields() {
    user.name = "";
    user.lastName = "";
  }

  async function fetchUsers() {
    const response = await axios.get(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users"
    );
    setUsers(response.data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (user.name.length > 2 && user.lastName.length > 2) {
      createUser();
      toast.success("Usuário criado com sucesso!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }
    clearFields();
    fetchAllUsers();
  }

  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await axios.get(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users"
    );
    setUsers(response.data);
  }

  async function deleteUsers(id) {
    await axios.delete(
      `https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users/${id}`
    );
    await fetchUsers();
    toast.success("Usuário deleteado com sucesso!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, user, handleUser, handleSubmit, deleteUsers };
}
