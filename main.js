function setup() {
    c1 = createCanvas(500, 500);
    c1.center();
    v1 = createCapture(VIDEO);
    v1.hide();
    pn = ml5.poseNet(v1, modelLoaded);
    pn.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("model is loaded")
}

function draw() {
    image(v1, 0, 0, 500, 500);
    fill("red");
    if (scorerw > 0.2) {
        circle(rwx, rwy, 20);
        if (rwy > 0 && rwy <= 100) {
            document.getElementById("speed").innerHTML = "speed is 0.5";
            s1.rate(0.5);
        } else if (rwy > 100 && rwy <= 200) {
            document.getElementById("speed").innerHTML = "speed is 1";
            s1.rate(1);
        } else if (rwy > 200 && rwy <= 300) {
            document.getElementById("speed").innerHTML = "speed is 1.5";
            s1.rate(1.5);
        } else if (rwy > 300 && rwy <= 400) {
            document.getElementById("speed").innerHTML = "speed is 2";
            s1.rate(2);

        } else if (rwy > 400 && rwy <= 500) {
            document.getElementById("speed").innerHTML = "speed is 2.5";
            s1.rate(2.5);

        }
    }

    if (scorelw > 0.2) {
        circle(lwx, lwy, 20);
        if(lwy>0 && lwy<=100){
            document.getElementById("volume").innerHTML="volume is 0.1";
            s1.setVolume(0.1);
            
        }
else if(lwy>100 && lwy<=200){
    document.getElementById("volume").innerHTML="volume is 0.3";
    s1.setVolume(0.3);
    
}
        
        else if(lwy>200 && lwy<=300){
        document.getElementById("volume").innerHTML="volume is 0.5";
            s1.setVolume(0.5);
        }
        else if(lwy>300 && lwy<=400){
        document.getElementById("volume").innerHTML="volume is 0.8";
            s1.setVolume(0.8);

    }
    
else if(lwy>400 && lwy<=500){
        document.getElementById("volume").innerHTML="volume is 1";
            s1.setVolume();


}
    }

}






s1 = ""

function preload() {
    s1 = loadSound("music.mp3");

}

function play() {
    s1.play();
    s1.setVolume(0.5);
    s1.rate(1);


}
rwx = 0;
rwy = 0;
lwx = 0;
lwy = 0;
scorerw = 0;
scorelw = 0;

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        rwx = results[0].pose.rightWrist.x
        rwy = results[0].pose.rightWrist.y
        console.log("rwx=" + rwx + "rwy=" + rwy)
        lwx = results[0].pose.leftWrist.x
        lwy = results[0].pose.leftWrist.y
        console.log("lwx=" + lwx + "lwy=" + lwy)
        scorerw = results[0].pose.keypoints[10].score
        scorelw = results[0].pose.keypoints[9].score
        console.log("score rw is" + scorerw);
        console.log("score lw is" + scorelw);



    }

}
