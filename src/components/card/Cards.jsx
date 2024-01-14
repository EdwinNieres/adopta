import { Card, Button, Badge } from "react-bootstrap";
export const Cards = ({ url, nombre, descripcion, etiqueta }) => {
  return (
    <Card>
      <img src={url} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <Button>{etiqueta}</Button>
    </Card>
  );
};
