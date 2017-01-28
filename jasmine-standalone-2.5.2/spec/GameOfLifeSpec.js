describe("Game of LIfe", function() {
    it("returns state of cell", function() {
        var cell = {
            state: 1
        };
        expect(stateOfCell(cell)).toEqual(1);
    })
});