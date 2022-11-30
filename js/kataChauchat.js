/* Nuestro ejercicio, será hacer una Chauchat virtual, que reproduzca su comportamiento.

1. Por un lado habrás de crear una variable `cargador` donde habrá de guardar unos 7 **_"pium!"_**

2. El otro elemento será nuestra **chauchat**, que "hace cosas", y será donde pondremos el cargador para que haga cosas.

    `chauchat(cargador)`

    Cuando ejecutemos dicho código, veremos impresos todos los **_"pium!"_** del cargador, uno tras otro.

    En el caso de 3 **_"pium!"_** en el cargador, veremos en la consola:

    ```4
    pium!
    pium!
    pium!
    ``` */

    // [" ","pium!","pium!","pium!","pium!","pium!","pium!","pium!"];
    let cargador = [0,1,2,3,4,5,6,7];
    let i= parseInt(prompt("Introduce un número"));
    function chauchat(cargador) {
        
        if (i>cargador.length || i<0) {
            alert("Introduce un número válido hasta "(+cargador.length));
        } else {
            for (let i = 0; i <=cargador.length; i++) {
               return document.write(cargador[i]);
                
            }}
        }
        chauchat();
      

 
           /*  while (i <=cargador.length ) {
                document.write(cargador[i]);
                i++
                
            } */

 