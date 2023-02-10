(() => {
    // arreglo de temperaturas celsius
    //MAL
    const arrayOfNums = [33.6, 12.34];
    console.log(arrayOfNums);
    //BIEN
    const temperaturesCelsius = [33.6, 12.34];
    console.log(temperaturesCelsius);

    // Dirección ip del servidor

    //MAL
    const ip = '123.123.123.123';
    console.log(ip);
    //BIEN
    const serverIp = '123.123.123.123';
    console.log(serverIp);

    // Listado de usuarios

    //MAL
    const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    //BIEN
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    //MAL
    const emails = people.map( u => u.email );
    console.log(emails);
    //BIEN
    const userEmails = users.map(user => user.email);
    console.log(userEmails);

    // Variables booleanas de un video juego

    //MAL
    const jump = false;
    const run = true;
    const noTieneItems = true;
    const loading = false;
    //BIEN
    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    //MAL
    const start = new Date().getTime();
    //BIEN
    const startTime = new Date().getTime();

    //....
    // 3 doritos después
    //...

    // Tiempo al final
    //MAL
    const end = new Date().getTime() - start;
    console.log(end);
    //BIEN
    const endTime = new Date().getTime() - startTime;
    console.log(endTime);

    // Funciones
    // Obtiene los libros

    //MAL
    function book() {
        throw new Error('Function not implemented.');
    }
    //BIEN
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL

    //MAL
    function BooksUrl( u: string) {
        throw new Error('Function not implemented.' + u);
    }
    //BIEN
    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.' + url);
    }
    
    // obtiene el área de un cuadrado basado en sus lados

    //MAL
    function areaCuadrado( s: number ) {
        throw new Error('Function not implemented.' + s);
    }
    //BIEN
    function getSquareArea(side: number) {
        throw new Error('Function not implemented.' + side);
    }

    // imprime el trabajo

    //MAL
    function printJobIfJobIsActive() {
        throw new Error('Function not implemented.');
    }
    //BIEN
    function printJob() {
        throw new Error('Function not implemented.');
    }

})();