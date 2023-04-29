
export class Article{

    private titulo:string;
    private entrada:string;
    private imagen:string;
    private pie_foto:string
    private datos:string
    private fecha:string
    private contenido:string

    protected titulo_mas_vistos!: string;
    protected contenido1_most_viewed!:string;
    protected contenido2_most_viewed!:string;
    protected contenido3_most_viewed!:string;

    protected titulo_articulo_relacionado!:string;
    protected contenido_articulo_relacionado1!:string;
    protected contenido_articulo_relacionado2!:string;
    protected contenido_articulo_relacionado3!:string;

    protected comment_box!: Array<string>;

    constructor(titulo:string, entrada:string, imagen:string, pie_foto:string, datos:string, fecha:string, contenido:string,
                titulo_mas_vistos:string, contenido1_most_viewed:string, contenido2_most_viewed:string, contenido3_most_viewed:string,
                titulo_articulo_relacionado:string, contenido_articulo_relacionado1:string, contenido_articulo_relacionado2:string,
                contenido_articulo_relacionado3:string, comment_box:Array<string>){
        
        //articulo principal
        this.titulo = titulo;
        this.entrada = entrada;
        this.imagen = imagen;
        this.pie_foto = pie_foto;
        this.datos = datos;
        this.fecha = fecha;
        this.contenido = contenido;

        //articlos mas vistos
        this.titulo_mas_vistos = titulo_mas_vistos;
        this.contenido1_most_viewed = contenido1_most_viewed;
        this.contenido2_most_viewed = contenido2_most_viewed;
        this.contenido3_most_viewed = contenido3_most_viewed;

        //articulos relacionados
        this.titulo_articulo_relacionado = titulo_articulo_relacionado;
        this.contenido_articulo_relacionado1 = contenido_articulo_relacionado1;
        this.contenido_articulo_relacionado2 = contenido_articulo_relacionado2;
        this.contenido_articulo_relacionado3 = contenido_articulo_relacionado3;

        //Comment box
        this.comment_box = comment_box;
    }

    public  getTitulo():string{
        return this.titulo;
    }
    public  getEntrada():string{
        return this.entrada;
    }
    public  getImagen():string{ 
        return this.imagen;
    }
    public  getPieFoto():string{
        return this.pie_foto;
    }
    public  getDatos():string{
        return this.datos;
    }
    public  getFecha():string{
        return this.fecha;
    }
    public  getContenido():string{
        return this.contenido;
    }
    public  getTituloMasVistos():string{
        return this.titulo_mas_vistos;
    }
    public  getContenido1MostViewed():string{
        return this.contenido1_most_viewed;
    }
    public  getContenido2MostViewed():string{
        return this.contenido2_most_viewed;
    }
    public  getContenido3MostViewed():string{
        return this.contenido3_most_viewed;
    }
    public  getTituloArticuloRelacionado():string{
        return this.titulo_articulo_relacionado;
    }
    public  getContenidoArticuloRelacionado1():string{
        return this.contenido_articulo_relacionado1;
    }
    public  getContenidoArticuloRelacionado2():string{
        return this.contenido_articulo_relacionado2;
    }
    public  getContenidoArticuloRelacionado3():string{
        return this.contenido_articulo_relacionado3;
    }
    public getCommentBox():Array<string>{
        return this.comment_box;
    }
}