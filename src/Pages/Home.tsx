import axios from "axios"
import { useState, useEffect } from "react"
import CardPokemon from "../Components/CardPokemon"
import { Container, Row } from "react-bootstrap"
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
            return (
              <CardPokemon
                key={key}
                Name={data.name}
                Image={data['sprites']['front_default']}
                Id={data.id < 10 ? '00'+data.id : data.id < 100 ? '0'+data.id : data.id}
                Types={data.types.map((data: any) => data.type.name + ' ')}
              />

            )
          })}
        </Row>
      </Container>
    </>
  )
}
