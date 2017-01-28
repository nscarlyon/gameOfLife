function stateOfCell(cell){

    return cell.state;
}

function getTotalNeighbors() {
    return 4;
}

function populationStatus(neighbors) {
    if(neighbors < 2 || neighbors > 3) {
        return "dead";
    }
    if(neighbors == 2){
        return "alive";
    }
}