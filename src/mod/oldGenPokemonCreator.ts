import {PokemonFactory} from './pokemonFactory';
import {Pokemon} from './pokemon';
import {PokemonStats} from './pokemon';
import {OldGenPokemon} from './oldGenPokemon';

/**
 * Clase creadora de pokemons de antigua generacion, extiende a la clase generica PokemonFactory
 */
export class OldGenPokemonCreator extends PokemonFactory {
  // eslint-disable-next-line max-len
  /**
  /**
   * Constructor de la clase la cual recibe los atributos de un pokemon de antigua generacion
   * @param name Nombre del pokemon de antigua generacion
   * @param weight Peso del pokemon de antigua generacion
   * @param height Altura del pokemon de antigua generacion
   * @param type Tipo del pokemon de antigua generacion
   * @param oldGenStats Stats que ya se usaban en los pokemons de antigua generacion
   */
  constructor(private name: string, private weight: number, private height: number, private type: string, private oldGenStats: PokemonStats) {
    super();
  }
  /**
   * Metodo del patron creacional Factory el cual crea un nuevo Pokemon, en este caso de antigua generacion
   * @returns Objeto pokemon, en este caso de antigua Generacion
   */
  public factoryMethod():Pokemon {
    return new OldGenPokemon(this.name, this.weight, this.height, this.type, this.oldGenStats);
  }
  /**
 * Metodo del patron creacional Factory (opcional) la cual devuelve la informacion del pokemon de antigua generacion
 * @returns Devuelve la string que contiene la informacion basica de un pokemon de antigua generacion
 */
  public logic():string {
    const Pokemon = this.factoryMethod();
    return `Nombre del pokemon :${Pokemon.getName()} \n Tipo del pokemon: ${Pokemon.getType()} y soy un pokemon de antigua generacion`;
  }
}
