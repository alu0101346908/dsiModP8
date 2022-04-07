import {PokemonFactory} from './pokemonFactory';
import {Pokemon} from './pokemon';
import {PokemonStats} from './pokemon';
import {OldGenPokemon} from './oldGenPokemon';


export class OldGenPokemonCreator extends PokemonFactory {
  // eslint-disable-next-line max-len
  constructor(private name: string, private weight: number, private height: number, private type: string, private oldGenStats: PokemonStats) {
    super();
  }
  public factoryMethod():Pokemon {
    return new OldGenPokemon(this.name, this.weight, this.height, this.type, this.oldGenStats);
  }
  public logic():string {
    const Pokemon = this.factoryMethod();
    return `Nombre del pokemon :${Pokemon.getName()} \n Tipo del pokemon: ${Pokemon.getType()} y soy un pokemon de antigua generacion`;
  }
}
