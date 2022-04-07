/**
 * Enum utilizado como guía a la hora de consultar las stats de los pokemons, es mas facil acordarse del stat que
 * de su posicion en el array.
 */
export enum statsIndex {ataque = 0, defensa, velocidad, hp }
/**
 * Un pokemon solo tiene 4 stats de combate y estos tienen que ser valores numericos
 */
export type PokemonStats = [number, number, number, number];
/**
 * Clase que modela un Pokemon con sus atributos basicos asi como sus stats basicas de combate
 */
export interface Pokemon {
  getName(): string;
  getWeight(): number;
  getHeight(): number;
  getType(): string;
  getStats(): PokemonStats;
  setHp(hp:number): void;
}

