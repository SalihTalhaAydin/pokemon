// Your initial data here



// Write your code below data.


let data = {
  abilities: [
    {
      ability: {
        name: 'chlorophyll',
        url: 'https://pokeapi.co/api/v2/ability/34/',
      },
      is_hidden: true,
      slot: 3,
    },
    {
      ability: {
        name: 'overgrow',
        url: 'https://pokeapi.co/api/v2/ability/65/',
      },
      is_hidden: false,
      slot: 1,
    },
  ],
  base_experience: 64,
  forms: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-form/1/',
    },
  ],
  height: 7,
  id: 1,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
  moves: [
    {
      move: {
        name: 'razor-wind',
        url: 'https://pokeapi.co/api/v2/move/13/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
      ],
    },
  ],

  name: 'bulbasaur',
  order: 1,
  species: {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
  },
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    back_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    back_shiny_female: null,
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    front_female: null,
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    front_shiny_female: null,
  },
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
  ],
  types: [
    {
      slot: 2,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
    },
  ],
  weight: 69,
};

function getHeight(){
  return ;
}

function getWeight(){
  return data.weight.toString();
}

function getName(){
  return data.name;
}

function checkAbilitiesDataType(){
  return typeof data.abilities === "object";
}

function printLastAbilityName(){
  console.log(data.abilities[data.abilities.length - 1].ability.name);
}

function putLastAbilityToAbilities(){
  data.abilities.push(data.abilities[data.abilities.length - 1]);
  console.log(data.abilities);
}

printNamesOfTypes =  () => data.types.forEach(el => console.log(el.type.name));
printBaseStats =  () => data.stats.forEach(el => console.log(el.base_stat));
getBaseStatsAbove47 = () => {
  let array = [];
  data.stats.filter(el => el.base_stat> 47).forEach(el => array.push(el.base_stat));
  return array;
}
getBaseStatsAbove47FirstTwo = () => getBaseStatsAbove47().slice(0, 2);
changeBaseStatsFirstValue = () => {
  let array = [];
  data.stats.forEach(el => array.push(el.base_stat));
  array.splice(0, 1, "sal");
  return array;
}

printKeysAndValues = () =>{
  for(let [key, value] of Object.entries(data)) {
    console.log(key, value);
  }
}


let pokemonHeight = getHeight();
let pokemonWeight = getWeight();
let pokemonBMI = Number(pokemonWeight) / Math.pow(Number(pokemonHeight), 2);
let pokemonName = getName();
let nameLength = pokemonName.length;
let nameUpperCase = pokemonName.toUpperCase();
let isNameContainsBulba = pokemonName.includes("bulba");
let firstTwoCharsOfName = pokemonName.slice(0, 2);
let lastTwoCharsOfName = pokemonName.slice(-2)
let firstAndLastTwoCharsOfName = [firstTwoCharsOfName.concat(lastTwoCharsOfName)];

console.log(
changeBaseStatsFirstValue()
);


const avatar = document.querySelector('#pokemon-avatar');
const pok_name = document.querySelector('#pokemon-name');
const info = document.querySelector('#info');
const name = data.name;
const height = data.height;
const weight = data.weight;
const url = data.sprites.front_default;
avatar.src = url;
pok_name.innerHTML = name;
info.innerHTML = `
  <span> Height ${height}</span> -
  <span> Weight ${weight}</span>
`;