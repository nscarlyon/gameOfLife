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

    it("returns population status when there less than two", function() {
        expect(populationStatus(1)).toEqual("dead");
    });

    it("returns population status there are more than three", function() {
        expect(populationStatus(4)).toEqual("dead");
    });


    it("returns population status there two people", function() {
        expect(populationStatus(2)).toEqual("alive");
    });


});