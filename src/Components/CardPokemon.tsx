import { Card, Col } from 'react-bootstrap'
import '../Css/CardPokemon.css'

interface Props {
    Name: string,
    Image: string,
    Id: string,
    Types: string
}

export default function CardPokemon({Name, Image, Id, Types}: Props) {
  return (
    <>
        <Col lg='2' md='4' sm='6' xs='12'>
        <Card className="CardPokemonData">
        <Card.Text className="bodyColorType">{Types}</Card.Text>
          <Card.Body>
            <Card.Title className="pokemonNameId">{Name} <strong className='pokemonId'>#{Id}</strong> </Card.Title>
            <Card.Img className="PokemonImage" src={Image}/>
          </Card.Body>
        </Card>
        </Col>
    </>
  )
}
