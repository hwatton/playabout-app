function sqData(){

let beans = []

const tx = Math.floor(Math.random()*20)
const ty = Math.floor(Math.random()*40)

let colStep = 256/41



for (let i =0; i<20 ; i++) {
    for (let j =0; j<40 ; j++) {

        let dx = i - tx
        let dy = j - ty

    beans.push(hypo(dx,dy)*colStep)

    }
}

    return beans
}

function hypo(x,y) {
    return Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
}

export default sqData