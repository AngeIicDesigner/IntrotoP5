function preload() { } 
function setup() { canvas = createCanvas(640, 480); canvas.position(110, 250); video = createCapture(VIDEO); video.hide(); tint_color = "blue"; } 
function draw() { image(video, 0, 0, 640, 480);

fill(20,0,50);
stroke(30,2,10);
circle(50,80,80);
circle(500,80,80); 
circle(500,400,80);
circle(50,400,80);}

function take_snapshot()
{ save('student_name.png'); } 
function filter_tint() { tint_color = document.getElementById("color_name").value; }