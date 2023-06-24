
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
export function getNameStatspokemon(stat: string) {
  if (stat == "hp") {
    return "Vida"
  } else if (stat == "defense") {
    return "Defesa"
  } else if (stat == "attack") {
    return "Ataque"
  } else if (stat == "special-attack") {
    return "Ataque Especial"
  } else if (stat == "special-defense") {
    return "Defesa Especial"
  } else if (stat == "speed") {
    return "Velocidade"
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

//Função para puxar o tipo do Pokemon em PORTUGUÊS.
export function getPokemonTypeInPortuguese(type:string) {
  if (type == "fire") {
      return "Fogo"
  } else if (type == "water") {
      return "Água"
  } else if (type == "grass") {
    return "Grama"
  } else if (type == "bug") {
    return "Inseto"
  } else if (type == "dark") {
    return "Sombra"
  } else if (type == "dragon") {
    return "Dragão"
  } else if (type == "electric") {
    return "Elétrico"
  } else if (type == "fairy") {
    return "Fada"
  } else if (type == "fighting") {
    return "Lutador"
  } else if (type == "flying") {
    return "Voador"
  } else if (type == "ghost") {
    return "Fantasma"
  } else if (type == "normal") {
    return "Normal"
  } else if (type == "ground") {
    return "Areia"
  } else if (type == "ice") {
    return "Gelo"
  } else if (type == "poison") {
    return "Veneno"
  } else if (type == "psychic") {
    return "Písiquico"
  } else if (type == "rock") {
    return "Pedra"
  } else if (type == "steel") {
    return "Ferro"
  }
} 