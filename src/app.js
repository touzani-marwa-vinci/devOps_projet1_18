export class BerlinClock{

    oneMinuteLine(time){
        const minutes=parseInt(time.split(":")[1]);
        if(minutes%10===0 ||minutes%10===5)return "aucune lampe allumée";
        if(minutes%10===1 ||minutes%10===6)return "1ère lampe jaune allumée";
        if(minutes%10===2 ||minutes%10===7)return "deux lampes jaune allumée";
        if(minutes%10===3 ||minutes%10===8)return "trois lampes jaune allumée";
        if(minutes%10===4 ||minutes%10===9)return "quatre lampes jaune allumée";




        
    }


}