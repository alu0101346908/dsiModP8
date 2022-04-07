import {Pokemon} from './pokemon';

/**
 * Clase abstracta basada en el patron Factory el cual especifica dos metodos obligatorios a definir por las clases que la extiendan
 */
export abstract class PokemonFactory {
  /**
   * Metodo abstracto que debe devolver un Pokemon, la implementacion variara en las clases hijas
   */
  public abstract factoryMethod(): Pokemon;
  /**
   * Metodo abstracto que debe devolver una string con la informacion del Pokemon, variara en las clases hijas
   */
  public abstract logic(): string;
}
