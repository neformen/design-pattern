function Warrior (object) {
	if (object) {
		this.name = object.name;
		this.attack = object.attack;
		this.hitpoints = object.hitpoints;
		this.currentHitpoints = object.hitpoints;
	}
}

Warrior.prototype.getHitpoints = function() {
	return this.currentHitpoints;
};

Warrior.prototype.setHitpoints = function(newHitpoints) {
	if (newHitpoints < this.hitpoints) {
		 this.currentHitpoints = newHitpoints;
	} else {
		this.currentHitpoints = this.hitpoints;
	}
};

Warrior.prototype.getTotalHitpoins = function() {
	return this.hitpoints;
};

Warrior.prototype.setTotalHitpoints = function(newHitpoints) {
	if (newHitpoints > 0 ) {
		if (newHitpoints < this.currentHitpoints ) {
			this.setHitpoints(newHitpoints);
			this.hitpoints = newHitpoints;
		} else {
			this.hitpoints = newHitpoints;
		}
	} 
};

Warrior.prototype.getAttack = function() {
	return this.attack;
};

Warrior.prototype.setAttack = function(newAttack) {
	if (newAttack > 0) {
		this.attack = newAttack;
	}
};

Warrior.prototype.isAlive = function() {
	return this.getHitpoints() > 0;
};

Warrior.prototype.toHitMe = function(demage) {
	if ((this.getHitpoints() - demage) > 0) {
		this.setHitpoints(this.getHitpoints() - demage);
	} else {
		this.setHitpoints(0);
	}
};

Warrior.prototype.getBonus = function(enemy) {
};

Warrior.prototype.getDemage = function() {
	return this.getAttack();
};

Warrior.prototype.fight = function(enemy) {
	if ((enemy instanceof Warrior) && enemy.isAlive() && this.isAlive()) {
		enemy.toHitMe(this.getDemage());
		if (!enemy.isAlive()) {
			this.getBonus(enemy);
		}
	}
};

function Champion () {
	Warrior.apply(this, arguments);
	this.block = false;
}

Champion.prototype = new Warrior;

Champion.prototype.rest = function() {
	if (this.isAlive()) {
		if ((this.getHitpoints() + 5) > this.getTotalHitpoins()) {
			this.setHitpoints(this.getTotalHitpoins());
		} else {
			this.setHitpoints(this.getHitpoints() + 5);
		}
	}
};


Champion.prototype.getDefence = function() {
	var _block = this.block;
	this.block = false;
	return _block;
};

Champion.prototype.defence = function() {
	this.block = true;
};

Champion.prototype.toHitMe = function(demage) {
	if (!this.getDefence()) {
		if ((this.getHitpoints() - demage) > 0) {
			this.setHitpoints(this.getHitpoints() - demage);
		} else {
			this.setHitpoints(0);
		}
	}
};

Champion.prototype.getBonus = function() {
	this.setAttack(this.getAttack() + 1);
};


function Monster () {
	Warrior.apply(this, arguments);
	this.numbersOfEnrage = 0;
}

Monster.prototype = new Warrior;

Monster.prototype.enrage = function() {
	this.numbersOfEnrage = 2;
};

Monster.prototype.getEnrage = function() {
	var _result = 0;
	if (this.numbersOfEnrage !=0) {
		var _result = this.numbersOfEnrage--; 
	}
	return _result;
};

Monster.prototype.getDemage = function() {
	var _result = this.getAttack();
	if (this.getEnrage()) {
		_result *= 2;
	}
	return _result;
};

Monster.prototype.getBonus = function(enemy) {
	this.setTotalHitpoints(this.getTotalHitpoins() + Math.floor(enemy.getTotalHitpoins() * 0.1));
	this.setHitpoints(this.getHitpoints() + Math.floor(enemy.getTotalHitpoins() * 0.25));
};
