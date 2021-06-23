
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,400);
   
    myengine = Engine.create();
    myworld = myengine.world;
 
    var ground_options ={
        isStatic: true,
        
    }
    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(myworld,ground);
    console.log(ground);

    
    
    var box1_options ={
        isStatic: true,
        angle:PI/7
        
    }
    box1 = Bodies.rectangle(200,330,100,20,box1_options);
    Matter.Body.setAngle(box1,130)
    World.add(myworld,box1);


    var box2_options ={
        isStatic: true,
        
    }
    box2 = Bodies.rectangle(400,330,50,100,box2_options);
    World.add(myworld,box2);


    var box3_options ={
        isStatic: true,
        
    }
    box3 = Bodies.rectangle(600,360,100,40,box3_options);
    World.add(myworld,box3);


    var ball1_options ={
      // Write code to make the ball fall and bounce
        isStatic: true,
        restitution: 1.5
    }

    ball1 = Bodies.circle(200,100,20, ball1_options);
    World.add(myworld,ball1);



    var ball2_options ={
        // Write code to make the ball fall and bounce
        isStatic: true,
    }

    ball2 = Bodies.circle(400,100,20, ball2_options);
    World.add(myworld,ball2);


    var ball3_options ={       
        isStatic: false,
        restitution: 1.0
    }

    ball3 = Bodies.circle(600,100,20, ball3_options);
    // Write code to add the ball to the world.

}

function draw(){
    background("cyan");
    Engine.update(myengine);
    rectMode(CENTER);
    fill("brown")
    rect(ground.position.x,ground.position.y,800,20);

    fill("yellow")
    push();
    translate(box1.position.x,box1.position.y);
    rotate(box1.angle);
    rectMode(CENTER);
    rect(0, 0, 100, 20);
    pop();

    fill("green")
    rect(box2.position.x,box2.position.y,50,100);
    
    fill("blue")
    rect(box3.position.x,box3.position.y,100,40);
   
    fill("red")
    ellipseMode(RADIUS);
    ellipse(ball1.position.x, ball1.position.y, 20, 20);
    ellipse(ball2.position.x, ball2.position.y, 20, 20);
    ellipse(ball3.position.x, ball3.position.y, 20, 20);
}