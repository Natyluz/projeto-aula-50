var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b81e6205-2482-49f8-955d-56365a9d6325","0fe2d52b-8050-440e-8dce-38ccf62f1c40","077deae3-7753-420e-9545-2f58b3416bcb","eb5af30a-52dd-47dd-8b4e-af26d9493232"],"propsByKey":{"b81e6205-2482-49f8-955d-56365a9d6325":{"name":"jogador","sourceUrl":null,"frameSize":{"x":438,"y":613},"frameCount":2,"looping":true,"frameDelay":12,"version":"23CZK7WEjkRQa_fd_zmhae7yVvxk2qfa","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":876,"y":613},"rootRelativePath":"assets/b81e6205-2482-49f8-955d-56365a9d6325.png"},"0fe2d52b-8050-440e-8dce-38ccf62f1c40":{"name":"inimigo2","sourceUrl":null,"frameSize":{"x":429,"y":613},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZExNVGkYlGvnRGlmTdU.3BVm7sfLBv3C","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":429,"y":613},"rootRelativePath":"assets/0fe2d52b-8050-440e-8dce-38ccf62f1c40.png"},"077deae3-7753-420e-9545-2f58b3416bcb":{"name":"inimigo1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"kJCN1_XV.p7Yt5QKcjujNIdiyB9fXhtm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/077deae3-7753-420e-9545-2f58b3416bcb.png"},"eb5af30a-52dd-47dd-8b4e-af26d9493232":{"name":"fundo","sourceUrl":"assets/v3/animations/8YaGKQ5vWI4d7OJYhqw1buEbG0_fw7SJgg3tpSLb8SE/eb5af30a-52dd-47dd-8b4e-af26d9493232.png","frameSize":{"x":576,"y":576},"frameCount":1,"looping":true,"frameDelay":4,"version":"lwQTP3m2i2tQ0oc1U34V2q97ZLbgDWOb","loadedFromSource":true,"saved":true,"sourceSize":{"x":576,"y":576},"rootRelativePath":"assets/v3/animations/8YaGKQ5vWI4d7OJYhqw1buEbG0_fw7SJgg3tpSLb8SE/eb5af30a-52dd-47dd-8b4e-af26d9493232.png"}}};
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

//Cria o fundo
var fundo = createSprite(200, 200);
fundo.setAnimation("fundo");

//Cria o jogador
var jogador = createSprite(200, 350);
jogador.setAnimation("jogador");
jogador.scale = 0.09;


//Criar o inimigo 1
var inimigo1 = createSprite(200,0);
inimigo1.setAnimation("inimigo1");
inimigo1.scale = 0.60;

//Criar o inimigo 2
var inimigo2 = createSprite(50,0);
inimigo2.setAnimation("inimigo1");
inimigo2.scale =0.60;

//criar o inimigo 3
var inimigo3 = createSprite(350,0);
inimigo3.setAnimation("inimigo1");
inimigo3.scale = 0.60;

//criar inimigo 4
var inimigo4 = createSprite(220,0);
inimigo4.setAnimation("inimigo1");
inimigo4.scale = 0.60;

//criar inimigo 5
var inimigo5 = createSprite(210,0);
inimigo5.setAnimation("inimigo1");
inimigo5.scale = 0.60;



//Cria a borda para colisão
createEdgeSprites();


//Criar variável para armazenar a vida e tempo
var vida=3;
var Lixo=50; 

//musica de fundo
//playSound("assets/category_background/fantasy.mp3",true);

function draw() {
  drawSprites();
  
  
  //fazer jogador seguir o mouse para dierita e esquerda
  jogador.x = World.mouseX;
  
  //colocar velocidade nos inimigos
  inimigo1.velocityY = 5;
  inimigo2.velocityY = 5;
  inimigo3.velocityY = 5;
  inimigo4.velocityY = 5;
  inimigo5.velocityY = 5;
  
  //fazer o jogador perder vida quando tocar nos inimigos
  if(jogador.isTouching(inimigo1))
  {
    inimigo1.x = randomNumber(50, 350);
    inimigo1.y = 0;
    vida=vida-1;
  }
  
  if(jogador.isTouching(inimigo2))
  {
    inimigo2.x = randomNumber(50, 350);
    inimigo2.y = 0;
    vida=vida-1;
  }
  
  if(jogador.isTouching(inimigo3))
  {
    inimigo3.x = randomNumber(50, 350);
    inimigo3.y = 0;
    vida=vida-1;
  }
  
  if(jogador.isTouching(inimigo4))
  {
    inimigo4.x = randomNumber(50, 350);
    inimigo4.y = 0;
    vida=vida-1;
  }
  
  if(jogador.isTouching(inimigo5))
  {
    inimigo5.x = randomNumber(50, 350);
    inimigo5.y = 0;
    vida=vida-1;
  }
 
 

  
  //Desenha o texto da vida e tempo na tela
  textSize(24);
  fill("White");
  textFont("Impact");
  text("Vida = "+vida, 10, 25);
  
   textSize(24);
  fill("White");
  textFont("Impact");
  text("Lixos Restantes= "+Lixo, 10, 49);
  
  
  //fazer inimigos aparecerem em um número aleatório
  if (inimigo1.y >400) {
    inimigo1.x = randomNumber(50, 350);
    inimigo1.y = 0;
    Lixo=Lixo-1;
  }
  if (inimigo2.y >400) {
    inimigo2.x = randomNumber(50, 350);
    inimigo2.y = 0;
    Lixo=Lixo-1;
  }
  if (inimigo3.y >400) {
    inimigo3.x = randomNumber(50, 350);
    inimigo3.y = 0;
    Lixo=Lixo-1;
  }
  if (inimigo4.y >400) {
    inimigo4.x = randomNumber(50, 350);
    inimigo4.y = 0;
    Lixo=Lixo-1;
  }
  if (inimigo5.y >400) {
    inimigo5.x = randomNumber(50, 350);
    inimigo5.y = 0;
    Lixo=Lixo-1;
  }
  
  
  if(vida <= 0)
  {
  jogador.destroy();
  inimigo1.destroy();
  inimigo2.destroy();
  inimigo3.destroy();
  inimigo4.destroy();
  inimigo5.destroy();
  
  textSize(24);
  fill("White");
  textFont("Impact");
  text("Você Perdeu",140,200);
  }
  
  if(Lixo <= 0)
  {
  jogador.destroy();
  inimigo1.destroy();
  inimigo2.destroy();
  inimigo3.destroy();
  inimigo4.destroy();
  inimigo5.destroy();
  
  textSize(24);
  fill("White");
  textFont("Impact");
  text("Você Ganhou!",140,200);
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
