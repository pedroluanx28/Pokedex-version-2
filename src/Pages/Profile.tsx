import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getIdPokemon, getNamePokemon, getOthersVersionPokemons, getPokemonColorByType, getPokemonTypeInPortuguese, getStatsPokemon } from "../ExportFunctions/ExportFunctions"
import InfosPokemonCard from "../Components/InfosPokemonCard"
import { Divider } from "@mui/material"
import { Container, Row } from 'react-bootstrap'
import { AiFillHome } from 'react-icons/ai'
import PokemonStats from "../Components/PokemonStats"

import '../Css/Profile.css'
import '../Css/PokemonStats.css'
import 'bootstrap/dist/css/bootstrap.min.css'

interface PropsStats {
  base_stat: string,
  stat: any,
}

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
  if (!pokemonData.types) {
    return ' '
  } else {
    var color = getPokemonColorByType(pokemonData?.types[0]?.type?.name);
  }

  return (
    <div className="bodyProfile" style={{ backgroundColor: `${color}` }}>
      <i className="houseIcon">
        <Link to="/">
          <AiFillHome className="icon" />
        </Link>
      </i>
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
          <Divider style={{ margin: '15px 0' }} role="presentation" component="h4" >Informações</Divider>
          <InfosPokemonCard
            Data={pokemonData}
            Color={color}
          />
          <Divider style={{ margin: '15px 0' }} role="presentation" component="h4" >Status</Divider>
          {pokemonData.stats.map((stat: PropsStats, key: unknown) => {
            return (
              <PokemonStats
                stat={stat.stat.name}
                Hp={getStatsPokemon(stat.base_stat)}
                Key={key}
                Color={color}
              />
            )
          })}
          <Divider style={{ margin: '15px 0' }} role="presentation" component="h4">Ataques Possíveis</Divider>
          <div className="abillitiesContainer">
            {pokemonData.moves.map((a: any) => {
              return <div style={{ border: `2px solid ${color}`, color: `${color}` }} className="possibleAbilities">{a.move.name}</div>
            })}
          </div>
          <Divider style={{ margin: '15px 0' }} role="presentation" component="h4">Outras Versões</Divider>
          <Container fluid style={{ textAlign: 'center' }}>
            <Row>
              {getOthersVersionPokemons(pokemonData, color)}
            </Row>
          </Container>

        </div>
      </div>
    </div>
  )
}
