import * as rpg from '../controller/rpg.js'

const VEHICLES={
  'sports car':14,
  'SUV or pickup truck':12,
  'lowrider':7,
  'pimp missions':1,
  'tuner':6,
  'van':9,
  'industrial':15,
  'burglar missions':1,
  'coupe or hatchback':18,
  'sedan or station wagon':22,
  'train missions':2,
  'public service':8,
  'taxi missions':2,
  'novelty':11,
  'vigilante missions':9,
  'paramedic missions':1,
  'firefighter missions':1,
  'helicopter':9,
  'plane':11,
  'boat':10,
  'motorcycle':9,
  'bike':3,
  'remote control':5,
  'jetpack':1,
  'trailer or rolling stock':9,
}
const VEHICLE=document.querySelector('#vehicle span')

export function setup(){
  let nvehicles=Array.from(Object.keys(VEHICLES)).map(k=>VEHICLES[k]).reduce((a,b)=>a+b)
  let r=rpg.roll(1,nvehicles)
  for(let v of Object.keys(VEHICLES)){
    r-=VEHICLES[v]
    if(r>0) continue
    VEHICLE.textContent=v
    break
  }
}
