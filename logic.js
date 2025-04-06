let gameBoard = document.querySelector(".game-board");
let gameMsg = document.querySelector(".game-msg");
let scoreBox = document.querySelectorAll(".scoreval");
let HiScoreBox = document.querySelectorAll(".hiscoreval");
let levelBtn = document.querySelector(".lvl");
let clrBtn = document.querySelector(".clr");
let sndBtn = document.querySelector(".snd");
let sndImgBtn = document.querySelector(".snd img");
let musicBtn = document.querySelector(".music");
let musicImgBtn = document.querySelector(".music img");
let controlBtn = document.querySelector(".controls");
let levelPanel = document.querySelector(".levels-panel");
let foodclrPanel = document.querySelector(".foodColor-panel");
let controlPanel = document.querySelector(".control-panel");
let lvlBtn = document.querySelector(".lvlBack");
let foodClrBtn = document.querySelector(".clrBack");
let ctrlBtn = document.querySelector(".ctrlBack");
let wasdKeysBtn = document.querySelector(".wasd")
let arrowKeysBtn = document.querySelector(".arrowkeys")
let ctrlkeysImg = document.querySelector(".controlkeys-content img");
let clrBox = document.querySelector(".clr .box");
let foodOptions = document.querySelectorAll(".foodoption")
let foodIcon = document.querySelector(".foodIcon")
let defaultBtn = document.querySelector(".default")
let saveBtn = document.querySelector(".save")
let keysmsg = document.querySelector(".keys")
let clrValue = document.querySelector("#bx");
let levels = document.querySelectorAll(".level")
let soundItems = document.querySelectorAll(".sound");
let cancelBtn = document.querySelector(".cancelBtn");
let gameOverBox = document.querySelector(".gameOverAlert")
let playBtn = document.querySelector(".playBtn");
let cogPanel = document.querySelector(".cog-panel")
let BoardImgPanel = document.querySelector(".boardImg")
let BoardImgSrc = document.querySelector(".boardImg img")
let gameLogoBox = document.querySelector(".game-logo")
let levelBox = document.querySelector(".levelBox")

let hexValue = "#ff0050";
let defaultVal = "#ff0050";
let dataIndex = 0;
let levelVal = "Normal";
levelBtn.style.color = "#ffa011"
let tapSoundBtn = document.querySelectorAll(".tapsnd")

window.addEventListener("load",()=>{
    BoardImgSrc.src = "grids/grid.svg"
    clrBox.style.backgroundColor = hexValue
    foodIcon.style.backgroundColor = hexValue
    clrValue.setAttribute("value",`${hexValue}`)
})

tapSoundBtn.forEach((tapItems)=>{
    tapItems.addEventListener("click",()=>{
        if (tapItems.classList.contains("tapsnd")) {
            tap.play()
        }else{
            tap.pause()
        }
    })
})

soundItems.forEach((items)=>{
    items.addEventListener("click",()=>{
        if (items.classList.contains("sound")) {
            mouseClick.play()
        }else{
            mouseClick.pause()
        }
    })
})

let levelData = [
    {
        desc1:"Snake will move relatively slow.",
        desc2:"Food will spawn in good location.",
        desc3:"Background won't change",
        desc4:"Endless Mode",
    },
    {
        desc1:"Snake will move at normal speed.",
        desc2:"Food will spawn in good location.",
        desc3:"Background won't change",
        desc4:"Speed won't increase.",
    },
    {
        desc1:"Snake will move fast.",
        desc2:"Food will spawn in good location.",
        desc3:"Background will change",
        desc4:"Speed will increase as time grows.",
    },
    {
        desc1:"Snake will move insanely fast.",
        desc2:"Food will spawn in danger locations.",
        desc3:"Background will change",
        desc4:"Speed will increase as time grows.",
    },
]

let data1 = document.querySelector(".data1")
let data2 = document.querySelector(".data2")
let data3 = document.querySelector(".data3")
let data4 = document.querySelector(".data4")
let data5 = document.querySelector(".data5")
let alertNotice = document.querySelector(".alert")



