
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

//Função para puxar a cor do fundo do card dinâmicamento de acordo com o tipo do Pokemon.
export function getPokemonColorByType(type:any) {
    if (type == "fire") {
        return "#F57D31"
    } else if (type == "water") {
        return "#6493EB"
    } else if (type == "grass") {
      return "#74CB48"
    } else if (type == "bug") {
      return "#A7B723"
    } else if (type == "dark") {
      return "#75574C"
    } else if (type == "dragon") {
      return "#7037FF"
    } else if (type == "electric") {
      return "#F9CF30"
    } else if (type == "fairy") {
      return "#E69EAC"
    } else if (type == "fighting") {
      return "#C12239"
    } else if (type == "flying") {
      return "#A891EC"
    } else if (type == "ghost") {
      return "#70559B"
    } else if (type == "normal") {
      return "#AAA67F"
    } else if (type == "ground") {
      return "#DEC16B"
    } else if (type == "ice") {
      return "#9AD6DF"
    } else if (type == "poison") {
      return "#A43E9E"
    } else if (type == "psychic") {
      return "#FB5584"
    } else if (type == "rock") {
      return "#B69E31"
    } else if (type == "steel") {
      return "#B7B9D0"
    }
} 