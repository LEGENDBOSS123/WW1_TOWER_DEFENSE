const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var deltaTime = 0;
var previousFrameTime = performance.now();

CanvasRenderingContext2D.prototype.drawText = function(text, v, s = 30, fs = "black", f="Arial", ta = "center"){
    this.fillStyle = fs;
    this.font = s + "px " + f;
    this.textAlign = ta;
    this.fillText(text, v.x, v.y);
}

var fps = 60;
var roundstart = false;
var rounds = [];
var currentRound = 0;
var roundMoney = 0;
var win = false;
var sleep = async function(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

//round 1
rounds.push(async function(){
    roundstart = true;
    roundMoney = 200;
    for(var i = 0; i < 3; i++){
        makeBasicEnemy(assets, world);
        await sleep(750);
    }
    roundstart = false;
});
//round 2
rounds.push(async function(){
    roundstart = true;
    roundMoney = 250;
    for(var i = 0; i < 5; i++){
        makeBasicEnemy(assets, world);
        await sleep(750);
    }
    roundstart = false;
});
//round 3
rounds.push(async function(){
    roundstart = true;
    roundMoney = 380;
    for(var i = 0; i < 5; i++){
        makeBasicEnemy(assets, world);
        await sleep(750);
    }
    for(var i = 0; i < 3; i++){
        makeFastEnemy(assets, world);
        await sleep(750);
    }
    roundstart = false;
});
//round 4
rounds.push(async function(){
    roundstart = true;
    roundMoney = 400;
    for(var i = 0; i < 5; i++){
        makeTankyEnemy(assets, world);
        await sleep(500);
    }
    for(var i = 0; i < 5; i++){
        makeFastEnemy(assets, world);
        await sleep(500);
    }
    roundstart = false;
});
//round 5
rounds.push(async function(){
    roundstart = true;
    roundMoney = 400;
    for(var i = 0; i < 20; i++){
        makeBasicEnemy(assets, world);
        await sleep(200);
    }
    roundstart = false;
});
//round 6
rounds.push(async function(){
    roundstart = true;
    roundMoney = 350;
    for(var i = 0; i < 15; i++){
        makeBasicEnemy(assets, world);
        makeFastEnemy(assets, world);
        await sleep(300);
    }
    roundstart = false;
});
//round 7
rounds.push(async function(){
    roundstart = true;
    roundMoney = 400;
    for(var i = 0; i < 20; i++){
        makeBasicEnemy(assets, world);
        await sleep(750);
    }
    for(var i = 0; i < 20; i++){
        makeTankyEnemy(assets, world);
        await sleep(750);
    }
    roundstart = false;
});
//round 8
rounds.push(async function(){
    roundstart = true;
    roundMoney = 500;
    for(var i = 0; i < 30; i++){
        makeBasicEnemy(assets, world);
        makeTankyEnemy(assets, world);
        makeFastEnemy(assets, world);
        await sleep(300);
    }
    roundstart = false;
});
//round 9
rounds.push(async function(){
    roundstart = true;
    roundMoney = 500;
    for(var i = 0; i < 50; i++){
        makeFastEnemy(assets, world);
        makeTankyEnemy(assets, world);
        await sleep(100);
    }
    roundstart = false;
});
//round 10
rounds.push(async function(){
    roundstart = true;
    roundMoney = 500;
    for(var i = 0; i < 25; i++){
        makeBasicEnemy(assets, world);
        if(i%3==0){
            makeFastEnemy(assets, world);
        }
        await sleep(300);
    }
    await sleep(1000);
    makeBasicBossEnemy(assets, world);
    roundstart = false;
});
//round 11
rounds.push(async function(){
    roundstart = true;
    roundMoney = 500;
    for(var i = 0; i < 20; i++){
        makeTankyEnemy(assets, world);
        makeBasicEnemy(assets, world);
        await sleep(300);
    }
    makeBasicBossEnemy(assets, world);
    await sleep(2000);
    makeBasicBossEnemy(assets, world);
    await sleep(2000);
    for(var i = 0; i < 20; i++){
        makeFastEnemy(assets, world);
        await sleep(300);
    }
    roundstart = false;
});
//round 12
rounds.push(async function(){
    roundstart = true;
    roundMoney = 800;
    for(var i = 0; i < 20; i++){
        makeFastEnemy(assets, world);
        await sleep(600);
    }
    await sleep(2000);
    makeBasicBossEnemy(assets, world);
    await sleep(1000);
    makeBasicBossEnemy(assets, world);
    await sleep(1000);
    makeBasicBossEnemy(assets, world);
    await sleep(1000);
    makeBasicBossEnemy(assets, world);
    await sleep(1000);
    makeBasicBossEnemy(assets, world);
    roundstart = false;
});
//round 13
rounds.push(async function(){
    roundstart = true;
    roundMoney = 800;
    for(var i = 0; i < 30; i++){
        makeFastEnemy(assets, world);
        makeTankyEnemy(assets, world);
        await sleep(200);
    }
    makeTankyFastEnemy(assets, world);
    roundstart = false;
});
//round 14
rounds.push(async function(){
    roundstart = true;
    roundMoney = 800;
    for(var i = 0; i < 50; i++){
        makeTankyEnemy(assets, world);
        makeFastEnemy(assets, world);
        await sleep(100);
    }
    roundstart = false;
});
//round 15
rounds.push(async function(){
    roundstart = true;
    roundMoney = 1000;
    for(var i = 0; i < 20; i++){
        makeFastEnemy(assets, world);
        await sleep(200);
    }
    await sleep(1000);
    for(var i = 0; i < 5; i++){
        makeTankyFastEnemy(assets, world);
        await sleep(500);
    }
    roundstart = false;
});
//round 16
rounds.push(async function(){
    roundstart = true;
    roundMoney = 1300;
    for(var i = 0; i < 5; i++){
        makeBasicBossEnemy(assets, world);
        makeTankyFastEnemy(assets, world);
        makeFastEnemy(assets, world);
        await sleep(200);
        makeFastEnemy(assets, world);
        await sleep(200);
        makeTankyFastEnemy(assets, world);
        makeFastEnemy(assets, world);
        await sleep(200);
        makeTankyFastEnemy(assets, world);
        makeFastEnemy(assets, world);
        await sleep(200);
        makeFastEnemy(assets, world);
        await sleep(400);
    }
    roundstart = false;
});
//round 17
rounds.push(async function(){
    roundstart = true;
    roundMoney = 1400;
    for(var i = 0; i < 20; i++){
        makeBasicBossEnemy(assets, world);
        if(i%2==0){
            makeTankyFastEnemy(assets, world);
        }
        await sleep(1000);
    }
    makeMediumBossEnemy(assets, world);
    roundstart = false;
});
//round 18
rounds.push(async function(){
    roundstart = true;
    roundMoney = 5000;
    makeMediumBossEnemy(assets, world);
    await sleep(3000);
    makeMediumBossEnemy(assets, world);
    await sleep(3000);
    makeMediumBossEnemy(assets, world);
    await sleep(3000);
    makeMediumBossEnemy(assets, world);
    await sleep(3000);
    makeMediumBossEnemy(assets, world);
    await sleep(3000);
    makeMediumBossEnemy(assets, world);
    await sleep(3000);
    makeMediumBossEnemy(assets, world);
    roundstart = false;
});
//round 19
rounds.push(async function(){
    roundstart = true;
    roundMoney = 2000;
    for(var i = 0; i < 4; i++){
        await sleep(300);
        for(var i2 = 0; i2 < 15; i2++){
            makeFastEnemy(assets, world);
            await sleep(300);
        }
        await sleep(300);
        for(var i2 = 0; i2 < 15; i2++){
            makeBasicBossEnemy(assets, world);
            await sleep(300);
        }
        await sleep(300);
        for(var i2 = 0; i2 < 3; i2++){
            makeTankyFastEnemy(assets, world);
            await sleep(300);
            makeBasicBossEnemy(assets, world);
            await sleep(300);
            makeMediumBossEnemy(assets, world);
        }
        await sleep(5000);
    }
    roundstart = false;
});
//round 20
rounds.push(async function(){
    roundstart = true;
    roundMoney = 0;
    makeFinalBossEnemy(assets, world);
    roundstart = false;
});


var assets = {
    tower1: {
        images: [new ImageHolder("./soldier-0.png"),
        new ImageHolder("./soldier-1.png"),
        new ImageHolder("./soldier-2.png"),
        new ImageHolder("./soldier-3.png"),
        new ImageHolder("./soldier-4.png")
        ],
        bulletImages: [0,0,0,0,0].fill(new ImageHolder("./bullet.png"))
    },
    tower2: {
        images: [new ImageHolder("./tank-0.png"),
        new ImageHolder("./tank-1.png"),
        new ImageHolder("./tank-2.png"),
        new ImageHolder("./tank-3.png"),
        new ImageHolder("./tank-4.png")
        ],
        bulletImages: [0,0,0,0,0].fill(new ImageHolder("./tank-bullet.png"))
    },
    tower3: {
        images: [new ImageHolder("./minigunner-0.png"),
        new ImageHolder("./minigunner-1.png"),
        new ImageHolder("./minigunner-2.png"),
        new ImageHolder("./minigunner-3.png"),
        new ImageHolder("./minigunner-4.png")
        ],
        bulletImages: [0,0,0,0,0].fill(new ImageHolder("./bullet.png"))
    },
    basicEnemy: {
        image: new ImageHolder("./basicEnemy.png")
    },
    fastEnemy: {
        image: new ImageHolder("./fastEnemy.png")
    },
    basicBossEnemy: {
        image: new ImageHolder("./basicBossEnemy.png")
    },
    tankyEnemy: {
        image: new ImageHolder("./tankyEnemy.png")
    },
    mediumBossEnemy: {
        image: new ImageHolder("./mediumBossEnemy.png")
    },
    finalBossEnemy: {
        image: new ImageHolder("./finalBossEnemy.png")
    }
};

document.getElementById("close").onclick = function(e){
    targetTower = null;
    document.getElementById("information_window_container").style.display = "none";
}


var isValidPosition = function(world, tower){
    for(var t of world.towers){
        if(t.position.distanceSquared(tower.position) < (t.placementRadius + tower.placementRadius) ** 2){
            return false;
        }
    }
    for(var p = 0; p < world.paths.length-1; p++){
        var start = world.paths[p];
        var end = world.paths[p+1];
        var distance = end.subtract(start);
        var distanceMagnitude = distance.magnitude();
        var distanceVector = distance.normalize();
        for(var i = 0; i < distanceMagnitude; i += 1){
            var point = start.add(distanceVector.scale(i));
            if(tower.position.distanceSquared(point) < (tower.placementRadius + 15) ** 2){
                return false;
            }
        }
    }
    return true;
}

var getTowerByID = function (id) {
    switch(id){
        case 0:
            return Tower;
        case 1:
            return Tank;
        case 2:
            return Minigunner;
    }
}

var placeTower = function (v, towerID) {
    var t = new (getTowerByID(towerID))(assets);
    t.position = v.copy();
    t.placementPosition = v;
    if(isValidPosition(world, t)){
            
        }
    t.placementPosition = v;
    t.position = v.copy();
    world.towers.push(t);
}


var setPlacingTower = function (towerID) {
    if(placingTowerID != towerID){
        placingTowerID = towerID;
        placingTower = new (getTowerByID(towerID))(assets);
    }
}




var placingTower = null;
var placingTowerID = -1;
var isPlacing = false;
var placingValid = true;
var world = {};

var targetTower = null;


world.enemies = [];
world.towers = [];
world.bullets = [];
world.paths = [];
world.explosions = [];
world.money = 1000;
world.paths.push(new Vector2(-100,100));
world.paths.push(new Vector2(700,100));
world.paths.push(new Vector2(700,300));
world.paths.push(new Vector2(150,300));
world.paths.push(new Vector2(150,500));
world.paths.push(new Vector2(800,500));

world.health = 100;



document.getElementById("upgrade").onclick = function(e){
    if(targetTower != null){
        if(world.money < targetTower.upgradeCost || targetTower.upgradeCost == -1){
            return;
        }
        world.money -= targetTower.upgradeCost;
        targetTower.upgrade();
    }
}

document.getElementById("sell").onclick = function(e){
    if(targetTower != null){
        world.money += targetTower.sellValue;
        world.towers.splice(world.towers.indexOf(targetTower), 1);
        targetTower = null;
        document.getElementById("close").click();
    }
}

canvas.ondragover = function (e) {
    isPlacing = false;
    var v = toCanvasCoords(new Vector2(e.clientX, e.clientY), canvas);
    if (v.x < 0 || v.x > canvas.width || v.y < 0 || v.y > canvas.height) {
        return;
    }
    
    e.preventDefault();
    isPlacing = true;
    placingTower.position = canvas.mousepos.copy();
    if(!isValidPosition(world, placingTower)){
        placingValid = false;
        return;
    }
    placingValid = true;

    
};


canvas.onclick = function (e) {
    var v = toCanvasCoords(new Vector2(e.clientX, e.clientY), canvas);
    if (v.x < 0 || v.x > canvas.width || v.y < 0 || v.y > canvas.height) {
        return;
    }
    
    for(var t of world.towers){
        if(t.position.distanceSquared(v) < (t.placementRadius) ** 2){
            targetTower = t;
            return;
        }
    }

    targetTower = null;

};


document.ondragover = function (e) {
    mousepos = new Vector2(e.clientX, e.clientY);
    canvas.mousepos = toCanvasCoords(mousepos, canvas);
    mousetarget = e.target;
};


canvas.ondrop = function (e) {
    if(!placingValid || getTowerByID(dragging.towerID).price > world.money){
        isPlacing = false;
        return;
    }
    placeTower(toCanvasCoords(new Vector2(e.clientX, e.clientY), canvas), dragging.towerID);
    world.money -= getTowerByID(dragging.towerID).price;
    isPlacing = false;
};

for (var i = 1; i <= document.getElementById("shop_window").childElementCount; i++) {
    var invisimg = document.createElement("img");   
    invisimg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    document.getElementById("shopitem" + i).addEventListener("dragstart",function (e) {
        if(world.money < getTowerByID(this.towerID).price){
            e.preventDefault();
            return;
        }
        dragging = this;
        setPlacingTower(this.towerID);
        targetTower = null;
        e.dataTransfer.setDragImage(invisimg,0,0);
    }, false);
    document.getElementById("shopitem" + i).ondragend = function (e) {
        dragging = null;
    }

    document.getElementById("shopitem" + i).towerID = i - 1;
}


var mousepos = new Vector2(0, 0);
canvas.mousepos = new Vector2(0, 0);
var mousetarget = null;
var dragging = null;


var getOffset = function (rect, canv) {
    var aspectRatio = canv.width / canv.height;
    var apparentAspectRatio = canv.clientWidth / canv.clientHeight;
    if (apparentAspectRatio > aspectRatio) {
        return new Vector2(rect.left + (canv.clientWidth - canv.clientHeight * aspectRatio) / 2, rect.top);
    } else {
        return new Vector2(rect.left, rect.top + (canv.clientHeight - canv.clientWidth / aspectRatio) / 2);
    }
};

var toCanvasCoords = function (v, canv) {
    var rect = canv.getBoundingClientRect()
    var scaleFactorX = canv.width / rect.width;
    var scaleFactorY = canv.height / rect.height;
    var scale = Math.max(scaleFactorX, scaleFactorY);
    v = v.subtract(getOffset(rect, canv));
    v = v.scale(scale);
    return v;
};


document.addEventListener("mousemove", function (e) {
    mousepos = new Vector2(e.clientX, e.clientY);
    canvas.mousepos = toCanvasCoords(mousepos, canvas);
    mousetarget = e.target;
});





var animate = function () {

    
    deltaTime = fps*(performance.now() - previousFrameTime)/1000;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if(world.health <= 0 || win){
        ctx.drawText("YOU " + (win?"WIN":"LOSE"), new Vector2(400,300), 50, "black", "Arial");
        ctx.drawText("RELOAD TO PLAY AGAIN", new Vector2(400,350), 20, "black", "Arial");
        return;
    }
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(canvas.mousepos.x, canvas.mousepos.y, 10, 0, 2 * Math.PI);
    ctx.fill();


    
    for(var p = 0; p < world.paths.length-1; p++){
        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 30;
        ctx.moveTo(world.paths[p].x, world.paths[p].y);
        ctx.lineTo(world.paths[p+1].x, world.paths[p+1].y);
        ctx.stroke();
    }
    for (var b of world.bullets) {
        b.draw(ctx, deltaTime);
    }
    for (var t of world.towers) {
        t.draw(ctx, deltaTime);
    }
    for (var e of world.enemies) {
        e.draw(ctx, deltaTime);
    }
    for(var e of world.explosions){
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(e[0].x, e[0].y, e[1], 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }

    if(targetTower){
        targetTower.drawRange(ctx, deltaTime);
        targetTower.drawPlacementRange(ctx, deltaTime);
        if(document.getElementById("information_window_container").style.display == "none"){
            document.getElementById("information_window_container").style.display = "block";
        }
        document.getElementById("damageDealt").textContent = "Damage dealt: " + targetTower.damageDealt;
        document.getElementById("name").textContent = targetTower.name;
        document.getElementById("upgradeName").textContent = targetTower.getUpgradeName();
        document.getElementById("level").textContent = "Level: " + (targetTower.tier + 1);
        document.getElementById("upgrade").style.display = "block";
        document.getElementById("upgrade").textContent = "UPGRADE: " + targetTower.upgradeCost;
        if(targetTower.upgradeCost == -1){
            document.getElementById("level").textContent = "Level: " + (targetTower.tier + 1);
            document.getElementById("upgrade").style.display = "none";
        }
        document.getElementById("sell").textContent = "SELL: " + targetTower.sellValue;
    }
    

    if(isPlacing){
        for (var t of world.towers) {
            t.drawPlacementRange(ctx, deltaTime);
        }
        if(placingTower){
            placingTower.position = canvas.mousepos.copy();
            placingTower.drawPlacementRange(ctx, deltaTime, placingValid);
            placingTower.drawRange(ctx, deltaTime);
        }
    }
    ctx.drawText("Health: " + world.health, new Vector2(10, 530), 20, "black", "Arial", "left");
    ctx.drawText("Round: " + (currentRound), new Vector2(10, 555), 20, "black", "Arial", "left");
    ctx.drawText("Money: " + world.money, new Vector2(10, 580), 20, "black", "Arial", "left");
    requestAnimationFrame(animate);
}

var update = function () {
    if(world.health <= 0){
        return;
    }
    previousFrameTime = performance.now();
    if(roundstart == false && rounds[currentRound] && world.enemies.length == 0){
        world.money += roundMoney;
        rounds[currentRound]();
        currentRound++;
    }
    else if(roundstart == false && rounds[currentRound] == undefined && world.enemies.length == 0){
        setTimeout(function(){win = true;}, 3000);
        return;
    }
    for (var t of world.towers) {
        t.update(world);
    }
    for (var b = world.bullets.length-1; b >= 0; b--) {
        var res = world.bullets[b].update(world);
        if (res) {
            world.bullets.splice(b, 1);
        }
    }
    for (var e = world.enemies.length-1; e >= 0; e--) {
        var res = world.enemies[e].update(world);
        if (res) {
            world.enemies.splice(e, 1);
        }
    }
    setTimeout(update, 1000 / fps);
}
update();
animate();