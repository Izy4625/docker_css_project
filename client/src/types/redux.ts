import { IdfForm } from "./form";
export enum DataStatus {
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    IDLE = "IDLE",
  }

  export interface formState{
    error: string | null;
    status: DataStatus;
    form: IdfForm | null
  }