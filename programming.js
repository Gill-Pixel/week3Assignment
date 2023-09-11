const condition = () => {"Cost is too High!"};

function addPaintAndSupplies(totalCost, callback) {
    let cost = prompt("Enter the cost for the paint and supplies :");
    cost = parseFloat(cost);
    if (cost > 100){
        cost *= 1.1}
    else(condition());

    // Get a handle for the paint paragraph

    let paintArea = document.querySelector(".paint");
    paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);
}

//floor
function floorCoverings(totalCost, callback){
    let cost = prompt("Enter the cost of your floor covering here: ");
    cost = parseFloat(cost);
    if (cost <= 2000);
    if (cost < 500){
        cost *= 0.15}
    else(condition());

    let floorplan = document.querySelector(".floorcost");
    floorplan.innerHTML = `Floor $ ${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);
}

//furniture
let furniture = (totalCost, callback) =>{
    let cost = prompt("Enter the cost of your furniture here: ");
    cost = parseFloat(cost);
    if (cost <= 2000);
    if (cost < 500){
        cost *= 0.10}
    else(condition());

    let furnitureplan = document.querySelector(".furniture");
    furnitureplan.innerHTML = `Furniture $ ${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);

}


// const totals = (cost) => {
//     let totalsArea = document.querySelector(".totalCost");
//     totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;
// }

const updateTotals = (cost) => {
    // Get a handle for the furniture paragraph
    let totalsArea = document.querySelector(".totalCost");
    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;
}

// function updates(addedCost){
//     let UpdatedTotals = UdpdatedTotals(addedCost);
//     alert(UpdatedTotals);
// }

let totalCost = 0;
totalCost = addPaintAndSupplies(totalCost, updateTotals);
totalCost = furniture(totalCost, updateTotals);
totalCost = floorCoverings(totalCost, updateTotals);
//updates(cost);

// ....


