export interface general{
  pokemon: Pokemon[];
}

export interface Pokemon{
  pokemon:{name:string, url:string}
  slot:number
}
