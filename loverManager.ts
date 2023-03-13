import {Lover} from "./lover";

export class LoverManager {
    loverList:Lover[];
    constructor() {
        this.loverList = [];
    }
    getPersonNumber():number{
        return this.loverList.length;
    }
    getLoverList(){
        return this.loverList;
    }
    showAllPerson(){
        for (let i = 0; i < this.loverList.length; i++) {
            console.log(this.loverList[i])
        }
    }
}