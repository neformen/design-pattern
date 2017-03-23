function Monster({name, health}) {
    this.name = name;
    this.health = health;
}

Monster.prototype.srcImage = 'Big image here';

Monster.prototype.view = 'Big view here';

let monster1 = new Monster({name: 'Alex', health: 100});

let monster2 = new Monster({name: 'Vasyl', health: 10});

let monster3 = new Monster({name: 'Taras', health: 1000});

let monster4 = new Monster({name: 'Ivan', health: 100});



let monster5 = new Monster({name: 'Oleg', health: 1});

monster5.srcImage = 'another image';

