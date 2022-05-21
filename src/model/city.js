import * as rpg from '../controller/rpg.js'

export class Landmark{
  constructor(name,x,y){
    this.name=name
    this.x=x//reference: 
    this.y=y
  }
  
  distance(landmark){
    let x=Math.pow(landmark.x-this.x,2)
    let y=Math.pow(landmark.y-this.y,2)
    return Math.sqrt(x+y)
  }
}

class District{
  constructor(name){
    this.name=name
    this.landmarks=[]
  }
  
  visit(name,x,y){this.landmarks.push(new Landmark(name,x,y))}
}

class City{
  constructor(name,x,y){
    this.name=name
    this.x=x//TODO temp
    this.y=y//TODO temp
    this.districts=[]
  }
  
  get landmark(){return new Landmark(this.name,this.x,this.y)}//TODO temp
}

class LosSantos extends City{
  constructor(){
    super('Los Santos',800,800)
    this.visitcentral()
    this.visitwest()
    this.visiteast()
    this.visitsouth()
  }
  
  visitcentral(){
    let central=new District('Central Los Santos')
    this.districts.push(central)
    central.visit('Los Santos Police Headquarters',this.x,this.y)
    central.visit('Los Santos Observatory',this.x,this.y)
    central.visit('Los Santos City Hall',this.x,this.y)
    central.visit('Los Santos Tower',this.x,this.y)
  }
  
  visitwest(){
    let west=new District('West Los Santos')
    this.districts.push(west)
    west.visit('Vinewood Sign',this.x,this.y)
    west.visit('Mulholland Safehouse',this.x,this.y)
    west.visit('Rodeo Hotel',this.x,this.y)
    west.visit('Via Rodeo',this.x,this.y)
    west.visit("Vinewood Tower",this.x,this.y)
    west.visit("Fatt Building",this.x,this.y)
    west.visit("El Dritch Theater",this.x,this.y)
    west.visit("Blastin' Fools Records Building",this.x,this.y)
    west.visit("Hobos",this.x,this.y)
    west.visit("Cathay Theater",this.x,this.y)
    west.visit("Vinewood Bouleletd",this.x,this.y)
    west.visit("Vinewood Cemetery",this.x,this.y)
    west.visit("Vinewood Temple Building",this.x,this.y)
    west.visit("Vinewood Walk of Fame",this.x,this.y)
    west.visit("as Jim's Sticky Ring",this.x,this.y)
    west.visit("The Bog Standard",this.x,this.y)
    west.visit("Los Santos Lighthouse",this.x,this.y)
    west.visit("Verona Beach Gym",this.x,this.y)
    west.visit("Yacht Harbor",this.x,this.y)
  }
  
  visiteast(){
    let east=new District('East Los Santos')
    this.districts.push(east)
    east.visit("Yacht Harbor",this.x,this.y)
    east.visit("Los Santos Forum",this.x,this.y)
    east.visit("Jefferson Towers",this.x,this.y)
    east.visit("Mama's Cinema",this.x,this.y)
    east.visit("El Corona Village",this.x,this.y)
    east.visit("Unity Station",this.x,this.y)
    east.visit("Ganton Courts projects",this.x,this.y)
    east.visit("Idlewood Projects",this.x,this.y)
    east.visit("Rosecrans Avenue",this.x,this.y)
    east.visit("Alhambra",this.x,this.y)
    east.visit("Grove Street",this.x,this.y)
    east.visit("County General Hospital",this.x,this.y)
    east.visit("Los Santos Storm Drain",this.x,this.y)
    east.visit("Willowfield Homes projects",this.x,this.y)
    east.visit("Saints Bouleletd Sign",this.x,this.y)
  }
  
  visitsouth(){
    let south=new District('South Los Santos')
    this.districts.push(south)
    south.visit("Ocean Docks bridge",this.x,this.y)
    south.visit("Los Santos International Airport",this.x,this.y)
  }
}

class SanFierro extends City{
  constructor(){
    super('San Fierro',100,500)
    this.visitmain()
    this.visitmore()
  }
  
