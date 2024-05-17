import Row from '../components/Row';

const title = 'Proficiencies';
const description = 'HTML, CSS, JavaScript, MongoDB, Express, React, Node.js, SQL';


export default function ResumePage() {
	const resume = '../../assets/images/Meister_Noah_Resume.pdf';

	return (
		<div>
			<Row title={title} description={description} />
			<a href={resume} download="Meister_Noah_Resume.pdf" className="downloadBtn">
				<button>Download Resume</button>
			</a>
		</div>
	);
}
