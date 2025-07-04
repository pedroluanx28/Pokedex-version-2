import axios from "axios"
import {useState, useEffect} from "react"
import {Container, Row, Col, Card, Spinner} from "react-bootstrap"
import {
  getIdPokemon,
  getNamePokemon,
  getPokemonTypeInPortuguese,
  getPokemonColorByType
} from "../ExportFunctions/ExportFunctions"
import ProfileModal from "./ProfileModal.tsx";
import PokemonLogo from '../Images/pokemonLogo.png'
import '../Css/CardPokemon.css'
import '../Css/SearchBar.css'

interface PropsSearch {
  name: string,
  id: string
}


export default function App() {
  const [dataPokemon, setDataPokemon] = useState<any>([])
  const [isFetching, setIsFetching] = useState(true);
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [currentPokemonId, setCurrentPokemonId] = useState("");

  const numberOfPokemons = 1000;

  const handleShowModal = (pokemonId: string) => {
    setShowModal(true);
    setCurrentPokemonId(pokemonId);
  }
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentPokemonId("");
  }

  async function getPokemons() {
    setIsFetching(true);

    try {
      let endpoints = []
      for (let i = 1; i <= numberOfPokemons; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
      }

      const response = await axios.all(endpoints.map(endpoint => axios.get(endpoint)));
      const data = response?.map((pokemon: any) => pokemon?.data);

      setDataPokemon(data);
      localStorage.setItem("pokemons", JSON.stringify(data.slice(0, 1)));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
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
          <img src={PokemonLogo} className="logoPokemon" alt="pokemon logo"/>
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
          <div style={{height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Spinner/>
          </div>
        )
        : (
          <Container fluid>
            <Row>
              {cardFilter.map((data: any, key: any) => {
                return (
                  <Col lg='2' md='4' sm='4' xs='6' key={key}>
                    <span role="button" onClick={() => handleShowModal(data.id)}>
                      <Card className="CardPokemonData">
                        <Card.Body>
                          <Card.Text className="bodyColorType" id="bodyColorType"
                                     style={{backgroundColor: `${getPokemonColorByType(data.types[0].type.name)}`}}>{data.types.map((type: any, key: any) => {
                            return (
                              <div key={key}
                                   style={{margin: '0 7px'}}>{getPokemonTypeInPortuguese(type.type.name)}</div>
                            )
                          })}</Card.Text>
                          <div className="pokemonNameId">{getNamePokemon(data)}
                            <br/>
                            <strong className='pokemonId'>
                              #{getIdPokemon(data)}
                            </strong>
                          </div>
                          <Card.Img className="PokemonImage"
                                    src={data['sprites']['front_default']}/>
                        </Card.Body>
                      </Card>
                    </span>
                  </Col>

                )
              })}
            </Row>
          </Container>
        )}

      <ProfileModal
        show={showModal}
        handleClose={handleCloseModal}
        pokemonId={currentPokemonId}
      />
    </>
  )
}
