import { ProgressBar } from "react-bootstrap"

export default function PokemonStats({Stats}: any) {
    return (
        <div className="pokemonStats" >
            <p className="statPokemonName">HP</p>
            <ProgressBar max={255} now={60} className="progressBar" />
        </div >
    )
}