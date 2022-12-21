var colors = "f7d1cd-e8c2ca-d1b3c4-b392ac-735d78".split("-").map(a=>"#"+a)
var colors_r = "7b2cbf-9d4edd-c77dff-e0aaff".split("-").map(a=>"#"+a)
var colors_r_r = "10002b-240046-3c096c-5a189a".split("-").map(a=>"#"+a)
var clr,clr_r,clr_r_r

var positionX =[]
var positionY =[]
var clrList =[]
var clr_r_List =[]
var clr_r_r_List =[]
var sizeList =[]

var m_x,m_y
var song
var songIsplay=false //設定此變數為"假"，收到按下滑鼠把變數改為"真"，音樂播放
var amp
var vol=0
var music_btn,mouse_btn,Speech_btn
var musicIsplay=true
var mouseIsplay=true
var myRec = new p5.SpeechRec();
var result
function preload(){
  song = loadSound("We Wish You A Merry Christmas.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);//將方位度數改為角度模式

  music_btn = createButton("播音樂")
  music_btn.position(10,10)
  music_btn.size(350, 100);
  music_btn.style('background-color', 'black');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)

  mouse_btn = createButton("暫停")
  mouse_btn.position(370,10)
  mouse_btn.size(350, 100);
  mouse_btn.style('background-color', 'black');
  mouse_btn.style('font-size', '44px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)


  
}
function music_btn_pressed(){  
  song.stop()
  song.play()
  songIsplay = true
  musicIsplay = false
  amp=new p5.Amplitude()
  music_btn.style('background-color', '#00b4d8');
  mouse_btn.style('background-color', 'black');
}

function mouse_btn_pressed(){  
  song.pause()
  musicIsplay = true
  songIsplay = false
  music_btn.style('background-color', 'black');
  mouse_btn.style('background-color', '#00b4d8');

 
}




function draw() {
  background("#f2cc8f");  
  
  push()
  textSize(50)
  fill(255,0,0)  
  text(result,1100,100);   
pop()

if(songIsplay){
  vol = amp.getLevel()
  m_x =map(vol,0,1,0,width) 
  m_y= map(vol,0,1,0,height)
  
}
else
if(mouseIsplay)
{
  m_x = mouseX
  m_y= mouseY

}

  for(var j=0;j<5;j++){
    positionX.push(random(width))
    positionY.push(random(height))
    clrList.push(colors[int(random(colors.length))])
    clr_r_List.push(colors_r[int(random(colors_r.length))])
    clr_r_r_List.push(colors_r_r[int(random(colors_r_r.length))])
    sizeList.push(random(0.5,1.5))
    //畫圖
    push() 
      translate(positionX[j],positionY[j]) //原點移到視窗的中心點
      clr = clrList[j]
      clr_r = clr_r_List[j]
      clr_r_r = clr_r_r_List[j]
      drawFlower(clr,clr_r,clr_r_r,sizeList[j])
    pop()
    }
  
  
}

function drawFlower(clr,clr_r,clr_r_r,size=1){
  push()
    scale(size) //縮放
      noStroke()
      fill(clr)
      ellipse(0+m_x/150,0+m_y/150,350,320) //頭

      ellipse(-130+m_x/30,-140+m_y/30,145) //左耳
      ellipse(130+m_x/30,-140+m_y/30,145) //右耳

        beginShape()  //左腳
        curveVertex(-75,305)
        curveVertex(-90,345)
        curveVertex(-90,355)
        curveVertex(-80,375)
        curveVertex(-60,385)
        curveVertex(-35,385)
        curveVertex(-20,365)
        curveVertex(-15,330)
  
    endShape(CLOSE)
    beginShape()  //右腳
        curveVertex(75,305)
        curveVertex(90,345)
        curveVertex(90,355)
        curveVertex(80,375)
        curveVertex(60,385)
        curveVertex(35,385)
        curveVertex(20,365)
        curveVertex(15,330)
  
    endShape(CLOSE)
  
      fill("#ffeedd")
      ellipse(0,210,270,280) //身體
      
      fill(clr)
      beginShape()  //
        curveVertex(-135,210)
        curveVertex(-20,0)
        curveVertex(20,0)
        curveVertex(135,210)
    endShape(CLOSE)
    beginShape()  
        curveVertex(135,210)
        curveVertex(20,0)
        curveVertex(-20,0)
        curveVertex(-135,210)
    endShape(CLOSE)
  
      fill("#ffeedd")
      ellipse(0+m_x/150,30+m_y/150,305,250) //臉中淺色部分
      
      fill(255)//左眼框
      ellipse(-60+m_x/150,15+m_y/150,70)  
      fill("#f08080") 
      arc(-60+m_x/150, 20+m_y/150, 80, 80, 160, 320)      
      fill(255)
      arc(-58+m_x/150, 20+m_y/150, 70, 75, 160, 320) 
  
      fill(255)//右眼框
      ellipse(60+m_x/150,15+m_y/150,70) 
      fill("#f08080")
      arc(60+m_x/150, 20+m_y/150, 80, 80, 220, 20)     
      fill(255)
      arc(58+m_x/150, 20+m_y/150, 70, 75, 220, 20)  
  
      fill(clr_r) //左眼珠
      ellipse(-55+map(mouseX,0,width,-12,5)+m_x/150,15+map(mouseY,0,height,-7,10)+m_y/150,50)
      fill(clr_r_r)
      ellipse(-55+map(mouseX,0,width,-12,5)+m_x/150,15+map(mouseY,0,height,-7,10)+m_y/150,30)
      fill(255)
      ellipse(-50+map(mouseX,0,width,-5,12)+m_x/150,10+map(mouseY,0,height,-7,10)+m_y/150,15)
  
      fill(clr_r) //右眼珠
      ellipse(55+map(mouseX,0,width,-5,12)+m_x/150,15+map(mouseY,0,height,-7,10)+m_y/150,50)
      fill(clr_r_r)
      ellipse(55+map(mouseX,0,width,-5,12)+m_x/150,15+map(mouseY,0,height,-7,10)+m_y/150,30)
      fill(255)
      ellipse(65+map(mouseX,0,width,-5,12)+m_x/150,10+map(mouseY,0,height,-7,10)+m_y/150,15)
  
      fill("#f08080") //鼻子
      ellipse(0+m_x/150,30+m_y/150,15,10)
  
      // fill("#5fa8d3") //嘴
      // ellipse(0+m_x/150,90+m_y/150,35,30)
  
  
      fill(clr)
      beginShape()  //左手
        curveVertex(-105,125)
        curveVertex(-210,190)
        curveVertex(-200,230)
        curveVertex(-145,215)
        curveVertex(-90,180)
  
    endShape(CLOSE)
    beginShape()  //右手
        curveVertex(105+m_x/150,125+m_y/150)
        curveVertex(210+m_x/150,190+m_y/150)
        curveVertex(200+m_x/150,230+m_y/150)
        curveVertex(145+m_x/150,215+m_y/150)
        curveVertex(90+m_x/150,180+m_y/150)
  
    endShape(CLOSE)

    if(mouseIsPressed)
    {
      fill("#5fa8d3") //嘴
      ellipse(0+m_x/150,90+m_y/150,35,30)
    }
    else
    {
      fill("#5fa8d3") //嘴
      ellipse(0+m_x/150,90+m_y/150,30,10)
    
    }
  pop()    
}