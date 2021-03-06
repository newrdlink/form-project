import React, { useState } from 'react'
import cn from 'classnames'
import './Applicant.css'

const Applicant = ({ onSubmitHandler, inputs = [] }) => {

    let initialOjectRequired = inputs.reduce((obj, item) => {
        obj[item.name] = !item.required
        return obj
    }, {})

    const [formData, setFormData] = useState({})
    const [formErrors, setFormErrors] = useState({})
    const [formInputRequire, setFormInputsRequire] = useState(initialOjectRequired)

    const onSubmit = (evt) => {
        evt.preventDefault()
        onSubmitHandler(formData)
        setFormData({})
        setFormInputsRequire(initialOjectRequired)
    }
    // рабочий вариант
    const isValidForm = () => {
        if (
            Object.keys(formInputRequire).some(error => formInputRequire[error] === false)
        ) { return true }
    }

    return (
        <section className="applicant">
            <div className="applicant__header">
                <p className="applicant__title">Заявитель:</p>
                <p className="applicant__subtitle">основные сведенья</p>
            </div>
            <form name="applicant" className="applicant__form" onSubmit={onSubmit} >
                {inputs.map(({ type, name, required, id, minlength, maxlenght, placeholder, autocomplete, pattern, label }) => {
                    return <label key={id} className={cn("applicant__container", { "applicant__container_required": !formInputRequire[name] })}>
                        {label}
                        <input
                            type={type}
                            required={required}
                            name={name}
                            placeholder={placeholder}
                            minLength={minlength}
                            maxLength={maxlenght}
                            autoComplete={autocomplete}
                            pattern={pattern}
                            className={cn("applicant__input")}
                            value={formData[name] || ''}
                            onChange={evt => {
                                setFormData({ ...formData, [name]: evt.target.value })
                                const errorMessage = evt.target.validationMessage
                                setFormErrors({ ...formErrors, [name]: errorMessage || '' })
                                const isInputRequired = evt.target.validity.valid
                                setFormInputsRequire({ ...formInputRequire, [name]: isInputRequired })
                            }}
                        />
                        <span className="applicant__error">{formErrors[name]}</span>
                    </label>
                })}
                <button type="submit" disabled={isValidForm()} className="applicant__button">Запишем данные ...</button>
            </form></section>
    )
}

export default Applicant;