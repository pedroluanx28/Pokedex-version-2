import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getIdPokemon, getNamePokemon, getPokemonColorByType, getPokemonTypeInPortuguese, getWeightAndHeight } from "../ExportFunctions/ExportFunctions"
import { Divider } from "@mui/material"
import '../Css/Profile.css'
import '../Css/PokemonStats.css'
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
          <Divider style={{ border: '1px solid black', margin: '15px 0' }} />
            <div className="pokemonInfosContainer">
              <p>{getWeightAndHeight(pokemonData.height) + "m"}</p>
              <p>{getWeightAndHeight(pokemonData.weight) + "Kg"}</p>
            </div>
        </div>
      </div>
    </div>
  )
}
