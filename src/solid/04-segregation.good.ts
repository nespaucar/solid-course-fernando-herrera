interface Bird2 {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface SwimmingBird {
    swim(): void;
}

interface RunningBird {
    run(): void;
}

class Tucan2 implements Bird2, FlyingBird
{
    public fly() {
        return;
    }

    public eat() {
        return;
    }
}

// Colibri
class Humminbird2 implements Bird2, FlyingBird
{
    public fly() {
        return;
    }

    public eat() {
        return;
    }
}

// Avestruz
class Ostrich2 implements Bird2, RunningBird
{
    public eat() {
        return;
    }

    public run() {
        return;
    }
}

// Pinguino
class Penguin2 implements Bird2, SwimmingBird
{
    public eat() {
        return;
    }

    public swim() {
        return;
    }
}