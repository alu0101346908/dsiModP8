import {Pokemon} from './pokemon';


export abstract class PokemonFactory {
  public abstract factoryMethod(): Pokemon;

  public logic(): string {
    const Pokemon = this.factoryMethod();
    return `Nombre del pokemon :${Pokemon.getName()} \n Tipo del pokemon ${Pokemon.getType()}`;
  }
}
