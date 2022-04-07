import {PokemonFactory} from './pokemonFactory';
import {Pokemon, PokemonStats} from './pokemon';
import {NewGenPokemon} from './newGenPokemon';
/**
 * Clase creadora de pokemons de nueva generacion, extiende a la clase generica PokemonFactory
 */
export class NewGenPokemonCreator extends PokemonFactory {
  // eslint-disable-next-line max-len
  /**
   * Constructor de la clase la cual recibe los atributos de un pokemon de nueva generacion
   * @param name Nombre del pokemon de nueva generacion
   * @param weight Peso del pokemon de nueva generacion
   * @param height Altura del pokemon de nueva generacion
   * @param type Tipo del pokemon de nueva generacion
   * @param oldGenStats Stats que ya se usaban en los pokemons de antigua generacion
   * @param nature Naturaleza que es unica de los pokemons de nueva generacion
   */
  constructor(private name: string, private weight: number, private height: number, private type: string, private oldGenStats: PokemonStats, private nature: string) {
    super();
  }
  /**
   * Metodo del patron creacional Factory el cual crea un nuevo Pokemon, en este caso de nueva generacion
   * @returns Objeto pokemon, en este caso de Nueva Generacion
   */
  public factoryMethod():Pokemon {
    return new NewGenPokemon(this.name, this.weight, this.height, this.type, this.oldGenStats, this.nature);
  }
  /**
   * Metodo del patron creacional Factory (opcional) la cual devuelve la informacion del pokemon de nueva generacion
   * @returns Devuelve la string que contiene la informacion basica de un pokemon de nueva generacion
   */
  public logic():string {
    const Pokemon = this.factoryMethod();
    return `Nombre del pokemon :${Pokemon.getName()} \n Tipo del pokemon: ${Pokemon.getType()} y soy un pokemon de nueva generacion`;
  }
}
