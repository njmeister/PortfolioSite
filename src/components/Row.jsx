export default function Row({ title, description }) {
  return (
	<div className="row">
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
  );
}