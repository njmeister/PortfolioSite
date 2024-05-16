import Board from '../components/Board';

export default function BoardPage() {

	const projects = [
		{
			title: "Project 1",
			img: "https://imgs.search.brave.com/FuWZ-lGigxFBFnRRugIlzmzqL6_PcRASXPY7ABiH6CA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P3Y9MTUzMDEyOTA4/MQ",
			description: "This is a description of project 1",
			link: "https://www.google.com"
		},
		{
			title: "Project 2",
			img: "https://imgs.search.brave.com/FuWZ-lGigxFBFnRRugIlzmzqL6_PcRASXPY7ABiH6CA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P3Y9MTUzMDEyOTA4/MQ",
			description: "This is a description of project 2",
			link: "https://www.google.com"
		},
		{
			title: "Project 3",
			img: "https://imgs.search.brave.com/FuWZ-lGigxFBFnRRugIlzmzqL6_PcRASXPY7ABiH6CA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P3Y9MTUzMDEyOTA4/MQ",
			description: "This is a description of project 3",
			link: "https://www.google.com"
		},
		{
			title: "Project 4",
			img: "https://imgs.search.brave.com/FuWZ-lGigxFBFnRRugIlzmzqL6_PcRASXPY7ABiH6CA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P3Y9MTUzMDEyOTA4/MQ",
			description: "This is a description of project 4",
			link: "https://www.google.com"
		},
		{
			title: "Project 5",
			img: "https://imgs.search.brave.com/FuWZ-lGigxFBFnRRugIlzmzqL6_PcRASXPY7ABiH6CA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P3Y9MTUzMDEyOTA4/MQ",
			description: "This is a description of project 5",
			link: "https://www.google.com"
		},
		{
			title: "Project 6",
			img: "https://imgs.search.brave.com/FuWZ-lGigxFBFnRRugIlzmzqL6_PcRASXPY7ABiH6CA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P3Y9MTUzMDEyOTA4/MQ",
			description: "This is a description of project 6",
			link: "https://www.google.com"
		},
		
	]
	  return (
	<div>
	  <h1>Projects</h1>
	  <Board projects={projects} />
	</div>
  );
}