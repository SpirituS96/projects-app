import { useState } from 'react'
import './FeedbackForm.css'

export default function FeedbackForm({ apiURL }) {
    const [inputs, setInputs] = useState({});
    const url = apiURL;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        fetch(`${url}/feedbacks`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputs)
        })
            .then(() => console.log("OK!") /* TODO: add logic for handling success registration */)
            .catch((error) => console.error(error) /* TODO: add logic for handling errors */)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    return (
        <>
            <h1 className="heading">Расскажите о вашем проекте:</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="input-label">Ваше имя*</label>
                    <input type="text" id="name" className="form-input" name="name" value={inputs.name} onChange={handleChange} autoComplete="off" aria-required />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="input-label">Email*</label>
                    <input type="email" id="email" className="form-input" name="email" value={inputs.email} onChange={handleChange} autoComplete="off" aria-required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="input-label">Телефон*</label>
                    <input type="tel" id="phone" className="form-input" name="phone" value={inputs.phone} onChange={handleChange} autoComplete="off" aria-required />
                </div>
                <div className="form-group">
                    <label htmlFor="msg" className="input-label">Сообщение*</label>
                    <textarea id="msg" className="form-input" name="message" value={inputs.msg} onChange={handleChange} aria-required />
                </div>
                <div className="form-group">
                    <input type="checkbox" id="check" className="form-input" onChange={handleChange} />
                    <label htmlFor="check" className="input-label">Согласие на обработку персональных данных</label>
                </div>
                <input className="submitBtn" type="submit" value="Обсудить проект" />
            </form>
        </>
    )
}