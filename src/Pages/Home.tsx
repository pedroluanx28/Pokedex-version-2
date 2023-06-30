import axios from "axios"
import { useState, useEffect } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import {
  getIdPokemon,
  getNamePokemon,
  getPokemonTypeInPortuguese,
  getPokemonColorByType
} from "../ExportFunctions/ExportFunctions"
import { Link } from "react-router-dom"
import PokemonLogo from '../Images/pokemonLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Css/CardPokemon.css'
import '../Css/SearchBar.css'


export default function App() {
  const [dataPokemon, setDataPokemon] = useState<any>([])
  const [search, setSearch] = useState('')
  async function getPokemons() {
    let endpoints = []
    for (let i = 1; i <= 12; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    axios
      .all(endpoints.map(endpoint => axios.get(endpoint)))
      .then(res => setDataPokemon(res.map(data => data.data)))
      .catch(err => console.log(err.message))
  }


  const cardFilter = dataPokemon.filter((card: any) =>
    card.name.includes(search.toLowerCase()) ||
    card.id.toString().includes(search.toString())
  )

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <>
      <div className="seacrhBar">
        <div>
          <img src={PokemonLogo} className="logoPokemon" />
        </div>
        <div className="searchContainer">
          <input
            type='text'
            value={search}
            onChange={(e) => (setSearch(e.target.value))}
          />
        </div>
      </div>
      <Container fluid >
        <Row>
          {cardFilter.map((data: any, key: any) => {
            return (
              <Col lg='2' md='4' sm='6' xs='12' key={key}>
                <Link to={`/profile/${data.id}`} style={{ textDecoration: "none" }}>
                  <Card className="CardPokemonData">
                    <Card.Body>
                      <Card.Text className="bodyColorType" id="bodyColorType" style={{ backgroundColor: `${getPokemonColorByType(data.types[0].type.name)}` }}>{data.types.map((type: any, key: any) => {
                        return (
                          <div key={key} style={{ margin: '0 7px' }}>{getPokemonTypeInPortuguese(type.type.name)}</div>
                        )
                      })}</Card.Text>
                      <div className="pokemonNameId">{getNamePokemon(data)} <strong className='pokemonId'>#{getIdPokemon(data)}</strong> </div>
                      <Card.Img className="PokemonImage" src={data['sprites']['front_default']} />
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

            )
          })}
        </Row>
      </Container >
    </>
  )
}
