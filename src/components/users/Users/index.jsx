import { ToastContainer } from "react-toastify";
import { useUsers } from "../../../hooks/useUsers";
import { UserTable } from "../../pages/users/Table";
import Form from "../../pages/users/form";

export default function UsersPage() {
  const { users, user, handleUser, handleSubmit, deleteUsers } = useUsers();
  return (
    <>
      <h1>
        Pagina do Usuário
        <Form handleSubmit={handleSubmit} handleUser={handleUser} user={user} />
        <UserTable deleteUsers={deleteUsers} users={users} />
      </h1>
    </>
  );
}