levels.forEach((lvlItems)=>{
    const objData = (index) => {
        lvlItems.style.filter = "brightness(1)"
        lvlItems.style.backgroundColor = "#111111"
        data1.innerHTML = levelData[dataIndex + index].desc1
        data2.innerHTML = levelData[dataIndex + index].desc2
        data3.innerHTML = levelData[dataIndex + index].desc3
        data4.innerHTML = levelData[dataIndex + index].desc4
    }
    lvlItems.addEventListener("mouseenter",()=>{
        levels.forEach((items)=>{
            items.style.filter = "brightness(0.5)"
            items.style.backgroundColor = "#000"
        })
        if (lvlItems.classList.contains("easy")) {
            objData(0)
            alertNotice.style.opacity = "0"
            alertNotice.style.transform = "scale(0.9)"
        } else if(lvlItems.classList.contains("normal")){
            objData(1)
            alertNotice.style.opacity = "0"
            alertNotice.style.transform = "scale(0.9)"
        }else if(lvlItems.classList.contains("hard")){
            objData(2)
            alertNotice.style.opacity = "0"
            alertNotice.style.transform = "scale(0.9)"
        }else if(lvlItems.classList.contains("insane")){
            objData(3)
            alertNotice.style.opacity = "1"
            alertNotice.style.transform = "scale(1)"
        }
    })
    lvlItems.addEventListener("mouseleave",()=>{
        lvlItems.style.backgroundColor = "#000"
        lvlItems.style.filter = "brightness(0.5)"
    })

    lvlItems.addEventListener("click",()=>{
        if (lvlItems.classList.contains("easy")) {
            BoardImgSrc.src = "grids/grid.svg"
            levelVal = "Easy"
            levelBtn.style.color = "#00ff80"
            speed = 5
            lvlBtn.click()
        }else if(lvlItems.classList.contains("normal")){
            BoardImgSrc.src = "grids/grid.svg"
            levelVal = "Normal"
            levelBtn.style.color = "#ffa011"
            speed = 10
            lvlBtn.click()
        }else if(lvlItems.classList.contains("hard")){
            BoardImgSrc.src = "grids/hardGrid.svg"
            levelVal = "Hard"
            levelBtn.style.color = "#ff0050"
            speed = 20
            lvlBtn.click()
        }else if(lvlItems.classList.contains("insane")){
            BoardImgSrc.src = "grids/insaneGrid.svg"
            levelVal = "Insane"
            levelBtn.style.color = "#8800ff"
            gameBoard.style.backgroundImage = ""
            speed = 30
            let a = 2;
            let b = 20;
            food = {x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}

            lvlBtn.click()
        }
    })
})

// options functions start

gameLogoBox.addEventListener("click",()=>{
    if (gameLogoBox.classList.contains("gameToggle")) {
        gameLogoBox.classList.remove("gameToggle")
        levelBox.classList.remove("enabled")
    } else {
        gameLogoBox.classList.add("gameToggle")
        levelBox.classList.add("enabled")
    }
})

levelBtn.addEventListener("click",()=>{
    if (levelBtn.classList.contains("lvlToggle")) {
        levelBtn.classList.remove("lvlToggle")
        levelPanel.style.display = "none"
        levelPanel.style.zIndex = "0"
    } else {
        levelBtn.classList.add("lvlToggle")
        levelPanel.style.display = "block"
        levelPanel.style.zIndex = "600"
    }
})
lvlBtn.addEventListener("click",()=>{
    levelBtn.click()
})

clrBtn.addEventListener("click",()=>{
    if (clrBtn.classList.contains("clrToggle")) {
        clrBtn.classList.remove("clrToggle")
        foodclrPanel.style.zIndex = "0"
        foodclrPanel.style.display = "none"
    } else {
        clrBtn.classList.add("clrToggle")
        foodclrPanel.style.zIndex = "200"
        foodclrPanel.style.display = "block"
    }
})
foodClrBtn.addEventListener("click",()=>{
    clrBtn.click()
})

controlBtn.addEventListener("click",()=>{
    if (controlBtn.classList.contains("ctrlToggle")) {
        controlBtn.classList.remove("ctrlToggle")
        controlPanel.style.opacity = "0"
        controlPanel.style.transform = "scale(0.9)"
        controlPanel.style.zIndex = "0"
    } else {
        controlBtn.classList.add("ctrlToggle")
        controlPanel.style.opacity = "1"
        controlPanel.style.transform = "scale(1)"
        controlPanel.style.zIndex = "200"
    }
})
ctrlBtn.addEventListener("click",()=>{
    controlBtn.click()
})

