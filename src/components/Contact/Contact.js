import './Contact.css'
import { useState } from 'react'
import { useForm } from '@formspree/react';



function Contact() {
    
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [state, handleSubmit] = useForm("mgedjkpd");
      if (state.succeeded) {
          return <p>Thanks for reaching out!</p>;
      }
    const { name, email, message } = formState;

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    return (
      <div className="Contact">
        <h1>Hi friend! This is how you contact me!!</h1>
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
      </div>
    );
  }
  
  export default Contact;