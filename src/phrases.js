const getPronoums = (gender) => {
    const mascPronoums = [
        'meu'    ]

    const femPronoums = [
        'minha'
    ]

    if (gender == 'masc') {
        return mascPronoums;
    } else {
        return femPronoums;
    }
};

const getPrefix = () =>  {
    const preffix = [
        'Fala',
        'Opa',
        'Oi'
    ];

    return preffix;
};

const getAdjectives = (gender) => {
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
        'Sensei'
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
        'Sensei'
    ]

    if (gender == 'masc') {
        return mascAdjectives;
    } else {
        return femAdjectives;
    }
};

module.exports = {
    getPrefix,
    getPronoums,
    getAdjectives
}