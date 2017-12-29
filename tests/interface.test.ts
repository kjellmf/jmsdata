import * as jms from "../src/";

/* Mdule interface experiments*/
describe("Symbol set independent data", () => {

    it("retrieve context", () => {
        expect(jms.contexts).toBeDefined();
        let reality = jms.contexts[0];
        expect(reality.digits).toBe("0");
        expect(reality.label).toBe("Reality");
        expect(reality.id).toBe("REALITY");

    });

    it("retrieve standard identities", () => {
        expect(jms.standardIdentities).toBeDefined();
        let sid = jms.standardIdentities[0];
        expect(sid.digits).toBe("0");
        expect(sid.label).toBe("Pending");
        expect(sid.id).toBe("SI_PENDING");

    });

    // it("retrieve status", () => {
    //     expect(jms.statuses).toBeDefined();
    // });
    //
    // it("retrieve status", () => {
    //     expect(jms.hqtfDummies).toBeDefined();
    // });
    //
    // it("retrieve amplifier", () => {
    //     expect(jms.amplifiers).toBeDefined();
    //     expect(jms.amplifiers[0].descriptors).toBeDefined();
    // });
    //
    // it("retrieve amplifier", () => {
    //     expect(jms.amplifiers).toBeDefined();
    //     expect(jms.amplifiers[0].descriptors).toBeDefined();
    // });


});
