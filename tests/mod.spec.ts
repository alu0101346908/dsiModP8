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
  it('Existe un metodo logic especifico de NewGenPokemonCreator', () => {
    expect(newGenCreator.logic()).to.be.eql('Nombre del pokemon :Toxel \n Tipo del pokemon: electrico y soy un pokemon de nueva generacion');
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
  it('Existe un metodo logic especifico de OldGenPokemonCreator', () => {
    expect(oldGenCreator.logic()).to.be.eql('Nombre del pokemon :Charmander \n Tipo del pokemon: fuego y soy un pokemon de antigua generacion');
  });
});


describe('OldGenPokemon tests', () => {
  const oldgenPokemon: OldGenPokemon = new OldGenPokemon('Charmander', 8.5, 0.6, 'fuego', [52, 43, 65, 39]);
  it('Getters de oldGenPokemon', () => {
    expect(oldgenPokemon.getName()).to.be.equal('Charmander');
    expect(oldgenPokemon.getWeight()).to.be.equal(8.5);
    expect(oldgenPokemon.getHeight()).to.be.equal(0.6);
    expect(oldgenPokemon.getType()).to.be.equal('fuego');
    expect(oldgenPokemon.getStats()).to.be.deep.equal([52, 43, 65, 39]);
  });
  it('Setters de oldGenPokemon', () => {
    oldgenPokemon.setHp(50);
    expect(oldgenPokemon.getStats()[statsIndex.hp]).to.be.equal(50);
  });
});

describe('NewGenPokemon tests', () => {
  const newgenPokemon: NewGenPokemon = new NewGenPokemon('Toxel', 6.9, 0.7, 'electrico', [49, 49, 45, 45], 'docile');
  it('Getters de newGenPokemon', () => {
    expect(newgenPokemon.getName()).to.be.equal('Toxel');
    expect(newgenPokemon.getWeight()).to.be.equal(6.9);
    expect(newgenPokemon.getHeight()).to.be.equal(0.7);
    expect(newgenPokemon.getType()).to.be.equal('electrico');
    expect(newgenPokemon.getStats()).to.be.deep.equal([49, 49, 45, 45]);
    expect(newgenPokemon.getNature()).to.be.equal('docile');
  });
  it('Setters de newGenPokemon', () => {
    newgenPokemon.setHp(50);
    expect(newgenPokemon.getStats()[statsIndex.hp]).to.be.equal(50);
    newgenPokemon.setNature('Sassy');
    expect(newgenPokemon.getNature()).to.be.equal('Sassy');
  });
});
