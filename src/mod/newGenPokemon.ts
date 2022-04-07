import {PokemonStats, Pokemon, statsIndex} from './pokemon';


export class NewGenPokemon implements Pokemon {
  /**
     * Constructor de la clase NewGenPokemon que recibe atributos tipicos de los pokemons y stats de combate basicas
     * @param name Nombre del pokemon, string
     * @param weight Peso del pokemon, number
     * @param height Altura del pokemon, number
     * @param type Tipo del pokemon, string
     * @param stats Array de tipo PokemonStats que representan las stats de combate (ataque, defensa, velocidad, hp)
     */
  constructor(private name: string, private weight: number,
    private height: number, private type: string, private stats: PokemonStats, private nature: string) {
  }
  /**
   *
   * @returns Devuelve el nombre del pokemon
   */
  getName(): string {
    return this.name;
  }
  /**
   *
   * @returns Devuelve el peso del pokemon
   */
  getWeight(): number {
    return this.weight;
  }
  /**
   *
   * @returns Devuelve la altura del pokemon
   */
  getHeight(): number {
    return this.height;
  }
  /**
   *
   * @returns Devuelve el tipo del pokemon
   */
  getType(): string {
    return this.type;
  }
  /**
   *
   * @returns Devuelve el array de PokemonStats
   */
  getStats(): PokemonStats {
    return this.stats;
  }
  /**
   * Setter para establecer los hp restantes del pokemon despues de un ataque del adversario
   * @param hp Valor de los hp del pokemon
   */
  setHp(hp:number) {
    this.stats[statsIndex.hp] = hp;
  }
  /**
   * Getter de la naturaleza del pokemon, unico de los pokemons de nueva generacion
   * @returns String que contiene la naturaleza de los pokemons
   */
  getNature():string {
    return this.nature;
  }
  /**
   * Setter de la naturaleza del pokemon, unico de los pokemons de nueva generacion
   * @param nature Naturaleza a asignarle al pokemon
   */
  setNature(nature:string) {
    this.nature = nature;
  }
}

