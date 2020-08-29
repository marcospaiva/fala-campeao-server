const {randomizeArray} = require('../helpers');
const {getAdjectives, getPronoums, getPrefix} = require('../phrases');

module.exports = {

    // Phrase model
    // Prefix + Pronoum [fem | masc] + adjective;

    show(req, res) {
        const genderByQueryParam = req.query.gender == 'f' ? 'fem' : 'masc'
        const otherGenderByQueryParam = req.query.gender == 'f' ? 'masc' : 'fem'
        const adjective = randomizeArray(getAdjectives( genderByQueryParam ))
        const prefix = randomizeArray(getPrefix( genderByQueryParam ))
        const pronoum = randomizeArray(getPronoums( genderByQueryParam ))

        const otherGenderAdjective = getAdjectives( otherGenderByQueryParam )
        const otherGenderPrefix = getPrefix( otherGenderByQueryParam )
        const otherGenderPronoum = getPronoums( otherGenderByQueryParam )

        const randomPhrase = `${prefix.value}, ${pronoum.value} ${adjective.value}`
        const randomPhraseOther = `${otherGenderPrefix[prefix.id]}, ${otherGenderPronoum[pronoum.id]} ${otherGenderAdjective[adjective.id]}`

        const greeting = {}
        greeting.phrase = randomPhrase
        greeting.phraseOtherGender = randomPhraseOther

        res.json(greeting);
    }
};