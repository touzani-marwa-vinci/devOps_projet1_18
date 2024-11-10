import {BerlinClock} from "../src/app.js";

describe("minute line",function(){
    const clock=new BerlinClock();

    describe("simpleLine should return off when given 0:00",function(){
        const time="0:00";

        const result=clock.oneMinuteLine(time);

        expect(result).toBe("aucune lampe allumée"); 
    });
     
    it("1MinuteLine should return 1 lampe when given 0:01 ",function(){
        const time="0:01";

        const result=clock.oneMinuteLine(time);

        expect(result).toBe("1ère lampe jaune allumée");
    });

});