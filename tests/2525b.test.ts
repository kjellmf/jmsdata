import {m2525c} from "2525c";


describe("2525C support", () => {

    it("has echelon mappings", () => {
        let echelons = m2525c.ECHELONS;
        expect(echelons.B).toBe("Squad");
    });


});
