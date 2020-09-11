import { Projet } from './Projet';

export class Serveur {
    Serveur: [];
    // tslint:disable-next-line: variable-name
    id_serveur: number;
    intitule: string;
    port: string;
    url: string;
    type: string;
    projet: number[]; // array of projects' Ids
    statut: string;
    // tslint:disable-next-line: variable-name
    // intitule_projet: string;
  }
