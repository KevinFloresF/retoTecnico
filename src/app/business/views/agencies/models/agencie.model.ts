export class Agencie{
    agencia: string;
    distrito: string;
    provincia: string;
    departamento: string;
    direccion: string;
    lat: number;
    lon: number;

    constructor(
        pAgencia: string,
        pDistrito:string,
        pProvincia: string,
        pDepartamento: string,
        pDireccion: string,
        pLat: number,pLon: number,
        ){
        this.agencia=pAgencia;
        this.distrito=pDistrito;
        this.provincia=pProvincia;
        this.departamento=pDepartamento;
        this.direccion=pDireccion;
        this.lat=pLat;
        this.lon=pLon;
    }
}