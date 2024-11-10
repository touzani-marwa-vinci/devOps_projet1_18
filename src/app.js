export class BerlinClock{

    oneMinuteLine(time){
        const minutes=parseInt(time.split(":")[1]);
        if(minutes%10===0 ||minutes%10===5)return "aucune lampe allumée";
        if(minutes%10===1 ||minutes%10===6)return "1ère lampe jaune allumée";

        
    }


}