sndBtn.addEventListener("click",()=>{
    if (sndBtn.classList.contains("sndoff")) {
        sndBtn.classList.remove("sndoff")
        sndImgBtn.src = "icons/active-sound.svg"
        soundItems.forEach((items)=>{
            items.classList.add("sound")
        })
        tapSoundBtn.forEach((tapItems)=>{
            tapItems.classList.add("tapsnd")
        })
    } else {
        sndBtn.classList.add("sndoff")
        sndImgBtn.src = "icons/inactive-sound.svg"
        soundItems.forEach((items)=>{
            items.classList.remove("sound")
        })
        tapSoundBtn.forEach((tapItems)=>{
            tapItems.classList.remove("tapsnd")
        })
    }
})

musicBtn.addEventListener("click",()=>{
    if (musicBtn.classList.contains("musicoff")) {
        musicBtn.classList.remove("musicoff")
        musicImgBtn.src = "icons/inactive-music.svg"
        musicLoop.pause()
    } else {
        musicBtn.classList.add("musicoff")
        musicImgBtn.src = "icons/active-music.svg"
        musicLoop.play()
    }
})

wasdKeysBtn.addEventListener("click",()=>{
    if (wasdKeysBtn.classList.contains("selected")) {
        
    } else {
        wasdKeysBtn.classList.add("selected")
        arrowKeysBtn.classList.remove("selected")
        ctrlkeysImg.src = "keysImg/wasdkeys.svg"
        keysmsg.innerHTML = "WASD"
    }
})
arrowKeysBtn.addEventListener("click",()=>{
    if (arrowKeysBtn.classList.contains("selected")) {
        
    } else {
        wasdKeysBtn.classList.remove("selected")
        arrowKeysBtn.classList.add("selected")
        ctrlkeysImg.src = "keysImg/arrowkeys.svg"
        keysmsg.innerHTML = "Arrow"
    }
})

foodOptions.forEach((foodItems)=>{
    foodItems.addEventListener("click",()=>{
        let selected = document.querySelector(".foodcolor-options .selected")
        selected.classList.remove("selected")
        foodItems.classList.add("selected")
        
        if (foodItems.classList.contains("active")) {
            hexValue = "#00ff80"
        }else if(foodItems.classList.contains("inactive")){
            hexValue = "#ff0050"
        }else if(foodItems.classList.contains("alert")){
            hexValue = "#ffa011"
        }else if(foodItems.classList.contains("intense")){
            hexValue = "#8800ff"
        }else if(foodItems.classList.contains("primary")){
            hexValue = "#0088ff"
        }
       clrBox.style.backgroundColor = hexValue
       foodIcon.style.backgroundColor = hexValue
    })
})
defaultBtn.addEventListener("click",()=>{
    clrBox.style.backgroundColor = defaultVal
    foodIcon.style.backgroundColor = defaultVal
    let inactive = document.querySelector(".inactive")
    foodOptions.forEach((items)=>{
        items.classList.remove("selected")
    })
    hexValue = "#ff0050"
    inactive.classList.add("selected");

})


playBtn.addEventListener("click",()=>{
    gameOverBox.classList.remove("enabled")
    gameOverBox.classList.add("disabled")
    inputDir = {x:0, y:-1};
})

cancelBtn.addEventListener("click",()=>{
    gameOverBox.classList.remove("enabled")
    gameOverBox.classList.add("disabled")
})



// options functions end



let score = 0;
let hiscore = 0
let speed = 10;
let lastPaintTime = 0;
let food = {x:4,y:5}
let SeekingBomb = {x:18,y:2}
let inputDir = {x:0,y:0};
let snakeArr = [
    {x:12,y:13}
]
let startVal = 0;
let endVal = 20;

//sounds start
let gameOver = new Audio("sounds/gameover.mp3");
let move = new Audio("sounds/move.mp3");
let tap = new Audio("sounds/tap.mp3");
let musicLoop = new Audio("sounds/gameMusicLoop.mp3");
let collectPoints = new Audio("sounds/collectPoints.mp3");
let mouseClick = new Audio("sounds/mouseClick.mp3");


//sounds end

// game logic

const main = (ctime)=>{
    window.requestAnimationFrame(main);
    if ((ctime-lastPaintTime)/1000<1/speed) {
        return   
    }
    lastPaintTime = ctime
    gameEngine();
}

