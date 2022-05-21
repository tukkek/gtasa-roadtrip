import * as roadtrip from '../controller/roadtrip.js'

const HOME=document.querySelector('#home select')
const LOCATIONS=new Map()

export var home=false

function change(){
  home=LOCATIONS.get(HOME.value)
  roadtrip.update()
}

export function setup(){
  let areas=roadtrip.areas.flatMap(a=>a).sort((a,b)=>a.name.localeCompare(b.name))
  home=areas[4-1]
  for(var a of areas){
    var n=a.name
    LOCATIONS.set(n,a)
    let o=document.createElement('option')
    o.value=n;
    o.innerHTML=n;
    if(a==home) o.selected=true
    HOME.appendChild(o)
  }
  HOME.onchange=change
}
