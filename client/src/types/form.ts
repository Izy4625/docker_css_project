export interface CombatPreferences {
    golani: number;
    armor: number;
    artillery: number;
    searchAndRescue: number;
  }
  
  export interface SupportPreferences {
    targetingNCO: number;
    nimrodiSergeant: number;
    cook: number;
    sandwichFiller: number;
  }
  
  export interface TechPreferences {
    fullstack: number;
    data: number;
    devops: number;
    duty: number;
  }
  export interface IdfForm  {
    name: string;
    personalNote: string;
    combatPreferences: CombatPreferences;
    supportPreferences?: SupportPreferences;
    techPreferences?: TechPreferences;
  
  }
