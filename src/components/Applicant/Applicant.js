import React, { useState } from 'react'
import './Applicant.css'

const Applicant = ({ onSubmitHandler, inputs = [] }) => {


    const [formData, setFormData] = useState({})
    const [formErrors, setFormErrors] = useState({})

    const onSubmit = (evt) => {
        evt.preventDefault()
        onSubmitHandler(formData)
    }

    // рабочий вариант 1
    const isValidForm = () => {
        const requiredInputSum = (inputs.reduce((result, input) => {
            if (input.required) {
                result++
            }
            return result
        }, 0))
        if (
            Object.keys(formErrors).length < requiredInputSum ||
            Object.keys(formErrors).some(error => formErrors[error] !== '')
        ) { return true }
    }

    return (
        <form className="applicant" onSubmit={onSubmit} noValidate>
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
                        className="applicant__input"
                        value={formData[name] || ''}
                        onChange={evt => {
                            setFormData({ ...formData, [name]: evt.target.value })
                            const errorMessage = evt.target.validationMessage
                            setFormErrors({ ...formErrors, [name]: errorMessage || '' })
                        }}
                    />
                    <span className="applicant__error">{formErrors[name]}</span>
                </label>
            })}
            <button type="submit" disabled={isValidForm()} className="applicant__button">submit</button>
        </form>
    )



    // первый вариант формы для заявителя
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [aboutLastName, setAboutLastName] = useState('');

    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     const data = {
    //         firstName,
    //         lastName,
    //         aboutLastName
    //     }
    //     onSubmitHandler(data);
    //     setFirstName('');
    //     setLastName('');
    //     setAboutLastName('');
    // }

    // return (
    //     <form onSubmit={onSubmit} className="applicant">
    //         {<p>FirstName</p>}
    //         <input                
    //             onChange={e => setFirstName(e.target.value)}
    //             value={firstName} className="applicant__input"
    //             name='applicantFirstName'
    //         />
    //         {<p>LastName</p>}
    //         <input 
    //             onChange={e => setLastName(e.target.value)} 
    //             value={lastName} className="applicant__input" 
    //             name='applicantLastName' />
    //         {<p>AboutLastName</p>}
    //         <input             
    //             onChange={e => setAboutLastName(e.target.value)} 
    //             value={aboutLastName} className="applicant__input" 
    //             name='applicantAboutLastName' />
    //         <button type="submit" className="applicant__button">submit</button>
    //     </form>
    // )
}

export default Applicant;