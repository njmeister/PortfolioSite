import Row from '../components/Row';

const title = 'About Me';
const description = 'I am a full-stack developer with a passion for creating web applications. I have experience with JavaScript, React, Node.js, Express, and MongoDB.';

export default function AboutPage() {
  return (
	<Row title={title} description={description}/>
  );
}