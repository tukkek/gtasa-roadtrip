export function roll(min,max){//
  min=Math.ceil(min)
  max=Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)+min)
}

export function pick(array){return array[roll(0,array.length-1)]}
