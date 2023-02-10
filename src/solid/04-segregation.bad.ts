interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
    swim(): void;
}

class Tucan implements Bird
{
    public fly() {
        return;
    }

    public eat() {
        return;
    }

    public run() {
        return;
    }

    public swim() {
        throw new Error('Esta ave no nada');
    }
}

// Colibri
class Humminbird implements Bird
{
    public fly() {
        return;
    }

    public eat() {
        return;
    }

    public run() {
        throw new Error('Esta ave no corre');
    }

    public swim() {
        throw new Error('Esta ave no nada');
    }
}

// Avestruz
class Ostrich implements Bird
{
    // El avestruz no vuela
    public fly() {
        throw new Error('Esta ave no vuela');
    }

    public eat() {
        return;
    }

    public run() {
        return;
    }

    public swim() {
        throw new Error('Esta ave no nada');
    }
}

// Pinguino
class Penguin implements Bird
{
    // El avestruz no vuela
    public fly() {
        throw new Error('Esta ave no vuela');
    }

    public eat() {
        return;
    }

    public run() {
        throw new Error('Esta ave no corre');
    }

    public swim() {
        return;
    }
}