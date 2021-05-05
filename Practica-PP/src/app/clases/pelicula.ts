import { Actor } from "./actor";

export class Pelicula {
    public id: number;
    public nombre: string;
    public tipo: string;
    public fechaDeEstreno: string;
    public cantidadDePublico: number;
    public FotoDeLaPelicula: any;
    public actores?:Array<Actor>;
}