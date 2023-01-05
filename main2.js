meters = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0
scoreLeftWrist = 0;
scoreRightWrist = 0 ;
text_of_status = document.getElementsByClassName("TEXT").innerHTML

function setup(){
    canvas = createCanvas(400,350);
 

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses);

}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
       

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
     
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
          
        
         document.getElementById("meters").innerHTML  = floor(rightWristY);
        
         meters =  document.getElementById("meters").innerHTML;
        }
}
function modelLoaded() {
    console.log("PoseNet is intialized")
}

function draw() {
    image(video, 0, 0, 400 ,350)

    fill("#FF0000");
    stroke('#FF0000')

  
    if(scoreRightWrist > 0.1)
    {


    circle(leftWristX,rightWristY,20)
      if( rightWristY <= 100)
       {
     document.getElementById("background_image").style.backgroundImage = "url('Screenshot 2022-12-06 160010.png')";
     document.getElementById("background_image").style.transition = "0.5s"
     document.getElementById("meters").style.top ="50%"
     
       }
       else if( meters > 100 && meters<= 200)
       {
       document.getElementById("background_image").style.backgroundImage = "url('Screenshot 2022-12-06 155912.png')";
       document.getElementById("background_image").style.transition = "0.5s"
       }
       else if( meters > 200 && meters <= 300)
       {
       document.getElementById("background_image").style.backgroundImage = "url('Screenshot 2022-12-06 155757.png')";
       document.getElementById("background_image").style.transition = "0.5s"
       }
       else if(meters > 300 && meters <= 400)
       {
       document.getElementById("background_image").style.backgroundImage = "url('Screenshot 2022-12-06 155655.png')";
       document.getElementById("background_image").style.transition = "0.5s"
       }
       else if(meters > 400 && meters <= 500)
       {
       document.getElementById("background_image").style.backgroundImage = "url('Screenshot 2022-12-06 155425.png')";
       document.getElementById("background_image").style.transition = "0.5s"
       }
    }
 }
 
    





async function predictHand() {
    // Pass in a video stream (or an image, canvas, or 3D tensor) to obtain a hand prediction from the MediaPipe graph.
    predictions = await model.estimateHands(video.elt);
  
    setTimeout(() => predictHand(), 100);
  }
  

///////////////////////////////////////////////////////////////////////


const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");

signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%"
})
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%"
})
;
