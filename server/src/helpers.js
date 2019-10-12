
const randomizeArray = ( arrayToRandomize ) => {
    let arrNum = Math.floor( Math.random() * arrayToRandomize.length );
    return arrayToRandomize[arrNum];
}
module.exports = {
    randomizeArray
}