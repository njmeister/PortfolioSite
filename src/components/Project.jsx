export default function Project({ title, description, link, img}) {
	  return (
		<div className="project">
		  <h2>{title}</h2>
		  <img src={img} alt={title} />
		  <p>{description}</p>
		  <a href={link}>View Project</a>
		</div>
	  )};