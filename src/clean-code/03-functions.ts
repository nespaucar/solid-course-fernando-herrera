(() => {

    // función para obtener información de una película por Id 

    //MAL
    function getAllMovies( movieId: string ) {
        console.log({ movieId });
    }
    //BIEN
    function getMoviesById( id: string ) {
        console.log({ id });
    }

    //MAL
    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    //MAL
    function getAllMovieActors( id: string ) {
        console.log({ id });
    }
    //BIEN
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    //MAL
    // funcion para obtener el bio del actor por el id
    function getUsuario( ActorId: string ) {
        console.log({ ActorId });
    }
    //BIEN
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    //MAL
    // Crear una película
    function movie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }
    //BIEN
    interface Movie {
        cast:        string[],
        description: string,
        rating:      number,
        title:       string
    }
    function createMovie({cast, description, rating, title}: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    //MAL
    function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean { 
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor' + birthdate);
        return true;
    }
    //BIEN
    function createActor(fullName: string, birthdate: Date): boolean { 
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor 2' + birthdate);
        return true;
    }

    const actor = createActor('Nestor', new Date());
    console.log(actor);

    // CONTINUACION ...

    //MAL
    const getPayAmountBad = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        return result;
    }

    const amount = getPayAmountBad({});
    console.log(amount);

    //BIEN
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => 
    {
        if (isDead) return 1500;
        if (isSeparated) return 2500;
        return isRetired ? 3000 : 4000;
    }

    const amount2 = getPayAmount({});
    console.log(amount2);
})();
