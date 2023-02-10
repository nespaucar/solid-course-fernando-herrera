(() => {
    // Archivos a evaluar - files to evaluate

    //MAL
    const fs = [
        { id: 1, f: false },
        { id: 2, f: false },
        { id: 3, f: true },
        { id: 4, f: false },
        { id: 5, f: false },
        { id: 7, f: true },
    ];
    //BIEN
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ];

    // ***********
    
    // Archivos marcados para borrar - files to delete

    //MAL
    const arhivos = fs.map( f => f.f );
    console.log(arhivos);
    //BIEN
    const filesToDelete = filesToEvaluate.map( file => file.flagged );
    console.log(filesToDelete);

    // ***********

    // MALOS NOMBRES
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };
    // MEJORES NOMBRES
    class User { };
    interface User { };

    // ***********

    // Todo: Tarea

    // ***********
        
    // día de hoy - today

    //MAL
    const ddmmyyyy = new Date();
    console.log(ddmmyyyy);
    //BIEN
    const currentDate = new Date();
    console.log(currentDate);

    // ***********
    
    // días transcurridos - elapsed time in days
    
    //MAL
    const d: number = 23;
    console.log(d);
    //BIEN
    const elapsedTimeInDays: number = 23;
    console.log(elapsedTimeInDays);

    // ***********
    
    // número de archivos en un directorio - number of files in directory
    
    //MAL
    const dir = 33;
    console.log(dir);
    //BIEN
    const numberOfFilesInDirectory = 33;
    console.log(numberOfFilesInDirectory);

    // ***********
    
    // primer nombre - first name
    
    //MAL
    const nombre = 'Fernando';
    console.log(nombre);
    //BIEN
    const firstName = 'FERNANDO';
    console.log(firstName);

    // ***********
    
    // primer apellido - last name
    
    //MAL
    const apellido = 'Herrera';
    console.log(apellido);
    //BIEN
    const lasttName = 'Herrera';
    console.log(lasttName);

    // ***********

    // días desde la última modificación - days since modification
    
    //MAL
    const dsm = 12;
    console.log(dsm);
    //BIEN
    const daySinceModification = 12;
    console.log(daySinceModification);

    // ***********
    
    // cantidad máxima de clases por estudiante - max classes per student
    
    //MAL
    const max = 6;
    console.log(max);
    //BIEN
    const maxClassesPerStudent = 6;
    console.log(maxClassesPerStudent);
    
    // *********** ARRAYS

    //MAL
    const fruit = ['manzana', 'platano', 'fresa'];
    console.log(fruit);
    //MEJOR
    const fruitList = ['manzana', 'platano', 'fresa'];
    console.log(fruitList);
    //MUCHO MEJOR
    const fruits = ['manzana', 'platano', 'fresa'];
    console.log(fruits);
    //MUCHISIMO MEJOR
    const fruitNames = ['manzana', 'platano', 'fresa'];
    console.log(fruitNames);

    // *********** BOOLEANS

    //MAL - NO TIENE QUE TENER NEGACIONES
    const open = true;
    const write = true;
    const cars = true;
    const active = false;
    const noValues = true;
    const notEmpty = true;
    //BIEN - SENTIDO SEMANTICO
    const isOpen = true;
    const canWrite = true;
    const hasCars = true;
    const isActive = false;
    const hasValues = false;
    const isEmpty = false;

    // *********** NUMEROS

    // MAL
    const houses = 3;
    console.log(houses);
    const cards = 10;
    console.log(cards);
    //BIEN
    const maxHouses = 3;
    console.log(maxHouses);
    const totalOfCars = 10;
    console.log(totalOfCars);

    // *********** FUNCIONES
    //MAL
    function createUserIfNotExists(){ return 0; };
    function updateUserIfNotEmpty(){ return 0; };
    function sendEmailIfFieldsValid(){ return 0; };
    //BIEN - VERBO + SUSTANTIVO
    function createUser(){ return 0; };
    function updateUser(){ return 0; };
    function sendEmail(){ return 0; };
})();