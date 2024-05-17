export default function Row({ title, description, image }) {
  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="content">
            {image && (
                <div className="img-container">
                    <img src={image} alt={title} />
                </div>
            )}
            <p>{description}</p>
        </div>
    </div>
  );
}