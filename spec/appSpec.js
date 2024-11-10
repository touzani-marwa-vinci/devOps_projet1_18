import {BerlinClock} from "../src/app.js";

describe("minute line",function(){
    const clock=new BerlinClock();

    it("1MinuteLine should return off when given 0:00",function(){
        const time="0:00";

        const result=clock.oneMinuteLine(time);

        expect(result).toBe("aucune lampe allumée"); 
    });
     
    it("1MinuteLine should return 1 lampe when given 0:01 ",function(){
        const time="0:01";

        const result=clock.oneMinuteLine(time);

        expect(result).toBe("1ère lampe jaune allumée");
    });
    it("1MinuteLine should return 2 lampes when given 0:02 ",function(){
        const time="0:02";

        const result=clock.oneMinuteLine(time);

        expect(result).toBe("deux lampes jaune allumée");
    });

    it("1MinuteLine should return 3 lampes when given 0:03 ",function(){
        const time="0:03";

        const result=clock.oneMinuteLine(time);

        expect(result).toBe("trois lampes jaune allumée");
    });
    
    it("1MinuteLine should return 4 lampes when given 0:04 ",function(){
        const time="0:04";

        const result=clock.oneMinuteLine(time);

        expect(result).toBe("quatre lampes jaune allumée");
    });
    it("1MinuteLine should return off when given 0:15 ",function(){
        const time="0:15";

        const result=clock.oneMinuteLine(time);

        expect(result).toBe("aucune lampe allumée");
    });
    describe("the 5MinuteLine",function(){
        const clock=new BerlinClock();
    
        it("5MinuteLine should return no lamp when given 0:00",function(){
            const time="0:00";
    
            const result=clock.fiveMinuteLine(time);
    
            expect(result).toBe("Aucune lampe allumée");
        });
    
        it("5MinuteLine should return 1 lamp when given 0:05",function(){
            const time="0:05";
    
            const result=clock.fiveMinuteLine(time);
    
            expect(result).toBe("1er lampe jaune allumé");
        });
    
        it("5MinuteLine should return 2 lamp when given 0:10",function(){
            const time="0:10";
    
            const result=clock.fiveMinuteLine(time);
    
            expect(result).toBe("1er lampe jaune ,2ème lampe jaune");
        });
    
        it("5MinuteLine should return 3 lamp when given 0:15",function(){
            const time="0:15";
    
            const result=clock.fiveMinuteLine(time);
    
            expect(result).toBe("1er lampe jaune ,2ème lampe jaune,3ème lampe rouge");
        });
    
        it("5MinuteLine should return 4 lamp when given 0:20",function(){
            const time="0:20";
    
            const result=clock.fiveMinuteLine(time);
    
            expect(result).toBe("1er lampe jaune ,2ème lampe jaune,3ème lampe rouge,4ème lampe jaune");
        });
    
        it("5MinuteLine should return 5 lamp when given 0:25",function(){
            const time="0:25";
    
            const result=clock.fiveMinuteLine(time);
    
            expect(result).toBe("1er lampe jaune ,2ème lampe jaune,3ème lampe rouge,4ème lampe jaune,5ème lampe jaune");
        });
    
        it("5MinuteLine should return 6 lamp when given 0:30",function(){
            const time="0:30";
    
            const result=clock.fiveMinuteLine(time);
    
            expect(result).toBe("1er lampe jaune ,2ème lampe jaune,3ème lampe rouge,4ème lampe jaune,5ème lampe jaune,6ème lampe rouge");
        });
    });

});