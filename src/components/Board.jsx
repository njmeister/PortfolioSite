import Project from './Project';

export default function Board({ projects }) {
	return (
		<div className="board">
			{projects.map((project, index) => (
				<Project
					key={index}
					title={project.title}
					img={project.img}
					description={project.description}
					link={project.link}
				/>
			))}
		</div>
	);
}