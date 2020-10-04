import React, {useState} from "react";
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } 
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
    }


    return (
        <section className="section-container">
            <div className="section-left">
                <h2>Contact me</h2>
            </div>     
            <div className="section-right">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="about-me-p label">Name:</label><br></br>
                        <input type="text" name="name"  className="input" defaultValue={name} onBlur={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="about-me-p label">Email address:</label><br></br>
                        <input type="email" name="email" className="input" defaultValue={email} onBlur={handleChange} placeholder="name@example.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="about-me-p label">Message:</label><br></br>
                        <textarea name="message" rows="5" className="textarea" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit" className="button">Submit</button>
                </form>
            </div>       

        </section>
    )
}

export default Contact;