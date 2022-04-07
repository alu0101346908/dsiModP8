import {Pokemon} from './pokemon';


export abstract class PokemonFactory {
  public abstract factoryMethod(): Pokemon;

  public abstract logic(): string;
}
