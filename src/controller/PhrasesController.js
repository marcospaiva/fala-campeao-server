const {getAdjectives, getPronoums, getPrefix} = require('../phrases');

console.log( getPrefix('masc') );

module.exports = {

    // Phrase model
    // Prefix + Pronoum [fem | masc] + adjective;

    show(req, res) {
        res.send('Hello world');
    }
};