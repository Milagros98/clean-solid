(() => {

    // interface
    interface Movie{
        cast: string[]
        description: string, 
        rating: number, 
        title: string, 
    }

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    function createMovie(newMovie : Movie) {
        console.log(newMovie);
    }

    // Crea un nuevo actor
    function createActor( fullName: string ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    // continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {

        if ( isDead ) return 1500;

        if ( isSeparated ) return 2500;

        return ( isRetired) ? 3000 : 400;
                         
    }
        

})();