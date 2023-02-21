let randomCounts=[];
let result="";
let n=0;

function setup(){
    createCanvas(windowWidth, windowHeight);
    for(let n=0;n<20;n++){
        randomCounts[n] = 0
    }
}

function draw(){
    //background(255);
    //blendMode(MULTIPLY);
    let index = int(random(randomCounts.length))
    let color2 = int(random(255));
    let color3 = int(random(255));
    console.log()
    // for(let x=0; x < randomCounts.length; x++){
    //     if(x == index){
    //         ellipse(20+x*w,200,100);
    //     }
    // }

    randomCounts[index]++;

    result=result+index;
    if(n%200==0) result = result+'\n';
    text(result, 0,30)

    //stroke(0);

    let w = width/randomCounts.length;
    // for(let x=0; x < randomCounts.length; x++){
    //     //rect(x*w, height-randomCounts[x], w-1,randomCounts[x]);
    //     ellipse(20+x*w,200,randomCounts[x]);
    // }
    for(let j=0; j<9;j++){
        for(let x=0; x < randomCounts.length; x++){
            if(x == index){
                let color1 = int(random(255));
                noStroke();
                fill(color1,100,-100+w*x,7);
                ellipse(20+x*w,30+j*100,randomCounts[x]);
            }
        }
    }
    n++;
}