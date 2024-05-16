export default function Row({ title, description, image }) {
  return (
	<div className="row">
		<h2>{title}</h2>
		<div className="content">
			<div className="img-container">
				{image && <img src={image} alt={title} />}
			</div>
			<p>{description}</p>
		</div>
	</div>
  );
}