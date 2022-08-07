/**
 *  objeto producto
 */
class Productos{
    constructor(nombre,precio,año){
        this.nombre=nombre;
        this.precio=precio;
        this.año=año;
    }
}

/**
 * objeto interfaz
 */

class UI{
    guardarProducto(producto){

        const listaProductos=document.getElementById('list');
        // listaProductos.style.display='flex';
        const elemento=document.createElement('div');
        elemento.setAttribute('class','flex-list');
        elemento.innerHTML=`
                <div class="list-item">
                    <strong>Nombre del producto</strong>: ${producto.nombre}
                </div>
                <div class="list-item">
                    <strong>Precio del producto</strong>: ${producto.precio}
                </div>
                <div class="list-item">
                    <strong>Año del producto</strong>: ${producto.año}
                </div>
                <div class="list-item">
                    <a class="delete-btn" href="#">Eliminar</a>
                </div>
        `;
        listaProductos.appendChild(elemento);
        console.log(producto);
    }

    reiniciarForm(){
        document.getElementById('product-form').reset();
    }

    eliminarProducto(boton){
        if(boton.classList.contains('delete-btn')){
            boton.parentElement.parentElement.remove();
            this.mensaje('Producto eliminado satisfactoriamente','message-container borrado');
        }
        
    }

    mensaje(texto,claseCss){
        const div=document.createElement('div');
        div.setAttribute('class',claseCss);
        // div.appendChild(document.createTextNode(texto));
        div.appendChild(document.createTextNode(texto));

        const contenedorGeneral=document.getElementById('general');

        const aplicacionGeneral=document.getElementById('App');
        // console.log(body);
        // body.insertBefore(div,cabecera);
        aplicacionGeneral.insertBefore(div,contenedorGeneral);

        setTimeout(function(){
            document.querySelector('.message-container').remove();
        },2000);

    }
}

/**
 * eventos
 */

document.getElementById('product-form').addEventListener('submit',function(e){
    const nombre=document.getElementById('name').value;
    const precio=document.getElementById('price').value;
    const año=document.getElementById('year').value;
    
    const producto= new Productos(nombre,precio,año);
    const ui= new UI();

    ui.guardarProducto(producto);
    ui.reiniciarForm();
    ui.mensaje('Producto agregado satisfactoriamente','message-container succes');


    e.preventDefault(); 
}); 

document.getElementById('list').addEventListener('click',function(e){
    // console.log(e.target);
    const ui=new UI();
    ui.eliminarProducto(e.target);
    

    e.preventDefault();
});


// mensajes - actualizar(opcional) 