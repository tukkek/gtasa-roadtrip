import * as roadtrip from '../controller/roadtrip.js'

const HOME=document.querySelector('#home select')
const LOCATIONS=new Map()

export var home=false

function change(){
  home=LOCATIONS.get(HOME.value)
  roadtrip.update()
}

export function setup(){
  let areas=roadtrip.areas.flatMap(a=>a)
  home=areas[0]
  for(var a of areas){
    var n=a.name
    LOCATIONS.set(n,a)
    let o=document.createElement('option')
    o.value=n;
    o.innerHTML=n;
    HOME.appendChild(o)
  }
  HOME.onchange=change
}
