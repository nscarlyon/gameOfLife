describe("Game of LIfe", function() {
    it("has cells", function() {
        cell = new Cell();
        expect(cell).toEqual(new Cell());
    });

    it("cell has life status", function() {
        expect(cell.status).toBeDefined();
    });

    it("initiated cell with life status", function() {
        var alive = true;
        expect(cell.lifeStatus(alive).toEqual(true));
    });
});