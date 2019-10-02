const {randomizeArray} = require('../helpers');
const {getAdjectives, getPronoums, getPrefix} = require('../phrases');




module.exports = {

    // Phrase model
    // Prefix + Pronoum [fem | masc] + adjective;

    show(req, res) {

        let randomPhrase = `${randomizeArray(getPrefix('masc'))}, ${randomizeArray(getPronoums('masc'))} ${randomizeArray(getAdjectives('masc'))}`;

        res.json(randomPhrase);
    }
};