import { BerlinClock } from "../src/app.js";

describe("minute line", function () {
    const clock = new BerlinClock();

    it("1MinuteLine should return off when given 0:00", function () {
        const time = "0:00";

        const result = clock.oneMinuteLine(time);
        
        console.log("Test oneMinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("aucune lampe allumée");
    });

    it("1MinuteLine should return 1 lampe when given 0:01 ", function () {
        const time = "0:01";

        const result = clock.oneMinuteLine(time);

        console.log("Test oneMinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("1ère lampe jaune allumée");
    });

    it("1MinuteLine should return 2 lampes when given 0:02 ", function () {
        const time = "0:02";

        const result = clock.oneMinuteLine(time);

        console.log("Test oneMinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("deux lampes jaune allumée");
    });

    it("1MinuteLine should return 3 lampes when given 0:03 ", function () {
        const time = "0:03";

        const result = clock.oneMinuteLine(time);

        console.log("Test oneMinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("trois lampes jaune allumée");
    });

    it("1MinuteLine should return 4 lampes when given 0:04 ", function () {
        const time = "0:04";

        const result = clock.oneMinuteLine(time);

        console.log("Test oneMinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("quatre lampes jaune allumée");
    });
    it("1MinuteLine should return off when given 0:15 ", function () {
        const time = "0:15";

        const result = clock.oneMinuteLine(time);

        console.log("Test oneMinuteBlock:", time,":",result);

        console.log("");
        
        expect(result).toBe("aucune lampe allumée");
    });
});

describe("the 5MinuteLine", function() {
    const clock = new BerlinClock();

    it("5MinuteLine should return no lamp when given 0:00", function() {
        const time = "0:00";
        const result = clock.fiveMinuteLine(time);

        console.log("Test 5MinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("Aucune lampe allumée");
    });

    it("5MinuteLine should return 1 lamp when given 0:05", function() {
        const time = "0:05";
        const result = clock.fiveMinuteLine(time);

        console.log("Test 5MinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("lampe jaune");
    });

    it("5MinuteLine should return 2 lamps when given 0:10", function() {
        const time = "0:10";
        const result = clock.fiveMinuteLine(time);

        console.log("Test 5MinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("lampe jaune, lampe jaune");
    });

    it("5MinuteLine should return 3 lamps when given 0:15", function() {
        const time = "0:15";
        const result = clock.fiveMinuteLine(time);

        console.log("Test 5MinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("lampe jaune, lampe jaune, lampe rouge");
    });

    it("5MinuteLine should return 4 lamps when given 0:20", function() {
        const time = "0:20";
        const result = clock.fiveMinuteLine(time);

        console.log("Test 5MinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("lampe jaune, lampe jaune, lampe rouge, lampe jaune");
    });

    it("5MinuteLine should return 5 lamps when given 0:25", function() {
        const time = "0:25";
        const result = clock.fiveMinuteLine(time);

        console.log("Test 5MinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune");
    });

    it("5MinuteLine should return 6 lamps when given 0:30", function() {
        const time = "0:30";
        const result = clock.fiveMinuteLine(time);

        console.log("Test 5MinuteBlock:", time,":",result);

        console.log("");
        
        expect(result).toBe("lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune, lampe rouge");
    });

    it("5MinuteLine should return 7 lamps when given 0:35", function() {
        const time = "0:35";
        const result = clock.fiveMinuteLine(time);

        console.log("Test 5MinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune, lampe rouge, lampe jaune");
    });

    it("5MinuteLine should return 8 lamps when given 0:40", function() {
        const time = "0:40";
        const result = clock.fiveMinuteLine(time);

        console.log("Test 5MinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune");
    });

    it("5MinuteLine should return 9 lamps when given 0:45", function() {
        const time = "0:45";
        const result = clock.fiveMinuteLine(time);

        console.log("Test 5MinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune, lampe rouge");
    });

    it("5MinuteLine should return 10 lamps when given 0:50", function() {
        const time = "0:50";
        const result = clock.fiveMinuteLine(time);

        console.log("Test 5MinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune, lampe rouge, lampe jaune");
    });

    it("5MinuteLine should return 11 lamps when given 0:55", function() {
        const time = "0:55";
        const result = clock.fiveMinuteLine(time);

        console.log("Test 5MinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune");
    });

    it("5MinuteLine should return 3 lamps of five minutes and 2 lamps of one minute when given 0:12", function() {
        const time = "0:12";

        const result = clock.fiveMinuteLine(time) + "\n" + clock.oneMinuteLine(time);

        console.log("Test 5MinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("lampe jaune, lampe jaune\ndeux lampes jaune allumée");
    });
});

describe("the oneHoureLine", function () {
    const clock = new BerlinClock();

    it("oneHourLine should return no lamp when given 0:00", function () {
        const time = "0:00";

        const result = clock.oneHourLine(time);

        console.log("Test oneHoursBlock:", time,":",result);

        console.log("");


        expect(result).toBe("Aucune lampe allumée");
    });

    it("oneHourLine should return 1 lamp when given 1:00", function () {
        const time = "1:00";

        const result = clock.oneHourLine(time);

        console.log("Test oneHoursBlock:", time,":",result);

        console.log("");


        expect(result).toBe("une lampe rouge allumée");
    });

    it("oneHourLine should return 2 lamps when given 2:00", function () {
        const time = "2:00";

        const result = clock.oneHourLine(time);

        console.log("Test oneHoursBlock:", time,":",result);

        console.log("");


        expect(result).toBe("deux lampes rouge allumée");
    });

    it("oneHourLine should return 3 lamps when given 3:00", function () {
        const time = "3:00";

        const result = clock.oneHourLine(time);

        console.log("Test oneHoursBlock:", time,":",result);

        console.log("");

        expect(result).toBe("trois lampes rouge allumée");
    });


    it("oneHourLine should return 4 lamps when given 4:00", function () {
        const time = "4:00";

        const result = clock.oneHourLine(time);

        console.log("Test oneHoursBlock:", time,":",result);

        console.log("");

        expect(result).toBe("quatre lampes rouge allumée");
    });

});

describe("the fiveHoursLine", function () {
    const clock = new BerlinClock();

    it("fiveHoursLine should return no lamp when given 0:00", function () {
        const time = "0:00";

        const result = clock.fiveHourLine(time);

        console.log("Test fiveHoursBlock:", time,":",result);

        console.log("");

        expect(result).toBe("Aucune lampe allumée");

    });

    it("fiveHoursLine should return 1 lamps when given 5:00", function () {
        const time = "5:00";

        const result = clock.fiveHourLine(time);

        console.log("Test fiveHoursBlock:", time,":",result);

        console.log("");

        expect(result).toBe("une lampe rouge allumée");
    });

    it("fiveHoursLine should return 2 lamps when given 10:00", function () {
        const time = "10:00";

        const result = clock.fiveHourLine(time);

        console.log("Test fiveHoursBlock:", time,":",result);

        console.log("");

        expect(result).toBe("deux lampes rouge allumée");
    });

    it("fiveHoursLine should return 3 lamps when given 15:00", function () {
        const time = "15:00";

        const result = clock.fiveHourLine(time);

        console.log("Test fiveHoursBlock:", time,":",result);

        console.log("");

        expect(result).toBe("trois lampes rouge allumée");
    });

    it("fiveHoursLine should return 4 lamps when given 20:00", function () {
        const time = "20:00";

        const result = clock.fiveHourLine(time);

        console.log("Test fiveHoursBlock:", time,":",result);

        console.log("");

        expect(result).toBe("quatre lampes rouge allumée");
    });
});

describe("the secondsLine", function () {
    const clock = new BerlinClock();

    it("secondeLine should return lamp when given 0:00:01", function () {
        const time = "0:00:01";

        const result = clock.secondeLine(time);

        console.log("Test secondes:", time,":",result);

        console.log("");

        expect(result).toBe("lampe éteinte");
    });

    it("secondeLine should return lamp when given 0:00:02", function () {
        const time = "0:00:02";

        const result = clock.secondeLine(time);

        console.log("Test secondes:", time,":",result);

        console.log("");

        expect(result).toBe("lampe jaune allumée");
    });

    it("secondeLine should return lamp when given 0:00:03", function () {
        const time = "0:00:03";

        const result = clock.secondeLine(time);

        console.log("Test secondes:", time,":",result);

        console.log("");

        expect(result).toBe("lampe éteinte");
    });
});

describe("the berlinclock",function(){
    const clock=new BerlinClock();

    it("berlinClick should return the correct result when given 0:00:00",function(){
        const time="0:00:00";

        const result=clock.berlinClock(time)
        console.log("Test berlin_cock:", time,":","[",result,"]");
        console.log("");
        expect(result).toBe("Aucune lampe allumée"+"\n"+"Aucune lampe allumée"+"\n"+"Aucune lampe allumée"+"\n"+"aucune lampe allumée"+"\n"+"lampe jaune allumée");
    });

     it("berlinClick should return the correct result when given 19:42:01",function(){
         const time="19:42:01";

         const result=clock.berlinClock(time)
         console.log("Test berlin_clock:", time,":","[",result,"]");
         console.log("");
        // expect(result).toBe("trois lampes rouge allumée\nquatre lampes rouge allumée\n1er lampe jaune ,2ème lampe jaune,3ème lampe rouge,4ème lampe jaune,5ème lampe jaune,6ème lampe rouge,7ème lampe jaune,8ème lampe jaune\ndeux lampes jaune allumée\nlampe éteinte");
        expect(result).toBe("trois lampes rouge allumée"+"\n"+"quatre lampes rouge allumée"+"\n"+"lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune"+"\n"+"deux lampes jaune allumée"+"\n"+"lampe éteinte");


    });
it("berlinClock should return the correct representation for 23:59:59", function() {
        const time = "23:59:59";

        const result = clock.berlinClock(time);
        console.log("Test berlin_clock:", time,":","[",result,"]");
        console.log("");
        // expect(result).toBe("quatre lampes rouge allumée\ntrois lampes rouge allumée\n1er lampe jaune ,2ème lampe jaune,3ème lampe rouge,4ème lampe jaune,5ème lampe jaune,6ème lampe rouge,7ème lampe jaune,8ème lampe jaune,9ème lampe rouge,10ème lampe jaune,11ème lampe jaune\nles quatre lampes jaune allumée\nlampe éteinte");
        expect(result).toBe("quatre lampes rouge allumée"+"\n"+"trois lampes rouge allumée"+"\n"+"lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune, lampe rouge, lampe jaune, lampe jaune"+"\n"+"quatre lampes jaune allumée"+"\n"+"lampe éteinte");

    });
});
