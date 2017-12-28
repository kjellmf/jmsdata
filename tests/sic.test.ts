import {Sic} from "../src/";

describe("SIC class", () => {

    function testSic(sic) {
        expect(sic.version).toBe("10");
        expect(sic.context).toBe("0");
        expect(sic.standardIdentity).toBe("3");
        expect(sic.symbolSet).toBe("10");
        expect(sic.status).toBe("0");
        expect(sic.hqtfd).toBe("2");
        expect(sic.amplifier).toBe("1");
        expect(sic.amplifierDescriptor).toBe("8");
        expect(sic.entity).toBe("12");
        expect(sic.entityType).toBe("11");
        expect(sic.entitySubType).toBe("02");
        expect(sic.modifierOne).toBe("01");
        expect(sic.modifierTwo).toBe("01");
    }

    it("has a constructor", () => {
        expect(new Sic("10031002181211020000")).toBeInstanceOf(Sic)
    });

    it("can have an empty constructor", () => {
        expect(new Sic()).toBeInstanceOf(Sic)
    });

    it("default sic is 10000000000000000000", () => {
        let sic = new Sic();
        expect(sic.version).toBe("10");
        expect(sic.context).toBe("0");
        expect(sic.standardIdentity).toBe("0");
        expect(sic.symbolSet).toBe("00");
        expect(sic.status).toBe("0");
        expect(sic.hqtfd).toBe("0");
        expect(sic.amplifier).toBe("0");
        expect(sic.amplifierDescriptor).toBe("0");
        expect(sic.entity).toBe("00");
        expect(sic.entityType).toBe("00");
        expect(sic.entitySubType).toBe("00");
        expect(sic.modifierOne).toBe("00");
        expect(sic.modifierTwo).toBe("00");
    });

    it("initializes from string", () => {
        let sic = new Sic("10031002181211020101");
        testSic(sic)
    });

    it("toString() returns SIC", () => {
        let numberSic = "10031002181211020102";
        let sic = new Sic(numberSic);
        expect(sic.toString()).toBe(numberSic);
    });

    it("can change parts of SIC", () => {
        let sic = new Sic("10031002181211020102");
        sic.version = "99";
        sic.modifierTwo = "55";
        expect(sic.toString()).toBe("99031002181211020155");
    });


});
