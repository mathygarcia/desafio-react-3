import Table from "react-bootstrap/Table";
/* -------------------------{data} */
const TablaColaboradores = (props) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Correo electronico</th>
        </tr>
      </thead>
      {/* <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody> */}
      <tbody>
        {props.users
          .filter((user) => user.nombre.toLowerCase().includes(props.query))
          .map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default TablaColaboradores;
