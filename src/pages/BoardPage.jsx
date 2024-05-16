import Board from '../components/Board';

export default function BoardPage() {

	const projects = [
		{
			title: "Book Blend",
			img: "../../assets/images/bookblend1.png",
			description: "Book Blend is a web application that allows users to rate and leave comments on books they've read.",
			link: "https://book-blend-reviews-e430070779d0.herokuapp.com/"
		},
		{
			title: "Witchy Weather",
			img: "../../assets/images/witchyweather1.png",
			description: "Witchy Weather tracks current astronomical events and advises the user on optimal times for spellcasting.",
			link: "https://avadeisler.github.io/Witchy_Weather/"
		},
		{
			title: "JATE",
			img: "../../assets/images/jate1.png",
			description: "Just Another Text Editor is a simple Progressive Web App text editor.",
			link: "https://pwa-text-editor-nxla.onrender.com"
		},
		{
			title: "Tech Blog",
			img: "../../assets/images/techBlog1.png",
			description: "Tech Blog is a mock blog site where users can create an account, make posts, and comment on other users' posts.",
			link: "https://njm-tech-blog-75452fdd6827.herokuapp.com/"
		},
		{
			title: "Note Taker",
			img: "../../assets/images/noteTaker1.png",
			description: "Note Taker is a simple note-taking application that allows users to create, save, and delete notes.",
			link: "https://rocky-bayou-45322-d85580837a71.herokuapp.com/"
		},
		{
			title: "Weather Dashboard",
			img: "../../assets/images/weatherDashboard.png",
			description: "Weather Dashboard is a simple weather application that allows users to search for a city and view the current weather and a 5-day forecast.",
			link: "https://njmeister.github.io/Challenge6-WeatherDashboard/"
		},
		
	]
	  return (
	<div className="boardPage">
	  <h1>Projects</h1>
	  <Board projects={projects} />
	</div>
  );
}