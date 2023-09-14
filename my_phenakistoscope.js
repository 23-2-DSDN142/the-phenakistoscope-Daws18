const SLICE_COUNT = 11;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
 //pScope.output_mode(STATIC_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("moving_dragon", "png", 11);
  pScope.load_image("symbol","png")
  pScope.load_image("cracker", "png")
  pScope.load_image("lantern", "png")
}

function setup_layers(pScope){

  new PLayer(null,237, 231, 194);  //lets us draw the whole circle background, ignoring the boundaries

  let insideBackground = new PLayer(insideRed);//red centre ring 
  insideBackground.mode(RING);
  insideBackground.set_boundary(0,100);

  let outsideBackground = new PLayer(outsideRed);//red boundary ring 
  outsideBackground.mode(RING);
  outsideBackground.set_boundary(970,1000);

  var layer1 = new PLayer(firework);//red and yellow ellipses  
  layer1.mode( SWIRL(4) );
  layer1.set_boundary( 100, 800 );

  var layer2 = new PLayer(cracker);//firecracker asset 
  layer2.mode( SWIRL(1) );
  layer2.set_boundary( 100, 300 );

  var layer3 = new PLayer(lantern);//lantern asset 
  layer3.mode( SWIRL(1) );
  layer3.set_boundary( 800, 1000 );

  let dragonSequence = new PLayer(dragon);//dragon sequence
  dragonSequence.mode(RING);
  dragonSequence.set_boundary(0,800);

  let CenterImage = new PLayer(symbol);//dragon symbol asset 
  CenterImage.mode(RING);
  CenterImage.set_boundary(0,30);
  

}
function symbol(x,y,animation,pScope){
  scale(0.8);
  pScope.draw_image("symbol",x,y);//dragon charcter symbol text type 
}
function cracker(x,y,animation,pScope){
  scale(0.4);
  pScope.draw_image("cracker",x,y);// fire cracker asset
}
function firework(x, y, animation, pScope){
  
  scale(animation.wave(4));

  fill(191, 19, 13);//red 
  ellipse(0,0,60,60);//red circle 
  

  fill(237, 161, 9)//yellow 
  let ballSize  = 20 + (animation.wave(1)* 20)
  ellipse(0,0,ballSize); 
  
}
function insideRed (x,y,animation,pScope){
  pScope.fill_background(191, 19, 13, 255);//red 
}
function outsideRed (x,y,animation,pScope){
  pScope.fill_background(191, 19, 13, 255);//red 
}
function dragon(x,y,animation,pScope){
  scale(0.45);//size of image
  pScope.draw_image_from_sequence("moving_dragon", 0, -700, animation.frame); //animated dragon sequence
}
function lantern(x,y,animation,pScope){
  scale(0.4);
  pScope.draw_image("lantern",x,y);// lantern asset
}