var Enemy = class{
    constructor(){
        this.image = 0;
        this.position = new Vector2(0, 0);
        this.direction = new Vector2(0, 0);
        this.width = 0;
        this.height = 0;
        this.speed = 0;
        this.health = 0;
        this.maxHealth = 0;
        this.direction = new Vector2(0,0);
        this.velocity = new Vector2(0,0);
        this.radius = 0;
        this.path = 0;
        this.distanceTraveled = 0;
        this.value = 0;
    }

    draw(ctx, deltaTime){
        ctx.save();
        ctx.translate(this.position.x + this.velocity.scale(deltaTime).x, this.position.y + this.velocity.scale(deltaTime).y);
        var scaleX = this.velocity.x < 0 ? -1 : 1;
        ctx.save();
        ctx.scale(scaleX, 1);
        ctx.drawImage(this.image.getImage(), -this.width/2, -this.height/2, this.width, this.height);
        ctx.restore();
        if(this.health > 0){
            ctx.fillStyle = "gray";
            ctx.fillRect(-this.width/2 - 10, -this.height/2 - 15, this.width + 20, 5);
            ctx.fillStyle = "red";
            ctx.fillRect(-this.width/2 - 10, -this.height/2 - 15, this.health/this.maxHealth*(this.width + 20), 5);
            ctx.drawText(this.health + "/" + this.maxHealth, new Vector2(0,-this.height/2 - 20), 10, "black", "Arial");
        }
        ctx.restore();

    }
    
    update(world){
        var previousPosition = this.position.copy();
        var distance = world.paths[this.path].subtract(this.position.add(new Vector2(0,this.height/2)));
        var distanceMagnitude = distance.magnitude();
        
        if(distanceMagnitude > this.speed){
            this.position.addTo(distance.normalize().scale(this.speed));
        }
        else{
            this.position = world.paths[this.path].copy();
            this.position.y -= this.height/2;
            this.path += 1;

            if(this.path >= world.paths.length){
                world.health -= this.health;
                world.money += this.value;
                return true;
            }
        }
        this.velocity = this.position.subtract(previousPosition);
        this.distanceTraveled += this.velocity.magnitude();
        if(this.health <= 0){
            world.money += this.value;
            return true;
        }
        return false;
    }
}


var makeBasicEnemy = function(assets, world){
    var e = new Enemy();
    e.image = assets.basicEnemy.image;
    e.position = world.paths[0].copy();
    e.width = 30;
    e.height = 60;
    e.speed = 1.5;
    e.health = 10;
    e.maxHealth = e.health;
    e.radius = 30;
    e.value = 30;
    world.enemies.push(e);
}




var makeTankyEnemy = function(assets, world){
    var e = new Enemy();
    e.image = assets.tankyEnemy.image;
    e.position = world.paths[0].copy();
    e.width = 30;
    e.height = 60;
    e.speed = 1;
    e.health = 60;
    e.maxHealth = e.health;
    e.radius = 30;
    e.value = 80;
    world.enemies.push(e);
}

var makeBasicBossEnemy = function(assets, world){
    var e = new Enemy();
    e.image = assets.basicBossEnemy.image;
    e.position = world.paths[0].copy();
    e.width = 30;
    e.height = 60;
    e.speed = 0.9;
    e.health = 500;
    e.maxHealth = e.health;
    e.radius = 40;
    e.value = 140;
    world.enemies.push(e);
}

var makeMediumBossEnemy = function(assets, world){
    var e = new Enemy();
    e.image = assets.mediumBossEnemy.image;
    e.position = world.paths[0].copy();
    e.width = 40;
    e.height = 60;
    e.speed = 0.8;
    e.health = 3000;
    e.maxHealth = e.health;
    e.radius = 40;
    e.value = 280;
    world.enemies.push(e);
}

var makeFinalBossEnemy = function(assets, world){
    var e = new Enemy();
    e.image = assets.finalBossEnemy.image;
    e.position = world.paths[0].copy();
    e.width = 50;
    e.height = 80;
    e.speed = 0.6;
    e.health = 25000;
    e.maxHealth = e.health;
    e.radius = 40;
    e.value = Infinity;
    world.enemies.push(e);
}

var makeFastEnemy = function(assets, world){
    var e = new Enemy();
    e.image = assets.fastEnemy.image;
    e.position = world.paths[0].copy();
    e.width = 20;
    e.height = 40;
    e.speed = 3.5;
    e.health = 12;
    e.maxHealth = e.health;
    e.radius = 25;
    e.value = 40;
    world.enemies.push(e);
}



var makeTankyFastEnemy = function(assets, world){
    var e = new Enemy();
    e.image = assets.fastEnemy.image;
    e.position = world.paths[0].copy();
    e.width = 30;
    e.height = 60;
    e.speed = 2.5;
    e.health = 350;
    e.maxHealth = e.health;
    e.radius = 30;
    e.value = 120;
    world.enemies.push(e);
}
