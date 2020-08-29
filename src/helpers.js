
const randomizeArray = ( arrayToRandomize ) => {
    let arrNum = Math.floor( Math.random() * arrayToRandomize.length )
    const returnNode = {
        id: arrNum,
        value: arrayToRandomize[arrNum]
    }

    return returnNode
}
module.exports = {
    randomizeArray
}