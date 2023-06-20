import { Card, Col } from 'react-bootstrap'
import '../Css/CardPokemon.css'
import { getPokemonColorByType } from '../ExportFunctions/ExportFunctions'

interface Props {
    Name: string,
    Image: string,
    Id: string,
    Types: string,
    Type1: string
}

export default function CardPokemon({Name, Image, Id, Types, Type1}: Props) {
  return (
    <>
        <Col lg='2' md='4' sm='6' xs='12'>
        <Card className="CardPokemonData">
          <Card.Body>
          <Card.Text className="bodyColorType" id="bodyColorType" style={{backgroundColor: `${getPokemonColorByType(Type1)}`}}>{Types}</Card.Text>
            <div className="pokemonNameId">{Name} <strong className='pokemonId'>#{Id}</strong> </div>
            <Card.Img className="PokemonImage" src={Image}/>
          </Card.Body>
        </Card>
        </Col>
    </>
  )
}
