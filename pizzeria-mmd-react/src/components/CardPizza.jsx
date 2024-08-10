import FormatoMiles from './FormatoMiles';
import iconPizza from '../../public/icon-pizza.png'
import { Card, Button, ListGroup } from 'react-bootstrap';

const CardPizza = (props) => {
  return (
    <Card className='tamanio-cards'>
      <Card.Img variant="top" src={props.imagen} alt={props.nombre}/>
      <Card.Body className="p-0">
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <Card.Title className='text-start'>Pizza {props.nombre}</Card.Title>
                </ListGroup.Item>
                <ListGroup.Item className='text-center'>
                    <p>Ingredientes:</p>
                    <p className='tamanio-ingredientes'><img src={iconPizza} alt="iconoPizza"></img>{props.ingredientes.join(', ')}</p>
                </ListGroup.Item>
                <ListGroup.Item className='text-center'>
                    <strong>Precio: $<FormatoMiles numero = {props.precio} /></strong>
                    <div className="d-flex justify-content-between pt-1 pb-1">
                        <Button variant="outline-dark" size="sm">Ver Más 👀</Button>
                        <Button variant="dark" size="sm">Añadir 🛒</Button>
                    </div>
                </ListGroup.Item>
            </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;

