
status= "" ;
objects= [] ;

function preload()
{
  
}

function setup()
{
    canvas= createCanvas(380 , 380);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(380 ,380) ;
    video.hide();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded) ;
    document.getElementById("status").innerHTML = "Status : Detecting Object" ;
}

function modelLoaded()
{
console.log("Model Loaded !");
status = true ;
}

function gotResult(error , results) 
{
    if (error)
    {
        console.log(error) ;
    }

    console.log(results) ;
    objects= results ;
}

function draw()
{
    image(video , 0 , 0 , 380 , 380);
   
    if (status != "")
    {
r= random(255);
g=random(225);
b=random(235);

objectDetector.detect(video , gotResult) ;
        for(i = 0 ; i<objects.length ; i+1)
        {
            document.getElementById("status").innerHTML = "Status :Object Detected" ;
document.getElementById("number_of_object").innerHTML ="BABY IS DETECTED , Number Of Babies :-" + objects.length;

            fill(r,g,b);
            percent = floor(objects[i].confidence *100) ;
            text(objects[i].label + "" + percent + "%" , objects[i].x +15 ,objects[i].y +15 ) ;
            noFill();
            stroke(r,g,b);
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }

        for(i = 0 ; i=objects.length ;)
        {
            document.getElementById("number_of_object").innerHTML ="BABY IS NOT DETECTED " ;

        }
    }
}