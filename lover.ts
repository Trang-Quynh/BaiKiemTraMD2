export class Lover {
    id:number;
    name:string;
    horoscope:string;
    homeTown: string;
    year:number;
    favorite:string;
    constructor(id:number, name:string,horoscope:string, homeTown:string, year:number, favorite:string) {
       this.id = id;
       this.name = name;
       this.horoscope = horoscope;
       this.year  = year;
       this.homeTown = homeTown;
       this.favorite = favorite;
    }
    setId(id:number){
        this.id = id;
    }
    setName(name:string){
        this.name = name;
    }
    setHoroscope(value:string){
        this.horoscope = value;
    }
    setYear(year:number){
        this.year = year
    }
    setHometown(value:string){
        this.homeTown = value;
    }
    setFavor(value:string){
        this.favorite = value;
    }
    getId():number{
        return this.id;
    }
    getName():string{
        return this.name;
    }

}