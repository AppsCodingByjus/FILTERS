noseX= 0;
noseY=0;

function preload() {
    lipstick_img = loadImage("https://i.postimg.cc/YSsyLVLY/pngtree-cartoon-pop-style-lip-material-lipspop-style-lipslipssexy-png-image-645087-removebg-preview.png");

}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() 
{
    console.log("PoseNet is Initialized");
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lipstick_img, noseX-28, noseY, 60, 60);

}

function take_snapshot(){
    save('myPhotoBoothImage.png');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
       noseX = results[0].pose.nose.x;
       noseY= results[0].pose.nose.y;
       console.log("nose x=" +noseX);
       console.log("nose y =" +noseY);
    }
}