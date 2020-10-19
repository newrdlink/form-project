const applicantInputs = [

    {
        id: 1,
        name: "lastName",
        placeholder: 'Горбунков',
        required: true,
        type: 'text',
        autocomplete: 'off',
        label: 'Фамилия',
        maxlenght: 20,
        minlength: 2,
        pattern: "[А-Я]{1}[А-Яа-яЁё]{1,}" //только русская буква
    },
    {
        id: 2,
        name: "firstName",
        placeholder: 'Семен',
        required: true,
        type: 'text',
        minlength: 2,
        autocomplete: 'off',
        label: 'Имя',
        maxlenght: 20,
        pattern: "[А-Я]{1}[А-Яа-яЁё]{1,}"
    },
    {
        id: 3,
        name: "aboutLastName",
        placeholder: 'Семенович',
        required: false,
        type: 'text',
        autocomplete: 'off',
        label: 'Отчество',
        maxlenght: 20
    },
    {
        id: 7,
        name: "dateBirthday",
        placeholder: '01.02.1990',
        required: true,
        type: 'date',
        minlength: 2,
        autocomplete: 'off',
        label: 'Дата рождения',
        maxlenght: 20
    },
    {
        id: 4,
        name: "phone",
        placeholder: '8 921 333 44 55',
        required: true,
        type: 'tel',
        autocomplete: 'off',
        pattern: "[8]{1} [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}",
        label: 'Контактный номер телефона',
        maxlenght: 15
    },
    {
        id: 5,
        name: "email",
        placeholder: 'mail@example.com',
        required: false,
        type: 'email',
        autocomplete: 'off',
        label: 'Контактный email',
        maxlenght: 25
    },

]

export default applicantInputs;