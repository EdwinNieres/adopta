import { Card, Button, Badge } from "react-bootstrap";
export const Tags = ({ etiqueta }) => {
  return (
    <Card>
      <Button>{etiqueta}</Button>
    </Card>
  );
};
