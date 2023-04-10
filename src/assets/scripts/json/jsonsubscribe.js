fetch('assets/data/subscribe.json')
.then(response => response.json())
.then(data => {		        
    const contenedor_cuadrados = document.querySelector(".contenedor-cuadrados");        
        const datos_cuadrados = data.cuadrados;
        const cuadrados = document.querySelectorAll('.cuadrado_sub');        
        for(let i=0;i<cuadrados.length;i++){
            let cuadrado = cuadrados[i];
            cuadrado.querySelector(".suscripcion_tipo").textContent = datos_cuadrados[i].suscripcion_tipo;
            let ventajas = datos_cuadrados[i].suscripcion_ventajas;            
            for(let j=0;j<ventajas.length;j++){
                let ventaja_element = document.createElement("li");
                ventaja_element.textContent = ventajas[j];
                cuadrado.querySelector(".suscripcion_ventajas").appendChild(ventaja_element);                
            }
            cuadrado.querySelector(".subButton").textContent = data.sub_button;                        
        }        
        // suscripcion de empresa
        const subEmpresa = document.querySelector(".subEmpresa");
        subEmpresa.querySelector(".subEmpresa_icono").src = data.subEmpresa.icono;
        subEmpresa.querySelector(".subEmpresa_title").textContent = data.subEmpresa.title;
        subEmpresa.querySelector(".subEmpresa_ventajas").textContent = data.subEmpresa.ventajas;
        subEmpresa.querySelector(".subButton").textContent = data.subEmpresa.button;
})
.catch(error => console.log(error));