import React, { useState } from 'react'
import cn from 'classnames'
import './Applicant.css'

const Applicant = ({ onSubmitHandler, inputs = [] }) => {
    // обьект для начального состояния стейта для определения наличия ошибки
    let initialOjectRequired = inputs.reduce((obj, item) => {
        if (item.required === true) {
            obj[item.name] = !item.required
        }
        return obj
    }, {})

    const [formData, setFormData] = useState({})
    const [formErrors, setFormErrors] = useState({})
    const [formInputRequire, setFormInputsRequire] = useState(initialOjectRequired)


    const onSubmit = (evt) => {
        evt.preventDefault()
        onSubmitHandler(formData)
    }
    // рабочий вариант 1
    const isValidForm = () => {
        if (
            Object.keys(formInputRequire).some(error => formInputRequire[error] === false)
        ) { return true }
    }

    return (
        <form className="applicant" onSubmit={onSubmit} >
            {inputs.map(({ type, name, required, id, minlength, placeholder, autocomplete, pattern, label }) => {
                return <label key={id} className="applicant__container">
                    {label}
                    <input
                        type={type}
                        required={required}
                        name={name}
                        placeholder={placeholder}
                        minLength={minlength}
                        autoComplete={autocomplete}
                        pattern={pattern}
                        className={cn("applicant__input", { "applicant__input_required": required && formErrors[name] !== '' })}
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
            <button type="submit" disabled={isValidForm()} className="applicant__button">submit</button>
            <button disabled={isValidForm()} onClick={() => window.print()} type="button" className="applicant__button">print</button>
        </form>
    )

}

export default Applicant;