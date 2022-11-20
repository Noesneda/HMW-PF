function laCajaDePandora(numero){
    
        let num = numero;
        let binary = (num % 2).toString();
        for (; num > 1; ) {
            num = parseInt(num / 2);
            binary =  (num % 2) + (binary);
        }
        return binary
    };

    function noe() {
        var obj = {
            nombre: 'Noelia',
            edad: '29',
            nacionalidad: 'Argentina'
        }
        return obj;
    };
     
    