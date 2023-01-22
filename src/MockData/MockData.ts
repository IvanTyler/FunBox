export const mockData = [
    {
        id: Math.floor(Math.random() * (999999999 - 100000000) + 100000000),
        selected: false,
        title: 'с фуа-гра',
        numberServings: '10 порций мышь в порадок',
        kilogram: 0.5,
        description: {
            haveProduct: 'Печень утки разварная с артишоками.',
            notProduct: 'Печалька, с фуа-гра закончился.',
        },
        disabled: false,
    },
    {
        id: Math.floor(Math.random() * (999999999 - 100000000) + 100000000),
        selected: false,
        title: 'с рыбой',
        numberServings: `40 порций 2 мыши в порадок`,
        kilogram: 2,
        description: {
            haveProduct: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            notProduct: 'Печалька, с рыбой закончился.',
        },
        disabled: false,
    },
    {
        id: Math.floor(Math.random() * (999999999 - 100000000) + 100000000),
        selected: false,
        title: 'с курой',
        numberServings: '100 порций 5 мышей в порадок заказчик доволен',
        kilogram: 5,
        description: {
            haveProduct: 'Филе из цыплят с трюфелями в бульоне.',
            notProduct: 'Печалька, с курой закончился.',
        },
        disabled: true,
    },
]