var Tower = class{
    static price = 350;
    constructor(assets){
        this.images = assets.tower1.images;
        this.bulletImages = assets.tower1.bulletImages;
        this.image = this.images[0];
        this.placementPosition = new Vector2(0, 0);
        this.placementRadius = 30;
        this.position = this.placementPosition.copy();
        this.angle = 0;
        this.direction = new Vector2(0, 0);
        this.width = 50;
        this.height = 50;
        this.damageDealt = 0;
        this.name = "Soldier";
        this.range = 150;
        this.maxAmmo = 3;
        this.ammo = this.maxAmmo;
        

        this.upgradeName = "";
        this.reload = 1500;
        this.lastAttacked = 0;
        this.fireRate = 50;
        this.upgradeCost = 300;
        this.sellValue = 100;
        this.target = null;
        this.tier = 0;

    }

    draw(ctx, deltaTime){
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image.getImage(), -this.width/2, -this.height/2, this.width, this.height);
        ctx.restore();
    }

    drawPlacementRange(ctx, deltaTime, valid = true){
        ctx.save();
        ctx.globalAlpha = 0.4;
        ctx.translate(this.position.x, this.position.y);
        ctx.beginPath();
        ctx.fillStyle = valid?"blue":"red";
        ctx.arc(0,0, this.placementRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }
    drawRange(ctx, deltaTime){
        ctx.save();
        ctx.globalAlpha = 0.4;
        ctx.translate(this.position.x, this.position.y);
        ctx.beginPath();
        ctx.fillStyle = "gray";
        ctx.arc(0,0, this.range, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }
    update(world){
        var now = performance.now();

        this.target = null;
        var targetDistance = -Infinity;
        for(var enemy of world.enemies){
            var distance = this.position.distanceSquared(enemy.position);
            if(distance < this.range**2 && enemy.distanceTraveled > targetDistance){
                this.target = enemy;
                targetDistance = enemy.distanceTraveled;
            }
        }

        if(this.target && this.ammo != 0){
            this.angle = Math.atan2(this.target.position.y - this.position.y, this.target.position.x - this.position.x);
            this.direction = (new Vector2(this.target.position.x - this.position.x, this.target.position.y - this.position.y)).normalize();
            if(now - this.lastAttacked > this.fireRate && this.ammo > 0){
                this.lastAttacked = now;
                this.ammo--;
                world.bullets.push(this.makeBullet());
            }
        }
        else if(now - this.lastAttacked > this.reload && this.ammo < this.maxAmmo){
            this.ammo = this.maxAmmo;
        }
    }

    makeBullet(){
        var bullet = new Bullet();

        bullet.position = this.position.copy();
        bullet.owner = this;
        bullet.target = this.target;
        bullet.angle = this.angle;
        bullet.splash = false;
        bullet.direction = this.direction.copy();
        bullet.image = this.bulletImages[this.tier];
        bullet.width = 10;
        bullet.height = 10;
        bullet.radius = 10;
        bullet.pierce = 1;
        bullet.speed = 15;
        bullet.timeLeft = 100;
        switch(this.tier){
            case 0:
                bullet.damage = 1;
                break;
            case 1:
                bullet.damage = 2;
                break;
            case 2:
                bullet.damage = 2;
                break;
            case 3:
                bullet.damage = 5;
                bullet.pierce = 2;
                break;
            case 4:
                bullet.damage = 12;
                bullet.pierce = 3;
                break;
            default:
                break;
        }
        return bullet;
    }

    upgrade(){
        this.tier++;
        this.image = this.images[this.tier];
        switch(this.tier){
            case 1:
                this.upgradeCost = 600;
                this.sellValue = 300;
                break;
            case 2:
                this.range = 200;
                this.upgradeCost = 750;
                this.sellValue = 700;
                this.maxAmmo = 6;
                this.reload = 1000;
                break;
            case 3:
                this.upgradeCost = 1000;
                this.sellValue = 1200;
                break;
            case 4:
                this.range = 350;
                this.upgradeCost = -1;
                this.sellValue = 3000;
                break;
            default:
                break;
        }
    }
    getUpgradeName(){
        switch(this.tier){
            case 0:
                return "Damage from 1 -> 2";
            case 1:
                return "x2 guns, faster reload, more range";
            case 2:
                return "Damage from 2 -> 5, and pierce from 1 -> 2";
            case 3:
                return "More range and damage from 5 -> 12, and pierce from 2 -> 3";
            case 4:
                return "MAX LEVEL";
        }
    }
}



var Tank = class extends Tower{
    static price = 1500;
    constructor(assets){
        super(assets);
        this.images = assets.tower2.images;
        this.bulletImages = assets.tower2.bulletImages;
        this.image = this.images[0];
        this.placementRadius = 40;
        this.width = 50;
        this.height = 50;
        this.name = "Tank";
        this.range = 300;
        this.maxAmmo = 1;
        this.ammo = this.maxAmmo;
        this.reload = 4000;
        this.sellValue = 200;
        this.upgradeCost = 700;
        this.fireRate = 0;
    }

    makeBullet(){
        var bullet = new Bullet();

        bullet.position = this.position.copy();
        bullet.owner = this;
        bullet.target = this.target;
        bullet.angle = this.angle;
        bullet.splash = true;
        bullet.direction = this.direction.copy();
        bullet.image = this.bulletImages[this.tier];
        bullet.width = 10;
        bullet.height = 10;
        bullet.radius = 10;
        bullet.pierce = 1;
        bullet.speed = 15;
        bullet.timeLeft = 100;
        switch(this.tier){
            case 0:
                bullet.damage = 5;
                bullet.blastRadius = 75;
                break;
            case 1:
                bullet.damage = 10;
                bullet.blastRadius = 75;
                break;
            case 2:
                bullet.damage = 15;
                bullet.blastRadius = 75;
                break;
            case 3:
                bullet.damage = 25;
                bullet.blastRadius = 120;
                break;
            case 4:
                bullet.damage = 30;
                bullet.blastRadius = 150;
                break;
            default:
                break;
        }
        return bullet;
    }
    upgrade(){
        this.tier++;
        this.image = this.images[this.tier];
        switch(this.tier){
            case 1:
                this.upgradeCost = 1800;
                this.sellValue = 600;
                break;
            case 2:
                this.upgradeCost = 3000;
                this.sellValue = 1000;
                this.reload = 1500;
                break;
            case 3:
                this.upgradeCost = 7500;
                this.sellValue = 1800;
                this.range = 400;
                break;
            case 4:
                this.range = 400;
                this.upgradeCost = -1;
                this.sellValue = 6000;
                this.maxAmmo = 2;
                this.fireRate = 300;
                break;
            default:
                break;
        }
    }
    getUpgradeName(){
        switch(this.tier){
            case 0:
                return "Damage from 5 -> 10";
            case 1:
                return "Damage from 10 -> 15 and faster reload";
            case 2:
                return "Damage from 15 -> 25 and bigger blast radius";
            case 3:
                return "Shoots twice, more range, and damage from 25 -> 30";
            case 4:
                return "MAX LEVEL";
        }
    }
}

var Minigunner = class extends Tower{
    static price = 1300;
    constructor(assets){
        super(assets);
        this.images = assets.tower3.images;
        this.bulletImages = assets.tower3.bulletImages;
        this.image = this.images[0];
        this.placementRadius = 40;
        this.width = 50;
        this.height = 50;
        this.range = 300;
        this.name = "Minigunner";
        this.maxAmmo = 1;
        this.ammo = this.maxAmmo;
        this.reload = 100;
        this.sellValue = 200;
        this.upgradeCost = 400;
        this.fireRate = 0;
    }

    makeBullet(){
        var bullet = new Bullet();

        bullet.position = this.position.copy();
        bullet.owner = this;
        bullet.target = this.target;
        bullet.angle = this.angle;
        bullet.splash = false;
        bullet.direction = this.direction.copy();
        bullet.image = this.bulletImages[this.tier];
        bullet.width = 10;
        bullet.height = 10;
        bullet.radius = 10;
        bullet.pierce = 1;
        bullet.speed = 15;
        bullet.timeLeft = 100;
        switch(this.tier){
            case 0:
                bullet.damage = 1;
                break;
            case 1:
                bullet.damage = 2;
                break;
            case 2:
                bullet.damage = 3;
                break;
            case 3:
                bullet.damage = 6;
                break;
            case 4:
                bullet.damage = 12;
                break;
            default:
                break;
        }
        return bullet;
    }
    upgrade(){
        this.tier++;
        this.image = this.images[this.tier];
        switch(this.tier){
            case 1:
                this.upgradeCost = 2800;
                this.sellValue = 800;
                this.reload = 60;
                break;
            case 2:
                this.upgradeCost = 4500;
                this.sellValue = 1000;
                this.reload = 30;
                this.range = 400;
                break;
            case 3:
                this.upgradeCost = 8000;
                this.sellValue = 3000;
                
                this.reload = 0;
                break;
            case 4:
                this.range = 500;
                this.upgradeCost = -1;
                this.sellValue = 7000;
                break;
            default:
                break;
        }
    }
    getUpgradeName(){
        switch(this.tier){
            case 0:
                return "Damage from 1 -> 2";
            case 1:
                return "x1.33 range and damage from 2 -> 3";
            case 2:
                return "Damage from 3 -> 6";
            case 3:
                return "x1.25 range and damage from 6 -> 12";
            case 4:
                return "MAX LEVEL";
        }
    }
}


var Bullet = class {
    constructor(){
        this.image = 0;
        this.owner = 0;
        this.target = 0;
        this.speed = 0;
        this.position = new Vector2(0, 0);
        this.angle = 0;
        this.direction = new Vector2(0, 0);
        this.width = 0;
        this.height = 0;
        this.timeLeft = 0;
        this.splash = false;
        this.velocity = new Vector2(0,0);
        this.blastRadius = 0;
        this.radius = 0;
        this.damage = 0;
        this.pierce = 1;
        this.hitalready = [];
    }
    update(world){
        this.velocity = this.direction.scale(this.speed);
        this.position.addTo(this.velocity);
        this.timeLeft--;
        var hit = false;
        for(var enemy of world.enemies){
            if(this.hitalready.includes(enemy)){
                continue;
            }
            if(this.position.distanceSquared(enemy.position) < (this.radius + enemy.radius)**2){
                hit = true;
                
                this.pierce--;
                if(!this.splash || this.pierce > 0){
                    
                    if(this.pierce){
                        this.hitalready.push(enemy);
                    }
                    enemy.health -= this.damage;
                    this.owner.damageDealt += this.damage;
                }
                if(!this.pierce){
                    break;
                }
            }
        }
        if(this.splash && this.pierce == 0){
            for(var enemy of world.enemies){
                if(this.position.distanceSquared(enemy.position) < this.blastRadius**2){
                    enemy.health -= this.damage;
                    this.owner.damageDealt += this.damage;
                }
            }
            var exp = [this.position, this.blastRadius];
            world.explosions.push(exp);
            setTimeout(function(){world.explosions.splice(world.explosions.indexOf(exp), 1);}, 100);
        }
        if(this.pierce == 0){
            return true;
        }
        if(this.timeLeft <= 0){
            return true;
        }
        return false;
    }

    draw(ctx, deltaTime){
        ctx.save();
        ctx.translate(this.position.x + this.velocity.scale(deltaTime).x, this.position.y + this.velocity.scale(deltaTime).y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image.getImage(), -this.width/2, -this.height/2, this.width, this.height);
        ctx.restore();
    }
}