import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Warrior extends Archetype {
  private static _warriorInstances = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Warrior._warriorInstances += 1;
  }

  public static createdArchetypeInstances(): number { 
    return this._warriorInstances;
  }

  public get energyType(): EnergyType { return this._energy; }
}