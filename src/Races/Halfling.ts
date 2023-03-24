import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflingInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._halflingInstances += 1;
  }
    
  public static createdRacesInstances(): number { 
    return this._halflingInstances; 
  }

  public get maxLifePoints(): number { return this._maxLifePoints; }
}