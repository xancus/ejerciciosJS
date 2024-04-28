const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/

function cyberReindeer (road, time) {
    let roadArray = road.split('')
    let stop = false
    for (let i = 1; i <= time; i++) {
        console.log(roadArray.join(''))
        if(stop && i < 5) {
            continue
        } else if(stop && i === 5 ) {
            stop = false
            roadArray = roadArray.map(el => el === '|' ? '*' : el)
            roadArray = move(roadArray, i)
            continue
        }
         if(roadArray[i] === '.' || roadArray[i] === '*') {     
            roadArray = move(roadArray, i)   
                       
         } else if(roadArray[i] === '|') {
            stop = true
         }
    }
}

function move(roadArray, i) {
    const sIdx = roadArray.findIndex(el => el==='S')
    if(road[sIdx] === '.' || road[sIdx] === 'S') roadArray[sIdx] ='.'
    else {
        if (i >=6){
            roadArray[sIdx] = '*'
        } else {
            roadArray[sIdx] = road[sIdx]
        }
    }
    roadArray[sIdx+1] = 'S' 
    return roadArray
}