  visitmain(){
    let main=new District('San Fierro')
    this.districts.push(main)
    main.visit('Battery Point',this.x,this.y)
    main.visit('Gant Bridge',this.x,this.y)
    main.visit('Garver Bridge',this.x,this.y)
    main.visit('Juniper Hollow',this.x,this.y)
    main.visit('Paradiso',this.x,this.y)
    main.visit('Esplanade North',this.x,this.y)
    main.visit('Esplanade East',this.x,this.y)
    main.visit('Downtown/Financial',this.x,this.y)
    main.visit('Calton Heights',this.x,this.y)
    main.visit('Chinatown',this.x,this.y)
    main.visit('Juniper Hill',this.x,this.y)
    main.visit('Palisades',this.x,this.y)
    main.visit('Santa Flora',this.x,this.y)
    main.visit('City Hall',this.x,this.y)
    main.visit('Queens',this.x,this.y)
    main.visit('Corvin Stadium',this.x,this.y)
    main.visit("King's",this.x,this.y)
    main.visit('Easter Basin',this.x,this.y)
    main.visit('Doherty',this.x,this.y)
    main.visit('Cranberry Station',this.x,this.y)
    main.visit('Garcia',this.x,this.y)
    main.visit('Hashbury',this.x,this.y)
    main.visit('Ocean Flats',this.x,this.y)
    main.visit('Avispa Country Club',this.x,this.y)
    main.visit('Missionary Hill',this.x,this.y)
    main.visit('Foster Valley',this.x,this.y)
    main.visit('Easter Bay Airport',this.x,this.y)
  }
  
  visitmore(){
    let more=new District('San Fierro landmark')
    this.districts.push(more)
    more.visit('Gant Bridge',this.x,this.y)
    more.visit('Big Pointy Building',this.x,this.y)
    more.visit('Windy Windy Windy Windy Street',this.x,this.y)
    more.visit('Battery Point',this.x,this.y)
    more.visit('Queens',this.x,this.y)
    more.visit('San Fierro City Hall',this.x,this.y)
    more.visit('Missionary Hill Radio Tower',this.x,this.y)
    more.visit('Foster Valley',this.x,this.y)
    more.visit('Pier 69',this.x,this.y)
    more.visit('Downtown Square',this.x,this.y)
    more.visit('Forth Bridge',this.x,this.y)
    more.visit('Ferry Building',this.x,this.y)
    more.visit('Grace Cathedral',this.x,this.y)
    more.visit('Golden Gate Park',this.x,this.y)
    more.visit('Fort Mason',this.x,this.y)
    more.visit('Presidio of San Francisco',this.x,this.y)
    more.visit('Cathedral of Saint Mary of the Assumption',this.x,this.y)
    more.visit('San Francisco Opera',this.x,this.y)
    more.visit('San Francisco cable car system',this.x,this.y)
    more.visit('Great Highway',this.x,this.y)
    more.visit('Zombotech',this.x,this.y)
  }
}

class LasVenturas extends City{
  constructor(){
    super('Las Venturas',800,200)
    this.visitmain()
    this.visitmore()
  }
  
  visitmain(){
    let main=new District('Las Venturas')
    this.districts.push(main)
    main.visit('Blackfield',this.x,this.y)
    main.visit('Creek',this.x,this.y)
    main.visit('Las Venturas International Airport',this.x,this.y)
    main.visit('Linden Side',this.x,this.y)
    main.visit('Old Venturas Strip',this.x,this.y)
    main.visit('Pilgrim',this.x,this.y)
    main.visit('Prickle Pine',this.x,this.y)
    main.visit('Redsands East',this.x,this.y)
    main.visit('Redsands West ',this.x,this.y)
    main.visit('Roca Escalante',this.x,this.y)
    main.visit('Rockshore East',this.x,this.y)
    main.visit('Rockshore West',this.x,this.y)
    main.visit('Spinybed',this.x,this.y)
    main.visit('The Strip',this.x,this.y)
    main.visit('Whitewood Estates',this.x,this.y)
  }
  
  visitmore(){
    let more=new District('Las Venturas landmark')
    this.districts.push(more)
    more.visit('Blackfield Chapel',this.x,this.y)
    more.visit('Blackfield Stadium',this.x,this.y)
    more.visit('Greenglass College',this.x,this.y)
    more.visit('K.A.C.C. Military Aviation Fuel Depot ',this.x,this.y)
    more.visit('La Conca',this.x,this.y)
    more.visit('Las Venturas Bandits Stadium ',this.x,this.y)
    more.visit('Las Venturas Welcome Sign',this.x,this.y)
    more.visit('Last Dime Motel',this.x,this.y)
    more.visit('Linden Station',this.x,this.y)
    more.visit('LVA Freight Depot',this.x,this.y)
    more.visit('Randolph Industrial Estate',this.x,this.y)
    more.visit('Sobell Rail Yards',this.x,this.y)
    more.visit('Yellow Bell Golf Course',this.x,this.y)
    more.visit('Yellow Bell Station',this.x,this.y)
  }
}

export var ls=new LosSantos()
export var sf=new SanFierro()
export var lv=new LasVenturas()
