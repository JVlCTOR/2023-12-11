import 'boxicons'
// import { useUsersTable } from './hooks/useTable';


export function UserTable({users, deleteUsers}) {
    // const {deleteUsers, users } = useUsersTable()
   return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td onClick={() => deleteUsers(user.id)}><box-icon type='solid' name='trash-alt'></box-icon></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
