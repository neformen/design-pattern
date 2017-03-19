function Monster({name, demage, health, mana}) {
    this.name = name;
    this.deamge = demage;
    this.health = health;
    this.mana = mana;
}

function Champion({name,bonus, demage, defense}) {
    this.name = name;
    this.bonus = bonus;
    this.demage = demage;
    this.defense = defense;
    this.health = 100;
}

function SimpleWarrior({name, demage, health}) {
    this.name = name;
    this.deamge = demage;
    this.health = health;
}

function Warlock({name, health, mana, hasBaculus}) {
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.demage = hasBaculus ? 100 : 10;
}


let factoryCharacter = {
    create(params) {
        let Constr = SimpleWarrior;

        switch (params["type"].toLowerCase()) {
            case "moster": {
                Constr = Monster;
                break;
            }
            case "champion": {
                Constr = Champion;
                break;
            }
            case "warlock": {
                Constr = Warlock;
                break
            }
        }

        return new Constr(params);
    }
}