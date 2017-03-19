function Warrior({name, health, demage, defense}) {
    this.name = name;
    this.health = health;
    this.demage = demage;
    this.defense = defense;
    this.rate = 1;
}

Warrior.prototype.hit = function(enemy) {
    let demage = this.demage * this.rate;
    enemy.attack(demage);
}

Warrior.prototype.attack = function(demage) {
    this.health -= demage * this.rate;
}

function setTypeDecorator (warrior , type) {
    if (!warrior.hasOwnProrty("type")) {
        warrior["type"] = type;
        warrior.rate += 0.1;
    }
}

function setDoubleDemage(warrior) {
    warrior.demage *= 2;
    warrior.rate *= 1.5;
}

function setDoubleHealth(warrior) {
    warrior.health *= 2;
    warrior.rate += 0.5;
}