import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const Formulario = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const capturarNombre = (e) => setName(e.target.value);
  const capturarCorreo = (e) => setEmail(e.target.value);

  const guardarColaborador = (e) => {
    e.preventDefault();
    if ([name, email].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    const nuevoColaborador = {
      id: Date.now(),
      nombre: name,
      email: email,
    };
    props.guardarUser(nuevoColaborador);
    setName("");
    setEmail("");
  };

  return (
    <>
      {error && <p>Todos los campos son obligatorios</p>}
      <Form onSubmit={guardarColaborador}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de colaborador</Form.Label>
          <Form.Control
            type="text"
            value={name}
            placeholder="Ingresa el nombre"
            onChange={capturarNombre}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa el correo electronico"
            value={email}
            onChange={capturarCorreo}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar Colaborador
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
