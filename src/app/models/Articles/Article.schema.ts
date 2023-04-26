export class Article{

    private titulo:string;
    private entrada:string;
    private imagen:string;
    private pie_foto:string
    private datos:string
    private fecha:string
    private contenido:string


    constructor(titulo:string, entrada:string, imagen:string, pie_foto:string, datos:string, fecha:string, contenido:string){
        this.titulo = titulo;
        this.entrada = entrada;
        this.imagen = imagen;
        this.pie_foto = pie_foto;
        this.datos = datos;
        this.fecha = fecha;
        this.contenido = contenido;
    }

    public getTitulo(){
        return this.titulo;
    }
    public getEntrada(){
        return this.entrada;
    }
    public getImagen(){
        return this.imagen;
    }
    public getPieFoto(){
        return this.pie_foto;
    }
    public getDatos(){
        return this.datos;
    }
    public getFecha(){
        return this.fecha;
    }
    public getContenido(){
        return this.contenido;
    }

    
}