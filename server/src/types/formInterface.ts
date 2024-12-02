
import { CombatPreferences } from "../models/idfForm";
import { SupportPreferences } from "../models/idfForm";
import { TechPreferences } from "../models/idfForm";
export interface idfForm  {
    name: string;
    personalNote: string;
    combatPreferences: CombatPreferences;
    supportPreferences: SupportPreferences;
    techPreferences: TechPreferences;
    submissionDate?: Date;
    lastModified?: Date;
    status?: 'draft' | 'submitted' | 'processed';
    version?: number;
  }