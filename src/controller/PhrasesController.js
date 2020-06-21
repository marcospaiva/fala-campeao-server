const {randomizeArray} = require('../helpers');
const {getAdjectives, getPronoums, getPrefix} = require('../phrases');

module.exports = {

    // Phrase model
    // Prefix + Pronoum [fem | masc] + adjective;

    show(req, res) {
        const genderByQueryParam = req.query.gender == 'f' ? 'fem' : 'masc';
        const otherGenderByQueryParam = req.query.gender == 'f' ? 'masc' : 'fem';
        const adjective = randomizeArray(getAdjectives( genderByQueryParam ));
        const prefix = randomizeArray(getPrefix( genderByQueryParam ));
        const pronoum = randomizeArray(getPronoums( genderByQueryParam ));
        const otherGenderAdjective = randomizeArray(getAdjectives( otherGenderByQueryParam ));
        const randomPhrase = `${prefix}, ${pronoum} ${adjective}`;

        const greeting = {}
        greeting.phrase = randomPhrase
        greeting.adjective = adjective;
        greeting.otherGender = otherGenderAdjective;

        res.json(greeting);
    }
};