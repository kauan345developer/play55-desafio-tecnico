import type { SocialLink } from "./github";

export interface IHistoricoDePesquisas {
  urlImgPerfil: string;
  nome: string;
  usuario: string;
  dataConsulta: string;
  linksSociais: SocialLink[];
}
