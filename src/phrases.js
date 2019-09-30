/**
 *
 *
 * @export
 * @param {string} gender
 * @returns {array} // Masc or Fem array with pronoums
 */
export function getPronoums(gender) {
    const mascPronoums = [
        'meu',
        'nosso'
    ];

    const femPronoums = [
        'minha',
        'nossa'
    ];

    if (gender == 'masc') {
        return mascPronoums;
    } else {
        return femPronoums;
    }
}

/**
 *
 *
 * @export
 * @returns {array} // With possible prefixes
 */
export function getPrefix() {
    const preffix = [
        'Fala',
        'Opa',
        'Bom dia',
        'Oi',
        'Hello'
    ];

    return preffix;
}

/**
 *
 *
 * @export
 * @param {string} gender
 * @returns {array} // Masc or Fem with adjectives
 */
export function getAdjectives(gender) {
    const mascAdjectives = [
        'Campeão',
        'Federal',
        'Batizado',
        'Aspirante',
        'Apóstolo',
        'Pontual',
        'Companheiro',
        'Balaústre',
        'Acionista',
        'Promotor',
        'Patrão',
        'Incorreto',
        'Peregrino',
        'Estrategista',
        'Tributarista',
        'Comediante',
        'Politeísta',
        'Supra-sumo',
        'Maestro',
        'Influencer',
        'Desbravador',
        'Tupi-guarani',
        'Sensei',
    ];

    const femAdjectives = [
        'Campeã',
        'Federal',
        'Batizada',
        'Aspirante',
        'Apóstola',
        'Pontual',
        'Companheira',
        'Balaústre',
        'Acionista',
        'Promotora',
        'Patroa',
        'Incorreta',
        'Peregrina',
        'Estrategista',
        'Tributarista',
        'Comediante',
        'Politeísta',
        'Supra-sumo',
        'Maestra',
        'Influencer',
        'Desbravadora',
        'Tupi-guarani',
        'Sensei',
    ];

    if (gender == 'masc') {
        return mascAdjectives;
    } else {
        return femAdjectives;
    }
}