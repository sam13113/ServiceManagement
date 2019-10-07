export interface ISubProject {
  id: number;
  name: string;
  breachedSLA: number;
  atRiskSLA: number;
  activeSLA: number;
  manager: string;
  domain: string;
}
