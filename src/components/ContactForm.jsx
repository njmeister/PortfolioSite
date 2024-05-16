import { useState } from 'react';

const validateEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
  }

function ContactForm() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [emailTouched, setEmailTouched] = useState(false);
	const [nameTouched, setNameTouched] = useState(false);
	const [messageTouched, setMessageTouched] = useState(false);
	const [emailError, setEmailError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validateEmail(email)) {
			setEmailError('Invalid email');
			return;
		}

		setEmailError('');


		console.log('Email:', email);
		console.log('Name:', name);
		console.log('Message:', message);

		setEmail('');
		setName('');
		setMessage('');
		setEmailTouched(false);
		setNameTouched(false);
		setMessageTouched(false);
	};

	const handleBlur = (field) => {
		switch (field) {
			case 'email':
				setEmailTouched(true);
				break;
			case 'name':
				setNameTouched(true);
				break;
			case 'message':
				setMessageTouched(true);
				break;
			default:
				break;
		}
	}

const handleEmailChange = (e) => {
  setEmail(e.target.value);
}

const handleNameChange = (e) => {
  setName(e.target.value);
}

const handleMessageChange = (e) => {
  setMessage(e.target.value);
}

	return (
		<div className="contactPage">
			<h2>Contact Me</h2>
			<form className="contact-form" onSubmit={handleSubmit}>
				<input 
					type="text" 
					placeholder="Name" 
					value={name} 
					name="name" 
					onChange={handleNameChange}
					onBlur={() => handleBlur('name')}
					required
				/>
				{nameTouched && !name && <p className="error">Name is required</p>}
				<input 
					type="input" 
					placeholder="Email" 
					value={email} 
					name="email" 
					onChange={handleEmailChange}
					onBlur={() => handleBlur('email')}
				/>
				{emailTouched && !email && <p className="error">Email is required</p>}
				{emailError && <p className="error">{emailError}</p>}
				<textarea 
					placeholder="Message" 
					value={message} 
					onChange={handleMessageChange} 
					onBlur={() => handleBlur('message')}
				></textarea>
				{messageTouched && !message && <p className="error">Message is required</p>}
				<button type="submit">Send</button>
			</form>
		</div>
	);
}

export default ContactForm;