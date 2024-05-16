import { useState } from 'react';

function ContactForm() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();


		console.log('Email:', email);
		console.log('Name:', name);
		console.log('Message:', message);

		setEmail('');
		setName('');
		setMessage('');

		console.log('Email:', email);
		console.log('Name:', name);
		console.log('Message:', message);
	};

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
		<div>
			<form className="contact-form" onSubmit={handleSubmit}>
				<input type="text" placeholder="Name" value={name} name="name" onChange={handleNameChange} />
				<input type="email" placeholder="Email" value={email} name="email" onChange={handleEmailChange} />
				<textarea placeholder="Message" value={message} onChange={handleMessageChange} ></textarea>
				<button type="submit">Send</button>
			</form>
		</div>
	);
}

export default ContactForm;