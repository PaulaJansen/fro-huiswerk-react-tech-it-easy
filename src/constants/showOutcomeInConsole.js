import {bestSellingTv, inventory} from './inventory';

const allInventory = inventory.concat(bestSellingTv);

function showOutcomeInConsole() {
    const typeNames = allInventory.map((product) => {
        return product.type;
    })
    console.log("Uitkomst opdracht 1a: ", typeNames);

    const soldOut = allInventory.filter((product) => {
        return product.sold === product.originalStock;
    })
    console.log("Uitkomst opdracht 1b: ", soldOut);

    const typeNH321 = allInventory.find((product) => {
        return product.type === "NH3216SMART";
    })
    console.log("Uitkomst opdracht 1c: ", typeNH321);

    const sportsTvs = allInventory.map((product) => {
        if (product.refreshRate >= 100){
            return "name: " + product.brand + " " + product.name + ", suitable: true"
        } else {
            return "name: " + product.brand + " " + product.name + ", suitable: false"
        }
    })
    console.log("Uitkomst opdracht 1d: ", sportsTvs);

    const tvs65AndLarger = allInventory.filter((product) => {
        return product.availableSizes.some(size => size >= 65)
    })
    console.log("Uitkomst opdracht 1e: ", tvs65AndLarger);

    const hasAmbiLight = allInventory.filter((product) => {
        return product.options.some(option => option.name.toLowerCase() === "ambilight" && option.applicable === true);
    })
    console.log("Uitkomst opdracht 1f: ", hasAmbiLight);
}

export default showOutcomeInConsole;