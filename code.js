var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bd6c327f-f84c-4c5a-8896-78580e5c08f1","6b3ad5af-0981-4dd0-b249-2d57ffaa342c","538f1530-4eff-4908-bc2c-496cea3846d4","ad699d4b-da3d-4de7-a17d-33b4e2524f06","736b83bc-b2c6-4bf5-8af1-75fe8ca95c7d","9dac4ae2-849b-415d-b59c-565d734b70b4","e62551ec-f1de-4ab4-8cf6-d560d084f625","bc9fb96e-04e7-491d-86b2-c4774451787f","b50301a1-4e93-4d55-8f9e-a2ea7417b5e3"],"propsByKey":{"bd6c327f-f84c-4c5a-8896-78580e5c08f1":{"name":"kid_2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/89V4FB8QpN_aEUdjKIkRY58kY6L0Z.ym/category_characters/kid_2.png","frameSize":{"x":293,"y":412},"frameCount":1,"looping":true,"frameDelay":2,"version":"89V4FB8QpN_aEUdjKIkRY58kY6L0Z.ym","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":412},"rootRelativePath":"assets/api/v1/animation-library/gamelab/89V4FB8QpN_aEUdjKIkRY58kY6L0Z.ym/category_characters/kid_2.png"},"6b3ad5af-0981-4dd0-b249-2d57ffaa342c":{"name":"images (2).jpg_1","sourceUrl":"assets/v3/animations/evYnK_B4FSa_SuDMryepqT1E8E8UdPzWvTW0wq4xiUs/6b3ad5af-0981-4dd0-b249-2d57ffaa342c.png","frameSize":{"x":259,"y":195},"frameCount":1,"looping":true,"frameDelay":4,"version":"d3.FKXWcAqiotKpgpJoEn31FPZc3VoiK","loadedFromSource":true,"saved":true,"sourceSize":{"x":259,"y":195},"rootRelativePath":"assets/v3/animations/evYnK_B4FSa_SuDMryepqT1E8E8UdPzWvTW0wq4xiUs/6b3ad5af-0981-4dd0-b249-2d57ffaa342c.png"},"538f1530-4eff-4908-bc2c-496cea3846d4":{"name":"download (8).jpg_1","sourceUrl":null,"frameSize":{"x":390,"y":390},"frameCount":4,"looping":true,"frameDelay":12,"version":"jp1GFZHkzNZzoTcZE_sJxfCwKVbfCBlG","loadedFromSource":true,"saved":true,"sourceSize":{"x":780,"y":780},"rootRelativePath":"assets/538f1530-4eff-4908-bc2c-496cea3846d4.png"},"ad699d4b-da3d-4de7-a17d-33b4e2524f06":{"name":"download (3).png_1","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"wRVvlhAy4FQh03yNeGb3pmDPGNSpLOUd","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/ad699d4b-da3d-4de7-a17d-33b4e2524f06.png"},"736b83bc-b2c6-4bf5-8af1-75fe8ca95c7d":{"name":"download (9).jpg_1","sourceUrl":"assets/v3/animations/evYnK_B4FSa_SuDMryepqT1E8E8UdPzWvTW0wq4xiUs/736b83bc-b2c6-4bf5-8af1-75fe8ca95c7d.png","frameSize":{"x":245,"y":205},"frameCount":1,"looping":true,"frameDelay":4,"version":"fweMOPoNS__YkN775JXsu2Y.36V5udsf","loadedFromSource":true,"saved":true,"sourceSize":{"x":245,"y":205},"rootRelativePath":"assets/v3/animations/evYnK_B4FSa_SuDMryepqT1E8E8UdPzWvTW0wq4xiUs/736b83bc-b2c6-4bf5-8af1-75fe8ca95c7d.png"},"9dac4ae2-849b-415d-b59c-565d734b70b4":{"name":"virus03_10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/vuGxGgu19I_p4teSZ_kILYji8V8GyfQk/category_germs/virus03_10.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"vuGxGgu19I_p4teSZ_kILYji8V8GyfQk","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/vuGxGgu19I_p4teSZ_kILYji8V8GyfQk/category_germs/virus03_10.png"},"e62551ec-f1de-4ab4-8cf6-d560d084f625":{"name":"gradient_21_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ObjK0o9PfyGpskE3dhusX4WC12W64Ncy/category_backgrounds/gradient_21.png","frameSize":{"x":400,"y":345},"frameCount":1,"looping":true,"frameDelay":2,"version":"ObjK0o9PfyGpskE3dhusX4WC12W64Ncy","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":345},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ObjK0o9PfyGpskE3dhusX4WC12W64Ncy/category_backgrounds/gradient_21.png"},"bc9fb96e-04e7-491d-86b2-c4774451787f":{"name":"bg_landscape21_1","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"b50301a1-4e93-4d55-8f9e-a2ea7417b5e3":{"name":"santa_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score=0;
  var count = 0;
 var backgroundImage=createSprite(200,200);
  backgroundImage.setAnimation("santa_1");
  backgroundImage.scale=2
//player
var player = createSprite(375,30,30,30);
player.setAnimation("kid_2_1");
player.scale=0.1;
//walls
var wall1 = createSprite(300, 150,10,400);
wall1.shapeColor='yellow';
var wall2 = createSprite(200,150,10,400);
wall2.shapeColor='pink';
var wall3 = createSprite(100,150,10,400);
wall3.shapeColor='red';
//vaccine
var vaccine = createSprite(50,25,20,20);
vaccine.setAnimation("images (2).jpg_1");
vaccine.scale=0.2;
//obstacles
var coronavirus = createSprite(350,300,10,10);
coronavirus.setAnimation("download (8).jpg_1");
coronavirus.scale=0.10;
var coronavirus2 = createSprite(350,300,10,10);
coronavirus2.setAnimation("download (8).jpg_1");
coronavirus2.scale=0.10;
var coronavirus3 = createSprite(150,250,10,10);
coronavirus3.setAnimation("download (8).jpg_1");
coronavirus3.scale=0.10;
var coronavirus4 = createSprite(50,250,10,10);
coronavirus4.setAnimation("download (8).jpg_1");
coronavirus4.scale=0.10;
//coins
var coronavirus5,coronavirus6,coronavirus7;

var coin1 = createSprite(350,360,10,10);
coin1.setAnimation("download (3).png_1");
coin1.scale=0.12;
var coin2 = createSprite(50,100,10,10);
coin2.setAnimation("download (3).png_1");
coin2.scale=0.12;
var coin3 = createSprite(350,360,10,10);
coin3.setAnimation("download (3).png_1");
coin3.scale=0.12;
var coin4 = createSprite(250,12,10,10);
coin4.setAnimation("download (3).png_1");
coin4.scale=0.12;
var coin5 = createSprite(150,150,10,10);
coin5.setAnimation("download (3).png_1");
coin5.scale=0.12;
var coin6 = createSprite(100,370,10,10);
coin6.setAnimation("download (3).png_1");
coin6.scale=0.12;
//lifes
textSize(20);
stroke("red");
textFont('georgia');
// gamestate
var gamestate='serve';
function draw() {
  background("gradient_21_1")
  if (player.isTouching(coin2)) {
  coin2.scale=0;
  playSound("assets/category_digital/coin_2.mp3");
  score=score-1;
}
text("SCORE: " + count,105,20);
fill("red");


if (player.isTouching(coin3)) {
  coin3.scale=0;
  playSound("assets/category_digital/coin_2.mp3");
  score=score-1;
}
if (player.isTouching(coin4)) {
  coin4.scale=0;
  playSound("assets/category_digital/coin_2.mp3");
  count = count + 1;
}
if (player.isTouching(coin5)) {
  coin5.scale=0;
  playSound("assets/category_digital/coin_2.mp3");
  count = count + 1;
}
if (player.isTouching(coin6)) {
  coin6.scale=0;
  playSound("assets/category_digital/coin_2.mp3");
  count = count + 1;
}
if (player.isTouching(coin1)) {
  coin1.x=0;
  coin1.y=0;
  coin1.scale=0;
  playSound("assets/category_digital/coin_2.mp3");
  count = count + 1;
}



 // background("black");
  
  drawSprites();
  createEdgeSprites();
  // bouncing coronas
  coronavirus.bounceOff(edges);
  coronavirus.bounceOff(wall1);
  coronavirus2.bounceOff(edges);
  coronavirus2.bounceOff(wall1);
  coronavirus2.bounceOff(wall2);
  coronavirus2.bounceOff(wall3);
  coronavirus3.bounceOff(wall3);
  coronavirus3.bounceOff(wall2);
  coronavirus3.bounceOff(wall1);
  coronavirus3.bounceOff(edges);
  coronavirus3.bounceOff(vaccine);
  coronavirus3.bounceOff(coin2);
  coronavirus3.bounceOff(coin6);
  coronavirus4.bounceOff(wall3);
  coronavirus4.bounceOff(wall2);
  coronavirus4.bounceOff(wall1);
  coronavirus4.bounceOff(edges);
  player.bounceOff(wall3);
  player.bounceOff(wall2);
  player.bounceOff(wall1);
  player.bounceOff(edges);
  //gamestate
  if (gamestate==='serve') {
    text("press space to start",150,180);
    }
    text("SCORE: " + count,105,20);
fill("red");

   if (keyDown("space")) {
    gamestate='play';
    coronavirus.velocityX=1;
    coronavirus2.velocityY=5;
coronavirus2.velocityX=2;
    coronavirus3.velocityY=-2;
coronavirus3.velocityX=2;
coronavirus4.velocityX=-1;

}
if (player.isTouching(coronavirus)|| 
(player.isTouching(coronavirus2)||
(player.isTouching(coronavirus3)||
(player.isTouching(coronavirus4))))){
      player.x=375;
      player.y=30;
      playSound("assets/category_digital/failure.mp3");
       }
    //winning
if (player.isTouching(vaccine)&&
(coin1.scale===0)&&
    (coin2.scale===0)&&
    (coin3.scale===0)&&
    (coin4.scale===0)&&
    (coin5.scale===0)&&
    (coin6.scale===0)){
      text("YOU WON,CONGRATS",150,180);
       text("CoronaVirus Lost",150,230);
       stopSound();
       coronavirus.velocityX=0;
    coronavirus2.velocityY=0;
     coronavirus2.velocityX=0;
    coronavirus3.velocityY=0;
    coronavirus3.velocityX=0;
    coronavirus4.velocityX=0;
    }
    if (player.isTouching(vaccine)&&
(coin1.scale===0.12)||
    (coin2.scale===0.12)||
    (coin3.scale===0.12)||
    (coin4.scale===0.12)||
    (coin5.scale===0.12)||
    (coin6.scale===0.12)){
   }
   if(coronavirus.isTouching(coronavirus2)){
      coronavirus5 = createSprite(150,100,10,10);
      coronavirus5.setAnimation("download (8).jpg_1");
      coronavirus5.scale=0.10;
   }
   if(coronavirus5.isTouching(coronavirus2)){
      coronavirus6 = createSprite(250,200,10,10);
      coronavirus6.setAnimation("download (8).jpg_1");
      coronavirus6.scale=0.10;
   }
   if(coronavirus5.isTouching(coronavirus3)){
      coronavirus7 = createSprite(340,70,10,10);
      coronavirus7.setAnimation("download (8).jpg_1");
      coronavirus7.scale=0.10;
   }
   
  
  //player movement
   if (keyDown("up")) {
     player.y=player.y-10;
   }
   if (keyDown("down")) {
     player.y=player.y+10;
   }
   if (keyDown("left")) {
     player.x=player.x-10;
   }
   if (keyDown("right")) {
     player.x=player.x+10;
   }
   if (player.isTouching(coin1)){
     score=score+6;
   }
   if (player.isTouching(coin2)){
    score=score+6;
     
   }if (player.isTouching(coin3)){
     score=score+6;
     
   }if (player.isTouching(coin4)){
     score=score+6;
     
   }if (player.isTouching(coin5)){
     score=score+6;
   }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
