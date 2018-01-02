import {symbolSets} from "../src/";

/* Mdule interface experiments*/
describe("Symbolsets ", () => {

    it("exists", () => {
        expect(symbolSets).toBeDefined();
    });

    it("interface", () => {
        let ssAir = symbolSets[1];
        expect(ssAir.digits).toEqual("01");
        expect(ssAir.label).toEqual("Air");
        expect(ssAir.id).toEqual("SS_AIR");
        expect(ssAir.dimensionId).toEqual("AIR");
        expect(ssAir.geometry).toEqual("POINT");
        expect(ssAir.entities).toBeDefined();
    });

});
