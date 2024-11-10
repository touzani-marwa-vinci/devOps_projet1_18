export class BerlinClock {

    oneMinuteLine(time) {
        const minutes = parseInt(time.split(":")[1]);

        if (this.noLamp(minutes)) return "aucune lampe allumée";

        if (this.firstLamp(minutes)) return "1ère lampe jaune allumée";

        if (this.twoLamps(minutes)) return "deux lampes jaune allumée";

        if (this.threeLamps(minutes)) return "trois lampes jaune allumée";

        if (this.fourLamps(minutes)) return "quatre lampes jaune allumée";
    }

    fiveMinuteLine(time) {
        const minutes = parseInt(time.split(":")[1]);

        if (minutes < 5) return "Aucune lampe allumée";

        if (minutes >= 5 && minutes < 10) return "1er lampe jaune allumé";

        if (minutes >= 10 && minutes < 15) return "1er lampe jaune ,2ème lampe jaune";

        if (minutes >= 15 && minutes < 20) return "1er lampe jaune ,2ème lampe jaune,3ème lampe rouge";

        if (minutes >= 20 && minutes < 25) return "1er lampe jaune ,2ème lampe jaune,3ème lampe rouge,4ème lampe jaune";

        if (minutes >= 25 && minutes < 30) return "1er lampe jaune ,2ème lampe jaune,3ème lampe rouge,4ème lampe jaune,5ème lampe jaune";

        if (minutes >= 30 && minutes < 35) return "1er lampe jaune ,2ème lampe jaune,3ème lampe rouge,4ème lampe jaune,5ème lampe jaune,6ème lampe rouge";

        if (minutes >= 35 && minutes < 40) return "1er lampe jaune ,2ème lampe jaune,3ème lampe rouge,4ème lampe jaune,5ème lampe jaune,6ème lampe rouge,7ème lampe jaune";

        if (minutes >= 40 && minutes < 45) return "1er lampe jaune ,2ème lampe jaune,3ème lampe rouge,4ème lampe jaune,5ème lampe jaune,6ème lampe rouge,7ème lampe jaune,8ème lampe jaune";

        if (minutes >= 45 && minutes < 50) return "1er lampe jaune ,2ème lampe jaune,3ème lampe rouge,4ème lampe jaune,5ème lampe jaune,6ème lampe rouge,7ème lampe jaune,8ème lampe jaune,9ème lampe rouge";

        if (minutes >= 50 && minutes < 55) return "1er lampe jaune ,2ème lampe jaune,3ème lampe rouge,4ème lampe jaune,5ème lampe jaune,6ème lampe rouge,7ème lampe jaune,8ème lampe jaune,9ème lampe rouge,10ème lampe jaune";

        if (minutes >= 55 && minutes < 60) return "1er lampe jaune ,2ème lampe jaune,3ème lampe rouge,4ème lampe jaune,5ème lampe jaune,6ème lampe rouge,7ème lampe jaune,8ème lampe jaune,9ème lampe rouge,10ème lampe jaune,11ème lampe jaune";

    }

    oneHourLine(time) {

        const hours = parseInt(time.split(":")[0]) % 5;

        if (hours === 0) return "Aucune lampe allumée";
        if (hours === 1) return "une lampe rouge allumée";
        if (hours === 2) return "deux lampes rouge allumée";
        if (hours === 3) return "trois lampes rouge allumée";
        if (hours === 4) return "quatre lampes rouge allumée";
    }

    fiveHourLine(time) {

        const hours = parseInt(time.split(":")[0]);

        if (hours < 5) return "Aucune lampe allumée";
        if (hours >= 5 && hours < 10) return "une lampe rouge allumée";
        if (hours >= 10 && hours < 15) return "deux lampes rouge allumée";
        if(hours>=15 && hours<20)return "trois lampes rouge allumée";
        if(hours>=20 && hours<25)return "quatre lampes rouge allumée";
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

    secondeLine(time){

        const seconds=parseInt(time.split(":")[2]);
        if(seconds %2===0)return "lampe jaune allumée";
        return "lampe éteinte";
    }

}