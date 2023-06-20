import axios from "axios"
import { useState, useEffect } from "react"
import CardPokemon from "../Components/CardPokemon"
import { Container, Row } from "react-bootstrap"
import { getIdPokemon, getTypes, getNamePokemon } from "../ExportFunctions/ExportFunctions"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  const [dataPokemon, setDataPokemon] = useState<any>([])
  async function getPokemons() {
    let endpoints = []
    for (let i = 1; i <= 151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    axios
      .all(endpoints.map(endpoint => axios.get(endpoint)))
      .then(res => setDataPokemon(res.map(data => data.data)))
      .catch(err => console.log(err.message))
  }


  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <>
      <Container fluid >
        <Row>
          {dataPokemon.map((data: any, key: any) => {

            //Funções para puxar dinâmicamente informações da API:

            //Para puxar o número do Pokemon com a quantidade certa de zeros atŕas.
            //const getIdPokemon = getIdPokemonFunction(data)
            return (
              <CardPokemon
                key={key}
                Name={getNamePokemon(data)}
                Image={data['sprites']['front_default']}
                Id={getIdPokemon(data)}
                Types={getTypes(data)}
                Type1={data.types[0].type.name}
              />

            )
          })}
        </Row>
      </Container>
    </>
  )
}
