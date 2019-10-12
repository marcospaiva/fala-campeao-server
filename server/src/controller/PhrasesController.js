const {randomizeArray} = require('../helpers');
const {getAdjectives, getPronoums, getPrefix} = require('../phrases');

module.exports = {

    // Phrase model
    // Prefix + Pronoum [fem | masc] + adjective;

    show(req, res) {

        let genderByQueryParam = req.query.gender == 'f' ? 'fem' : 'masc';

        let randomPhrase = `${randomizeArray(getPrefix( genderByQueryParam ))}, ${randomizeArray(getPronoums( genderByQueryParam ))} ${randomizeArray(getAdjectives( genderByQueryParam ))}`;

        res.json(randomPhrase);
    }
};