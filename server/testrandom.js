
for(let i = 0; i < 52; i++) {
    let randNum = Math.floor(Math.random() * 51) + 1
    if(randNum == 51){
        console.log("FLAG: " + randNum.toString())
        break
    }
    console.log(randNum)
}