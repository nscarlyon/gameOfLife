function stateOfCell(cell){

    return cell.state;
}

function getTotalNeighbors() {
    return 4;
}

function populationStatus(neighbors) {
    if(neighbors < 2) {
        return "dead"
    }

    return "dead"
}