const isCollide = (snake)=>{
        for (let i = 1; i < snakeArr.length; i++) {
            if (snakeArr[i].x === snake[0].x && snakeArr[i].y === snake[0].y) {
                return true
            }
        }
        if (snake[0].x >=20 || snake[0].x <= 0 || snake[0].y >=20 || snake[0].y <= 0) {
            return true
        }

    if (levelVal == "Insane") {
        speed = 30
    }
}
const gameEngine = ()=>{
    
    if (levelVal == "Insane" && score>=5 && score<10) {
        speed = 40
    }else if(levelVal == "Insane" && score>=10 && score<20){
        speed = 50
    }else if(levelVal == "Insane" && score>=20){
        speed = 60
    }
    if (isCollide(snakeArr)) {
        soundItems.forEach((items)=>{
            if (items.classList.contains("sound")) {
                gameOver.play()
            }
        })
        gameOverBox.classList.remove("disabled")
        gameOverBox.classList.add("enabled")
        scoreBox.forEach((items)=>{
            items.innerHTML = "0"  
        })
        inputDir = {x:0,y:0};
        score = 0;
        snakeArr = [
            {x:12,y:13}
        ]
        musicLoop.pause()
        musicImgBtn.src = "icons/inactive-music.svg"
    }
    

        //updating the snake
        if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
            soundItems.forEach((items)=>{
                if (items.classList.contains("sound")) {
                    collectPoints.play()
                }
            })
            score +=1;
            if (score>hiscoreVal) {
                hiscoreVal = score
                localStorage.setItem("hiscore",JSON.stringify(hiscoreVal))
                HiScoreBox.forEach((items)=>{
                    items.innerHTML = hiscoreVal
                })
            }
            scoreBox.forEach((items)=>{
                items.innerHTML = score;
            })
            snakeArr.unshift({x: snakeArr[0].x + inputDir.x,y: snakeArr[0].y + inputDir.y})
            let a = 2;
            let b = 16;
            food = {x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
            //levels scores
            let easyRect = document.querySelector(".easyVal");
            let normalRect = document.querySelector(".normalVal");
            let hardRect = document.querySelector(".hardVal");
            let insaneRect = document.querySelector(".insaneVal");
            // levelVals for localStorage

            if (levelVal === "Easy") {
                localStorage.setItem("easyStore",JSON.stringify(hiscoreVal))
                localStorage.getItem("easyStore")
                easyRect.innerHTML = score
            }else if(levelVal === "Normal"){
                localStorage.setItem("normalStore",JSON.stringify(hiscoreVal))
                normalRect.innerHTML = score
            }else if(levelVal === "Hard"){
                localStorage.setItem("hardStore",JSON.stringify(hiscoreVal))
                hardRect.innerHTML = score
            }else if(levelVal === "Insane"){
                localStorage.setItem("insaneStore",JSON.stringify(hiscoreVal))
                insaneRect.innerHTML = score
            }   
        }
        
        
        
        //moving the snake
        for (let i = snakeArr.length - 2;i>=0; i--) {
            snakeArr[i+1] = {...snakeArr[i]}
        }
        snakeArr[0].x += inputDir.x
        snakeArr[0].y += inputDir.y

        
        gameBoard.innerHTML = "";
        snakeArr.forEach((e,index)=>{
        let snakeElement = document.createElement("div");
        if (index === 0) {
            snakeElement.classList.add("headBubble");
        }else{
            snakeElement.classList.add("snakeBubble");
        }
        if (levelVal === "Easy" || levelVal === "Normal") {
            snakeElement.classList.add("old")
            snakeElement.classList.remove("new")
        }
        if (levelVal === "Hard" || levelVal === "Insane") {
            snakeElement.classList.remove("old")
            snakeElement.classList.add("new")
        }
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x
        gameBoard.appendChild(snakeElement)
        
        //Display the food
        let foodElement = document.createElement("div")
        foodElement.classList.add("foodBubble")
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x
        gameBoard.appendChild(foodElement)
        foodElement.style.backgroundColor = hexValue

    })
}


let hiscoreNum = localStorage.getItem("hiscore");
let hiscoreVal = 0;
if (hiscore === null) {
    localStorage.setItem("hiscore",JSON.stringify(hiscoreVal))
} else {
    hiscoreVal = JSON.parse(hiscore)
    HiScoreBox.forEach((items)=>{
        items.innerHTML = hiscore
    })
}

window.requestAnimationFrame(main);
const isKeysSound = () => {
    soundItems.forEach((items)=>{
        if (items.classList.contains("sound")) {
            move.play()
        }
    })
}

