describe("Game of LIfe", function() {
    it("returns state of cell", function() {
        var cell = {
            state: 1
        };
        expect(stateOfCell(cell)).toEqual(1);
    });

    it("returns the number of neighbors", function() {

        expect(getTotalNeighbors(4)).toEqual(4);
    });

});