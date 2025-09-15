function createScreenSizesBestsellingTv(bestSellingTv) {
    return bestSellingTv.availableSizes.map(size => `${size} inch (${(size * 2.54).toFixed(0)} cm)`).join(" | ");
}

export default createScreenSizesBestsellingTv;