function extendMixin(classPrototype) {
    let mixinArray = [].slice.call(arguments, 1);

    for(let i = 0, len = mixinArray.length; i < len ; i++) {
        let currentMixin = mixinArray[i];

        for(let key in currentMixin) {
            if (!classPrototype.hasOwnProperty[key]) {
                classPrototypep[key] = currentMixin[key];
            }
        }
    }
}

function Warrior({name, demage, health, type}) {
    this.name = name;
    this.deamge = demage;
    this.health = health
}

let fightMixin = {
    attack(enemy) {
        if (enemy.isLive()) {
            enemy.health -= this.deamge;
        }
    },
    isLive() {
        return this.health > 0;
    },
    getHealth() {
        this.health += 50;
    }
};

let typeMixin = {
    greeting() {
        console.log(`Hi, I'm ${this.type}`);
    },
    setNewType(type) {
        this.type = type;
    },
    getBonus() {
        switch (this.type.toLowerCase()) {
            case "monster": {
                this.health += 50;
                break;
            }
            case "champion": {
                this.health += 25;
                break;
            }
            default: {
                this.health += 10;
            }
        }
    }
};


extendMixin(Warrior.prototype, fightMixin, typeMixin);