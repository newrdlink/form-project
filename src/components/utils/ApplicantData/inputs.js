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
        maxlenght: 20
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
        id: 4,
        name: "phone",
        placeholder: '8 921 333 44 55',
        required: false,
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
        required: true,
        type: 'email',
        autocomplete: 'off',
        label: 'Контактный email',
        maxlenght: 25
    },
    {
        id: 6,
        name: "snils",
        placeholder: '',
        required: true,
        type: 'tel',
        autocomplete: 'off',
        label: 'СНИЛС',
        pattern: "[8]{1} [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}",
        maxlenght: 11
    }
]

export default applicantInputs;