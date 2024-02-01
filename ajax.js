/**
 * PASOS: 
 * CREAMOS EL BOTTOM EN HTML 
 * CREAMOS LA FUNCION
 * CREAMOS EL OBJETO XHLMTTREQUEST
 * CREAMO LA VASRIABLE DE LA URL(OTRA PAGINA HTML)
 * SOLICITO EL onreadystatechange= VEO EL CAMBIO DE ESTADO
 * readyState= ESTADO LISTO  
 * LE DIGO QUE METODO Y DE DONDE http.open("GET", url);
 * LE ENVIO LO SOLICITADO   http.send();
 * 
 * LLAMAMOS A LA FUNCION PA VER EN LA CONSOLA
 *  document.getElementById("boton").addEventListener("click",function(){ajax();})
 * 
 * PARA VER EN LA PAGINA EL
 * document.getElementById("response").innerHTML = this.responseText;
 * 
 * 
 * 
 * 
 */





function ajax(){
    const http = new XMLHttpRequest(); // objeto que se encarga de la solicitud
    const url = "http://127.0.0.1:5500/ajaxAgregar.html";

    http.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById("response").innerHTML = this.responseText;
        }
    }
    http.open("GET", url);
    http.send();

   

   } 

   document.getElementById("boton").addEventListener("click",function(){ajax();})