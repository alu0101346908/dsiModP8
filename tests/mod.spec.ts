import 'mocha';
import {expect} from 'chai';
import {PokemonFactory} from '../src/mod/pokemonFactory';
import {Pokemon, statsIndex, PokemonStats} from '../src/mod/pokemon';
import {NewGenPokemon} from '../src/mod/newGenPokemon';
import {OldGenPokemon} from '../src/mod/oldGenPokemon';
import {NewGenPokemonCreator} from '../src/mod/newGenPokemonCreator';
import {OldGenPokemonCreator} from '../src/mod/oldGenPokemonCreator';


describe('NewGenPokemonCreator tests', () => {
  const newGenCreator: NewGenPokemonCreator = new NewGenPokemonCreator('Toxel', 6.9, 0.7, 'electrico', [49, 49, 45, 45],'docile');
  it('NewGenPokemonCreator debe heredar de PokemonFactory', () => {
    expect(newGenCreator instanceof PokemonFactory).to.be.true;
  });
  it('El factoryMethod de NewGenPokemonCreator debe devolver un NewGenPokemon', () => {
    expect(newGenCreator.factoryMethod() instanceof NewGenPokemon).to.be.true;
  });
});

describe('OldGenPokemonCreator tests', () => {
  const oldGenCreator: OldGenPokemonCreator = new OldGenPokemonCreator('Charmander', 8.5, 0.6, 'fuego', [52, 43, 65, 39]);
  it('OldGenPokemonCreator debe heredar de PokemonFactory', () => {
    expect(oldGenCreator instanceof PokemonFactory).to.be.true;
  });
  it('El factoryMethod de OldGenPokemonCreator debe devolver un OldGenPokemon', () => {
    expect(oldGenCreator.factoryMethod() instanceof OldGenPokemon).to.be.true;
  });
});
