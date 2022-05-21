import * as city from '../model/city.js'
import * as rpg from './rpg.js'
import * as home from '../view/home.js'
import * as county from '../model/county.js'

const LOCATIONS=document.querySelector('#locations ol')
const DESTINATIONS=9

export var areas=[
  [city.ls,city.lv,city.sf],
  [county.red,county.flint,county.whetstone,county.tierrarobada,county.bone]
]

var destinations=new Set()

function* travel(){
  let stops=[...destinations]
  let here=home.home.landmark
  while(stops.length>0){
    stops.sort((a,b)=>here.distance(b[1])-here.distance(a[1]))
    here=stops.pop(0)
    yield here
    here=here[1]
  }
}

export function update(){
  LOCATIONS.innerHTML=''
  for(let d of travel()){
    let div=document.createElement('li')
    div.textContent=`${d[1].name} (${d[0].name})`
    LOCATIONS.appendChild(div)
  }
}

export function setup(){
  while(destinations.size<DESTINATIONS){
    let a=rpg.pick(rpg.pick(areas))
    let d=rpg.pick(a.districts)
    let l=rpg.pick(d.landmarks)
    destinations.add([d,l])
  }
  update()
}
