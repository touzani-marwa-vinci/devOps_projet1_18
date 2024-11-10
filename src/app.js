export class BerlinClock{

    oneMinuteLine(time){
        const minutes=parseInt(time.split(":")[1]);

        if(this.noLamp(minutes))return "aucune lampe allumée";

        if(this.firstLamp(minutes))return "1ère lampe jaune allumée";

        if(this.twoLamps(minutes))return "deux lampes jaune allumée";

        if(this.threeLamps(minutes))return "trois lampes jaune allumée";
        
        if(this.fourLamps(minutes))return "quatre lampes jaune allumée";




        
    }



    fourLamps(minutes) {
        return minutes % 10 === 4 || minutes % 10 === 9;
    }

    threeLamps(minutes) {
        return minutes % 10 === 3 || minutes % 10 === 8;
    }

    twoLamps(minutes) {
        return minutes % 10 === 2 || minutes % 10 === 7;
    }

    firstLamp(minutes) {
        return minutes % 10 === 1 || minutes % 10 === 6;
    }

    noLamp(minutes) {
        return minutes % 10 === 0 || minutes % 10 === 5;
    }
}