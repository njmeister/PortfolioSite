export default function Project({ title, description, link, img, github}) {
	  return (
		<div className="project">
		  <h3>{title}</h3>
		  <div className="img-container">
		  	<img src={img} alt={title} />
		  </div>
		  <p>{description}</p>
		  <a href={link}>View Project</a>
		  <a href={github}>View GitHub</a>
		</div>
	  )};