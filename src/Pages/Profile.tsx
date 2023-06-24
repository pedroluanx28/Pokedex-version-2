import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getIdPokemon, getNamePokemon, getPokemonColorByType, getPokemonTypeInPortuguese } from "../ExportFunctions/ExportFunctions"
import PokemonStats from "../Components/PokemonStats"
import '../Css/Profile.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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
          <div className="dataPokemonProfileContainer">
            <div className="pokemonStatsContainer">
              <h1>Stats</h1>
              {!pokemonData.stats ? ' ' : pokemonData.stats.map((data: any, key: any) => {
                return (
                  <PokemonStats
                    key={key}
                    Hp={data['base_stat']}
                    Name={data['stat']['name']}
                  />
                )
              })}
            </div>
            <div className="pokemonInfosContainer">
              ads
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
