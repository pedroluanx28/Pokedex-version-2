import axios from "axios"
import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Spinner } from "react-bootstrap"
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

interface PropsSearch {
  name: string,
  id: string
}


export default function App() {

  //Get para API
  const [dataPokemon, setDataPokemon] = useState<any>([])
  const [url, setUrl] = useState<any>();
  const [isFetching, setIsFetching] = useState<boolean>(true);
  // const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  const [search, setSearch] = useState('')
  async function getPokemons(url = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0') {
    // let endpoints = []
    // for (var i = 1; i <= 151; i++) {
    //   endpoints.push(`https://pokeapi.co/api/v2/pokemon?limit=200&offset=0`)
    // }
    // axios
    //   .all(endpoints.map(endpoint => axios.get(endpoint)))
    //   .then(res => console.log(res.map(data => data.data)))
    //   .catch(err => console.log(err.message))

    try {
      const response = await axios.get(url);
      setUrl(response?.data);

      axios
        .all(response?.data?.results?.map((endpoint: any) => axios.get(endpoint?.url)))
        .then(pokemons => setDataPokemon(pokemons?.map((pokemon: any) => pokemon?.data)))
        .catch((err: any) => console.error(err));

      setIsFetching(false);
    } catch (err: any) {
      console.error(err);
    }
  }

  function Next() {
    if (url.next) {
      getPokemons(url?.next);
      setIsFetching(true);
    }
  }

  function Prev() {
    if (url.previous) {
      getPokemons(url?.previous);
      setIsFetching(true);
    }
  }


  const cardFilter = dataPokemon.filter((card: PropsSearch) =>
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
            className="inputSearchBar"
            placeholder="Procurar Pokémon"
            type='text'
            value={search}
            onChange={(e) => (setSearch(e.target.value))}
          />
        </div>
      </div>
      {isFetching
        ? (
          <div style={{ height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spinner />
          </div>
        )
        : (
          <Container fluid >
            <Row>
              {cardFilter.map((data: any, key: any) => {
                return (
                  <Col lg='2' md='4' sm='4' xs='6' key={key}>
                    <Link to={`/profile/${data.id}`} style={{ textDecoration: "none" }}>
                      <Card className="CardPokemonData">
                        <Card.Body>
                          <Card.Text className="bodyColorType" id="bodyColorType" style={{ backgroundColor: `${getPokemonColorByType(data.types[0].type.name)}` }}>{data.types.map((type: any, key: any) => {
                            return (
                              <div key={key} style={{ margin: '0 7px' }}>{getPokemonTypeInPortuguese(type.type.name)}</div>
                            )
                          })}</Card.Text>
                          <div className="pokemonNameId">{getNamePokemon(data)}
                            <br />
                            <strong className='pokemonId'>
                              #{getIdPokemon(data)}
                            </strong>
                          </div>
                          <Card.Img className="PokemonImage" src={data['sprites']['front_default']} />
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>

                )
              })}
            </Row>
          </Container >
        )}
      <button onClick={Prev}>Prev</button>
      <button onClick={Next}>Next</button>
    </>
  )
}
