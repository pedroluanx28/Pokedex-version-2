import { Col } from "react-bootstrap"
type PropsTypes = 'fire' | 'water' | 'bug' | 'flying' | 'grass' | 'poison' | 'steel' | 'fairy' | 'ghost' | 'normal' | 'dark' | 'electric' | 'fighting' | 'dragon' | 'ground' | 'ice' | 'psychic' | 'rock'

//Função para puxar o ID do Pokemon com uma respectiva quantidade de zeros atŕas.
export function getIdPokemon(data: any) {
  if (data.id < 10) {
    return "00" + data.id
  } else if (data.id < 100) {
    return "0" + data.id
  } else {
    return data.id
  }
}

//Função para puxar os tipos de cada Pokemon de maneira dinâmica.
export function getTypes(data: any) {
  if (data.types[1]) {
    return data.types[0].type.name[0].toUpperCase() + data.types[0].type.name.substring(1)
      + " | "
      + data.types[1].type.name[0].toUpperCase() + data.types[1].type.name.substring(1)
  } else {
    return data.types[0].type.name[0].toUpperCase() + data.types[0].type.name.substring(1)
  }
}

//Função para puxar o nome de cada Pokemon com a primeira letra maíuscula.
export function getNamePokemon(data: any) {
  if (data.name == undefined) {
    return ' '
  } else {
    return data.name[0].toUpperCase() + data.name.substring(1)
  }
}

//Função para pegar os STATUS do Pokemon com uma certa quantidade de zeros atrás.
export function getStatsPokemon(data: any) {
  if (data < 10) {
    return '00' + data
  } else if (data < 100) {
    return '0' + data
  } else {
    return data
  }
}

//Função que retorna o nome do STATUS do Pokemon com primeira letra maíuscula.
export function getNameStatspokemon(stat: any) {
  if (stat == "hp") {
    return "Vida"
  } else if (stat == "defense") {
    return "Defesa"
  } else if (stat == "attack") {
    return "Ataque"
  } else if (stat == "special-attack") {
    return "Ataque E."
  } else if (stat == "special-defense") {
    return "Defesa E."
  } else if (stat == "speed") {
    return "Velocidade"
  }
}

//Função para retornar a altura e o peso do Pokémon em Metros e Quilos.
export function getWeightAndHeight(data: any) {
  if (!data) {
    return ' '
  } else {
    return data / 10
  }
}

//Função para deixar o nome das habilidades do pokemon arrumadas.
export function getAbilitiesPokemon(data: any) {
  if (data.abilities[2]) {
    return data.abilities[0].ability.name + ' | ' + data.abilities[1].ability.name + ' | ' + data.abilities[2].ability.name
  } else if (data.abilities[1]) {
    return data.abilities[0].ability.name + ' | ' + data.abilities[1].ability.name
  } else {
    return data.abilities[0].ability.name
  }
}

//Função para puxar as outras versões existentes de Pokemon.
export function getOthersVersionPokemons(data: any, color: any) {
  if (!data.sprites.front_shiny) {
    return <p className="alertOthersForms">Este Pokémon não tem outras formas</p>
  } else {
    if (!data.sprites.front_female) {
      return (
        <Col>
          <div className="othersVersionsContainer" style={{ backgroundColor: `${color}`, width: '500px', margin: 'auto' }}>
            <h5 className="titleOtherVersion">Shiny</h5>
            <img className='imageOthersVersions' src={`${data.sprites.front_shiny}`} />
          </div>
        </Col>
      )
    } else {
      return (
        <>
          <Col lg='4' xs='12'>
            <div className="othersVersionsContainer" style={{ backgroundColor: `${color}` }}>
              <h5 className="titleOtherVersion">Fêmea</h5>
              <img className='imageOthersVersions' src={`${data.sprites.front_female}`} />
            </div>
          </Col>
          <Col lg='4' xs='12'>
            <div className="othersVersionsContainer" style={{ backgroundColor: `${color}` }}>
              <h5 className="titleOtherVersion">Shiny</h5>
              <img className='imageOthersVersions' src={`${data.sprites.front_shiny}`} />
            </div>
          </Col>
          <Col lg='4' xs='12'>
            <div className="othersVersionsContainer" style={{ backgroundColor: `${color}` }}>
              <h5 className="titleOtherVersion">Shiny Fêmea</h5>
              <img className='imageOthersVersions' src={`${data.sprites.front_shiny_female}`} />
            </div>
          </Col>
        </>
      )
    }
  }
}

//Função para puxar a cor do fundo do card dinâmicamento de acordo com o tipo do Pokemon.
export function getPokemonColorByType(type: PropsTypes) {
  const colors = {
    fire: '#F57D31',
    water: '#6493EB',
    bug: '#A7B723',
    grass: '#74CB48',
    dark: '#75574C',
    ground: '#DEC16B',
    fighting: '#C12239',
    dragon: '#75574C',
    electric: '#F9CF30',
    normal: '#AAA67F',
    ice: '#9AD6DF',
    poison: '#A43E9E',
    fairy: '#E69EAC',
    steel: '#B7B9D0',
    rock: '#B69E31',
    psychic: '#FB5584',
    ghost: '#70559B',
    flying: '#A891EC'
  }

  return colors[type] ?? null
}

//Função para puxar o tipo do Pokemon em PORTUGUÊS.
export function getPokemonTypeInPortuguese(type: PropsTypes) {
  const names = {
    fire: 'Fogo',
    water: 'Água',
    bug: 'Inseto',
    grass: 'Grama',
    dark: 'Sombra',
    ground: 'Areia',
    fighting: 'Lutador',
    dragon: 'Dragão',
    electric: 'Elétrico',
    normal: 'Normal',
    ice: 'Gelo',
    poison: 'Veneno',
    fairy: 'Fada',
    steel: 'Ferro',
    rock: 'Pedra',
    psychic: 'Psíquico',
    ghost: 'Fantasma',
    flying: 'Voador'
  }

  return names[type] ?? null
} 