import { getNameStatspokemon, PropsStats } from '../ExportFunctions/ExportFunctions'
import '../Css/PokemonStats.css'

interface IProps {
    Hp: number,
    stat: PropsStats,
    Key?: any,
    Color: string
}

export default function PokemonStats({ Hp, stat, Key, Color }: IProps) {
    return (
        <>
            <div key={Key} className='statContainer' style={{color: `${Color}`, border: `2px solid ${Color}`}}>
                <p className='nameStat'>{getNameStatspokemon(stat)}</p>
                <p className='baseStat'>{Hp}</p>
            </div>
        </>
    )
}