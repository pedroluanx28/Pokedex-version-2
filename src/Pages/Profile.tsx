import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getIdPokemon, getNamePokemon, getOthersVersionPokemons, getPokemonColorByType, getPokemonTypeInPortuguese, getStatsPokemon } from "../ExportFunctions/ExportFunctions"
import InfosPokemonCard from "../Components/InfosPokemonCard"
import { Divider } from "@mui/material"
import { Container, Row } from 'react-bootstrap'
import '../Css/Profile.css'
import '../Css/PokemonStats.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PokemonStats from "../Components/PokemonStats"

export default function Profile() {
  const [pokemonData, setPokemonData] = useState<any>([])
  const { id } = useParams()

  async function getSinglePokemon() {
    try {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemonData(res.data))
    } catch (err: any) {
      console.log(err.message)
    }
  }
  useEffect(() => {
    getSinglePokemon()
  }, [])
  if (pokemonData.types == undefined) {
    return ' '
  } else {
    var type1 = pokemonData.types[0].type.name
  }

  return (
    <div className="bodyProfile" style={{ backgroundColor: `${getPokemonColorByType(type1)}` }}>
      <div className="nameIdPokemonProfile">{getNamePokemon(pokemonData)} <strong className="idPokemonProfile">#{getIdPokemon(pokemonData)}</strong></div>
      <div className="containerProfile">
        <img className="pokemonImageProfile" src={!pokemonData.sprites ? "" : pokemonData['sprites']['front_default']} />
        <div className="statsPokemon">
          <div className="badgesContainer">
            {pokemonData.types.map((data: any) => {
              return (
                <div className="badgeTypePokemonProfile" style={{ backgroundColor: `${getPokemonColorByType(data.type.name)}` }}>
                  {getPokemonTypeInPortuguese(data.type.name)}
                </div>
              )
            })}
          </div>
          <Divider style={{ margin: '15px 0' }} role="presentation" component="h4" >Status</Divider>
          {pokemonData.stats.map((stat: any, key: any) => {
            return (
              <PokemonStats
                Name={stat.stat.name}
                Hp={getStatsPokemon(stat.base_stat)}
                Key={key}
                Color={type1}
              />
            )
          })}
          <Divider style={{ margin: '15px 0' }} role="presentation" component="h4" >Infos</Divider>
          <div className="pokemonInfosContainer" style={{ backgroundColor: `${getPokemonColorByType(type1)}` }}>
            <InfosPokemonCard
              Data={pokemonData}
            />
          </div>
          <Divider style={{ margin: '15px 0' }} role="presentation" component="h4" >Ataques Possíveis</Divider>
          {pokemonData.moves.map((a: any) => {
            return <div style={{ backgroundColor: `${getPokemonColorByType(type1)}` }} className="possibleAbilities" >{a.move.name}</div>
          })}
          <Divider style={{ margin: '15px 0' }} role="presentation" component="h4" >Outras Versões</Divider>
          <Container fluid style={{textAlign: 'center'}}>
            <Row>
                {getOthersVersionPokemons(pokemonData, getPokemonColorByType(type1))}
            </Row>
          </Container>

        </div>
      </div>
    </div>
  )
}
