export interface DataResponse {
  info: Data[];
}

export interface Data {
  DocNum:        number;
  CardCode:      string;
  SlpCode:       number;
  ItemCode:      string;
  FirmCode:      number;
  CategoriaCode: null | string;
}
// export enum Canal {
//   AlmacenCadena = "ALMACEN CADENA",
//   CentrosDeServicios = "CENTROS DE SERVICIOS",
//   DistribucionAutomatismos = "DISTRIBUCION AUTOMATISMOS",
//   DistribucionFerretera = "DISTRIBUCION FERRETERA",
//   Internacional = "INTERNACIONAL",
//   Online = "ONLINE",
//   Presidencia = "PRESIDENCIA",
//   Tiendas = "TIENDAS",
// }

// export enum FirmName {
//   Accessmatic = "ACCESSMATIC",
//   Combos = "COMBOS",
//   Ducson = "DUCSON",
//   EliteAutomatismos = "ELITE AUTOMATISMOS",
//   EliteHerramientas = "ELITE HERRAMIENTAS",
//   EliteMaquinaria = "ELITE MAQUINARIA",
//   EliteSoldadura = "ELITE SOLDADURA",
//   Facturacion = "FACTURACION",
//   Flete = "FLETE",
//   FuriusHerramientas = "FURIUS HERRAMIENTAS",
//   FuriusSoldaduras = "FURIUS SOLDADURAS",
//   GimenezGanga = "GIMENEZ GANGA",
//   Instaladores = "INSTALADORES",
//   Siefken = "SIEFKEN",
//   SweissSoldadura = "SWEISS SOLDADURA",
//   Ujueta = "UJUETA",
//   Varios = "VARIOS",
// }

// export enum GroupName {
//   AlmacenCadena = "ALMACEN CADENA",
//   AutBlack = "AUT-BLACK",
//   AutGold = "AUT-GOLD",
//   AutPlatino = "AUT-PLATINO",
//   AutSilver = "AUT-SILVER",
//   AutVip = "AUT-VIP",
//   CentrosDeServicios = "CENTROS DE SERVICIOS",
//   Csa = "CSA",
//   DcnpCallCenter = "DCNP-CALL CENTER",
//   DcnpFerreteria = "DCNP-FERRETERIA",
//   DcpCallCenter = "DCP-CALL CENTER",
//   DcpFerreteria = "DCP-FERRETERIA",
//   Internacional = "INTERNACIONAL",
//   TiendasJuridico = "*TIENDAS-JURIDICO",
//   TiendasPos = "*TIENDAS POS",
// }

// export enum Uen {
//   Automatismo = "AUTOMATISMO",
//   HerramientasElectricas = "HERRAMIENTAS ELECTRICAS",
//   Maquinaria = "MAQUINARIA",
//   Otros = "OTROS",
//   Soldadura = "SOLDADURA",
// }

// export enum WhsCode {
//   The00Cayena = "00CAYENA",
//   The03Paloqu = "03PALOQU",
//   The04Siete = "04SIETE",
//   The06Calino = "06CALINO",
//   The203Alfa = "203ALFA",
//   The231Ntech = "231NTECH",
//   The240Aacs = "240AACS",
//   The243Ujucr = "243UJUCR",
//   The246Agenc = "246AGENC",
//   The25Cucut = "25CUCUT",
//   The302Publi = "302PUBLI",
//   The31Cscbaq = "31CSCBAQ",
//   The32Cscbog = "32CSCBOG",
//   The33Csccal = "33CSCCAL",
//   The34Cscper = "34CSCPER",
//   The357Mercl = "357MERCL",
//   The35Cscbuc = "35CSCBUC",
//   The36Cscmed = "36CSCMED",
// }
