import { useState } from 'react'

function Contact() {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        //setFormState({ name: '', email: '', message: '' })
        console.log(e);
    }

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    return (
      <div className="Contact">
        <h1>This is how to contact me</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">
                    Name:
                </label>
                    <input 
                        type='text'
                        name='name'
                        defaultValue={name}
                        onChange={handleChange}
                    />               
            </div>
            <div>
                <label htmlFor="email">
                    Email Address:
                </label>
                    <input 
                        type='email'
                        name='email'
                        defaultValue={email}
                        onChange={handleChange}
                    />               
            </div>
            <div>
                <label htmlFor="message">
                    Message to Austin:
                </label>
                    <input 
                        rows='4'
                        name='message'
                        defaultValue={message}
                        onChange={handleChange}
                    />               
            </div>
            <button type='submit'>
                SUBMIT
            </button>
            
        </form>

        <p>I'd love to hear from you!</p>
        <p><a href="https://www.linkedin.com/in/kingaustinhenry/">Connect with me on LinkedIn</a></p>            
        <p><a href="https://www.instagram.com/biogimp/">Add me on Instagram</a></p>

      </div>
    );
  }
  
  export default Contact;