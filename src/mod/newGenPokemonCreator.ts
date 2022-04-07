import {PokemonFactory} from './pokemonFactory';
import {Pokemon, PokemonStats} from './pokemon';
import {NewGenPokemon} from './newGenPokemon';

export class NewGenPokemonCreator extends PokemonFactory {
  // eslint-disable-next-line max-len
  constructor(private name: string, private weight: number, private height: number, private type: string, private oldGenStats: PokemonStats, private nature: string) {
    super();
  }
  public factoryMethod():Pokemon {
    return new NewGenPokemon(this.name, this.weight, this.height, this.type, this.oldGenStats, this.nature);
  }
}
