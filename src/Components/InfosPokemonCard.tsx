import { getPokemonColorByType, getWeightAndHeight } from "../ExportFunctions/ExportFunctions"

export default function InfosPokemonCard({ Data, Color }: any) {
    return (
        <>
             <div className='statContainer' style={{backgroundColor: `${getPokemonColorByType(Color)}`}}>
                <p className='nameStat'>Altura</p>
                <p className='baseStat'>{getWeightAndHeight(Data.height) + 'm'}</p>
            </div>

            <div className='statContainer' style={{backgroundColor: `${getPokemonColorByType(Color)}`}}>
                <p className='nameStat'>Peso</p>
                <p className='baseStat'>{getWeightAndHeight(Data.weight) + 'kg'}</p>
            </div>
        </>
    )
}
