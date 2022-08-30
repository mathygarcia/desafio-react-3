import Buscador from "./components/header";
import Formulario from "./components/Formulario";
import TablaColaboradores from "./components/TablaColaboradores"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from "./BaseColaboradores.js";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState(BaseColaboradores);
  const [query, setQuery] = useState("");

  const capturarBusqueda = (e) => {
    setQuery(e.target.value)
    console.log(query);
  };

  /* const search = (data) => {
    return data.filter(
      (item) =>
        item.nombre.toLowerCase().includes(query)  ||
        item.email.toLowerCase().includes(query));
  } */

  const guardarUser = (user) => {
    setUsers([...users, user])
  }

  return (
    <>
      <Buscador
        capturarBusqueda={capturarBusqueda}
      />
      <Formulario
        guardarUser={guardarUser}
      />
      <TablaColaboradores
        /* data={search(users)}
        query={query} */
        users={users}
        query={query}
      />
    </>
  );
}

export default App;
