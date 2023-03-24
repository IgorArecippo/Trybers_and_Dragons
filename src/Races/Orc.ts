import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _orcInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._orcInstances += 1;
  }
    
  public static createdRacesInstances(): number { return this._orcInstances; }

  public get maxLifePoints(): number { return this._maxLifePoints; }
}