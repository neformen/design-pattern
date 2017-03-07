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