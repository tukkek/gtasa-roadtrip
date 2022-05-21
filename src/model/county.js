import * as city from './city.js'

class County extends city.City{
  constructor(name,x,y){
    super(name,x,y)
    this.districts.push(new city.District(name))
  }
  
  visit(name,x,y){this.districts[0].visit(name,x,y)}
}

class RedCounty extends County{
  constructor(){
    super('Red County',600,500)
    this.visit("Palomino Creek",this.x,this.y)
    this.visit("Montgomery",this.x,this.y)
    this.visit("Blueberry",this.x,this.y)
    this.visit("Dillimore",this.x,this.y)
    this.visit("Blueberry Acres",this.x,this.y)
    this.visit("Broken Wooden Bridge",this.x,this.y)
    this.visit("Fern Ridge",this.x,this.y)
    this.visit("Fisher's Lagoon",this.x,this.y)
    this.visit("Hampton Barns",this.x,this.y)
    this.visit("Hanky Panky Point",this.x,this.y)
    this.visit("Hilltop Farm",this.x,this.y)
    this.visit("Montgomery Intersection",this.x,this.y)
    this.visit("North Rock",this.x,this.y)
    this.visit("The Panopticon",this.x,this.y)
  }
}

class FlintCounty extends County{
  constructor(){
    super('Flint County',400,800)
    this.visit("Back o' Beyond",this.x,this.y)
    this.visit("Beacon Hill",this.x,this.y)
    this.visit("Easter Bay Chemicals",this.x,this.y)
    this.visit("Easter Tunnel",this.x,this.y)
    this.visit("Fallen Tree",this.x,this.y)
    this.visit("Flint Intersection Trailer Park",this.x,this.y)
    this.visit("Flint Intersection",this.x,this.y)
    this.visit("Flint Range",this.x,this.y)
    this.visit("Flint Waters",this.x,this.y)
    this.visit("Leafy Hollow",this.x,this.y)
    this.visit("Los Santos Inlet",this.x,this.y)
    this.visit("The Farm",this.x,this.y)
  }
}

class Whetstone extends County{
  constructor(){
    super('Whetstone',100,800)
    this.visit("Angel Pine",this.x,this.y)
    this.visit("Mount Chiliad",this.x,this.y)
    this.visit("Shady Cabin",this.x,this.y)
    this.visit("Shady Creeks",this.x,this.y)
  }
}

class TierraRobada extends County{
  constructor(){
    super('Tierra Robada',200,200)
    this.visit("Aldea Malvada",this.x,this.y)
    this.visit("Bayside",this.x,this.y)
    this.visit("El Quebrados",this.x,this.y)
    this.visit("Las Barrancas",this.x,this.y)
    this.visit("Valle Ocultado",this.x,this.y)
    this.visit("Arco del Oeste",this.x,this.y)
    this.visit("Bayside Marina",this.x,this.y)
    this.visit("Bayside Tunnel",this.x,this.y)
    this.visit("The Cordillera",this.x,this.y)
    this.visit("Robada Intersection",this.x,this.y)
    this.visit("Sherman Reservoir",this.x,this.y)
    this.visit("Sherman Dam",this.x,this.y)
  }
}

class BoneCounty extends County{
  constructor(){
    super('Bone County',500,100)
    this.visit("Fort Carson",this.x,this.y)
    this.visit("Las Brujas",this.x,this.y)
    this.visit("Las Payasadas",this.x,this.y)
    this.visit("Ammu-Nation",this.x,this.y)
    this.visit("El Castillo del Diablo",this.x,this.y)
    this.visit("Hunter Quarry",this.x,this.y)
    this.visit("Green Palms",this.x,this.y)
    this.visit("Lil' Probe'Inn",this.x,this.y)
    this.visit("No Fly Zone",this.x,this.y)
    this.visit("Octane Springs",this.x,this.y)
    this.visit("Regular Tom",this.x,this.y)
    this.visit("The Big Ear",this.x,this.y)
    this.visit("The Big Spread Ranch",this.x,this.y)
    this.visit("Verdant Meadows",this.x,this.y)
    this.visit("Bone County Rail Tunnel",this.x,this.y)
  }
}

export var red=new RedCounty()
export var flint=new FlintCounty()
export var whetstone=new Whetstone()
export var tierrarobada=new TierraRobada()
export var bone=new BoneCounty()
