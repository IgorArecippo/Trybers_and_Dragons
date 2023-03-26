import Fighter from './Fighter';
import Archetype from './Archetypes/index';
import Race, { Elf } from './Races';
import Energy from './Energy';
import getRandomInt from './utils';
import Mage from './Archetypes/Mage';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._archetype = new Mage(name);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10) };
  }

  public get race(): Race { return this._race; }

  public get archetype(): Archetype { return this._archetype; }

  public get lifePoints(): number { return this._lifePoints; }

  public get strength(): number { return this._strength; }

  public get defense(): number { return this._defense; }

  public get dexterity(): number { return this._dexterity; }

  public get energy(): Energy { 
    const type = this._energy.type_;
    const { amount } = this._energy;
    return { type_: type, amount };
  }

  public receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (damage <= 0) this._lifePoints -= 1;
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints >= this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }
} 
