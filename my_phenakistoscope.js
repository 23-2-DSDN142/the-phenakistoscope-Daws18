const SLICE_COUNT = 11;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("moving_dragon", "png", 11);
  //pScope.load_image("moving_dragon","png")
}

function setup_layers(pScope){

  new PLayer(null, 237, 231, 194);  //lets us draw the whole circle background, ignoring the boundaries

  let insideBackground = new PLayer(insideRed);
  insideBackground.mode(RING);
  insideBackground.set_boundary(0,100);

  let outsideBackground = new PLayer(outsideRed);
  outsideBackground.mode(RING);
  outsideBackground.set_boundary(970,1000);

  var layer1 = new PLayer(faces);
  layer1.mode( SWIRL(4) );
  layer1.set_boundary( 100, 800 );

  let dragonSequence = new PLayer(dragon);
  dragonSequence.mode(RING);
  dragonSequence.set_boundary(0,800);
  
 //var layer2 = new PLayer(squares);
  //layer2.mode( RING );
  //layer2.set_boundary( 0, 400 );
}

function faces(x, y, animation, pScope){
  
  scale(animation.wave(4));

  fill(191, 19, 13);//red 
  ellipse(0,0,60,60); // red circle 
  

  fill(237, 161, 9)//yellow 
  let ballSize  = 20 + (animation.wave(1)* 20)
  ellipse(0, 0,ballSize); 
  

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  //let angleOffset = (360 / SLICE_COUNT) / 2
  //let backgroundArcStart = 270 - angleOffset;
  //let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  scale(animation.wave(1));
  fill(255)
  ellipse(0,0,50,50);
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}

function insideRed (x,y,animation,pScope){
  pScope.fill_background(191, 19, 13, 255);//red 
}
function outsideRed (x,y,animation,pScope){
  pScope.fill_background(191, 19, 13, 255);//red 
}
function dragon(x,y,animation,pScope){
  // translate(x,y-650);
  //scale(-0.5);
  pScope.draw_image_from_sequence("moving_dragon", 0, 0, animation.frame);
}
