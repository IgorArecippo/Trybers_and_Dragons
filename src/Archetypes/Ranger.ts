import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Ranger extends Archetype {
  private static _rangerInstances = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Ranger._rangerInstances += 1;
  }

  public static createdArchetypeInstances(): number { 
    return this._rangerInstances;
  }

  public get energyType(): EnergyType { return this._energy; }
}