const overRemover = () => {
    if (gameOverBox.classList.contains("enabled")) {
        gameOverBox.classList.replace("enabled","disabled")
    }
}

window.addEventListener("keydown",(e)=>{
    const wasdLogicKeys = ()=>{
        let key = e.key;
        switch (key) {
            case "w":
                inputDir.x = 0;
                inputDir.y = -1;
                overRemover()
                gameMsg.classList.add("disabled")
                isKeysSound()
                break;
        
            case "a":
                inputDir.x = -1;
                inputDir.y = 0;
                overRemover()
                gameMsg.classList.add("disabled")
                isKeysSound()
                break;
        
            case "s":
                inputDir.x = 0;
                inputDir.y = 1;
                overRemover()
                gameMsg.classList.add("disabled")
                isKeysSound()
                break;
        
            case "d":
                inputDir.x = 1;
                inputDir.y = 0;
                overRemover()
                gameMsg.classList.add("disabled")
                isKeysSound()
                break;
        
            default:
                break;
        }
    }
    const ArrowLogicKeys = ()=>{
        let key = e.key;
        switch (key) {
            case "ArrowUp":
                inputDir.x = 0;
                inputDir.y = -1;
                overRemover()
                gameMsg.classList.add("disabled")
                isKeysSound()
                break;
        
            case "ArrowLeft":
                inputDir.x = -1;
                inputDir.y = 0;
                overRemover()
                gameMsg.classList.add("disabled")
                isKeysSound()
                break;
        
            case "ArrowDown":
                inputDir.x = 0;
                inputDir.y = 1;
                overRemover()
                gameMsg.classList.add("disabled")
                isKeysSound()
                break;
        
            case "ArrowRight":
                inputDir.x = 1;
                inputDir.y = 0;
                overRemover()
                gameMsg.classList.add("disabled")
                isKeysSound()
                break;
        
            default:
                break;
        }
    }
    if (wasdKeysBtn.classList.contains("selected")) {
        wasdLogicKeys()
    }else if(arrowKeysBtn.classList.contains("selected")){
        ArrowLogicKeys()
    }
})

let startX,startY,endX,endY;

const handleTouchStart = (e)=>{
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
}
const handleTouchEnd = (e)=>{
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    handleSwipe()
}

const handleSwipe = ()=>{
    const deltaX = endX - startX
    const deltaY = endY - startY
    const threshold = 50

    if (Math.abs(deltaX)>threshold) {
        //horizontal swipe
        if (deltaX>0) {
            move.play()
            inputDir.x = 1;
            inputDir.y = 0;
        } else {
            move.play()
            inputDir.x = -1;
            inputDir.y = 0;
        }
    }else if(Math.abs(deltaY)>threshold){
        if (deltaY>0) {
            move.play()
            inputDir.x = 0;
            inputDir.y = 1;
        } else {
            move.play()
            inputDir.x = 0;
            inputDir.y = -1;
        }
    }

}
document.addEventListener("touchstart",handleTouchStart,false)
document.addEventListener("touchend",handleTouchEnd,false)

// logic's for Mobile
let settings = document.querySelector(".settings");
let settingsImg = document.querySelector(".settings img");

settings.addEventListener("click",()=>{
    if (settings.classList.contains("toggle")) {
        settings.classList.remove("toggle")
        cogPanel.classList.remove("enabled")
        settingsImg.style.transform = "rotate(0deg)"
    } else {
        cogPanel.classList.add("enabled")
        settings.classList.add("toggle")
        settingsImg.style.transform = "rotate(180deg)"
    }
})

// logic's for windows
document.body.addEventListener("keydown",(e)=>{
    let key = e.keyCode

    switch (key) {
        case 32:
            if (gameOverBox.classList.contains("enabled")) {
                playBtn.click()
            }
            break;
    
        default:
            break;
    }
})
document.body.addEventListener("keydown",(e)=>{
    let key = e.key

    switch (key) {
        case "1":
            levelBtn.click()
            break;
    
        case "2":
            clrBtn.click()
            break;
    
        case "3":
            sndBtn.click()
            break;
    
        case "4":
            musicBtn.click()
            break;
    
        case "5":
            controlBtn.click()
            break;
    
        case "Tab":
            gameLogoBox.click()
            break;
    
        case "Escape":
            if (gameOverBox.classList.contains("enabled")) {
                cancelBtn.click()
            }
            break;
    
        default:
            break;
    }
})