export default function Row({ title, description, image }) {
  return (
	<div className="row">
		<h3>{title}</h3>
		<div className="content">
			<div className="img-container">
				{image && <img src={image} alt={title} />}
			</div>
			<p>{description}</p>
		</div>
	</div>
  );
}