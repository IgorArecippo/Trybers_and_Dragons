import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _dwarfInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._dwarfInstances += 1;
  }
    
  public static createdRacesInstances(): number { return this._dwarfInstances; }

  public get maxLifePoints(): number { return this._maxLifePoints; }
}
