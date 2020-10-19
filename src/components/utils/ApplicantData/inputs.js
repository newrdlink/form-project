const applicantInputs = [
    {
        id: 1,
        name: "lastName",
        placeholder: 'Горбунков',
        required: true,
        type: 'text',
        autocomplete: 'off',
        label: 'Фамилия'
    },
    {
        id: 2,
        name: "firstName",
        placeholder: 'Семен',
        required: true,
        type: 'text',
        minlength: 2,
        autocomplete: 'off',
        label: 'Имя'
    },
    {
        id: 3,
        name: "aboutLastName",
        placeholder: 'Семенович',
        required: false,
        type: 'text',
        autocomplete: 'off',
        label: 'Отчество'
    },
    {
        id: 4,
        name: "phone",
        placeholder: '8 921 333 44 55',
        required: false,
        type: 'tel',
        autocomplete: 'off',
        pattern: "[0-9]{11}",
        label: 'Контактный номер телефона'
    },
    {
        id: 5,
        name: "email",
        placeholder: 'mail@example.com',
        required: true,
        type: 'email',
        autocomplete: 'off',
        label: 'Контактный email'
    },
    {
        id: 6,
        name: "snils",
        placeholder: '',
        required: true,
        type: 'tel',
        autocomplete: 'off',
        label: 'СНИЛС',
        pattern: ""
    }
]

export default applicantInputs;