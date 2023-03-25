import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Necromancer extends Archetype {
  private static _necromancerInstances = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    Necromancer._necromancerInstances += 1;
  }

  public static createdArchetypeInstances(): number { 
    return this._necromancerInstances;
  }

  public get energyType(): EnergyType { return this._energy; }
}