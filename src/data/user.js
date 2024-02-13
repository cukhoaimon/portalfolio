const INFO = {
	main: {
		title: "Portalfolio by Hoang-Phuc Nguyen",
		name: "Hoang-Phuc Nguyen",
		email: "hoangphucnhp1312@gmail.com",
		logo: "../logo.png"
	},

	socials: {
		github: "https://github.com/cukhoaimon",
		linkedin: "https://linkedin.com/hoangphuchcmus",
		facebook: "https://facebook.com/tuilafuc"
	},

	homepage: {
		title: "Computer Science Student",
		description:
			"I am currently a student at the Faculty of Information Technology, VNUHCM - University of Science (aka FIT@HCMUS). I have a passion for building large, well-balanced, reliable systems using modern technologies. Striving daily to become a Software Architect is my dream, and I am turning that dream into reality with an unwavering commitment to learning and keeping up with effective modern technology. I am an ambitious individual - I am greedy for knowledge, eager for work, and enthusiastic about programming because it is an integral part of who I am."
	},

	about: {
		title:
			"I'm Hoang-Phuc, a Computer Science student with the passion for study.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback."
	},

	articles: {
		title:
			"I'm passionate about writing down the knowledge that has inspired me.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more."
	},

	projects: [
		{
			title: "Simple Bank",
			duration: "Jannuary 11, 2024 - Present",
			description: `A project for learning about the basic of banking system. It's a simple bank system with basic features. This project is also a study case for learning about the basic of OOP, SOLID principle, ACID properties, design pattern and some common technologies.`,
			logo: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Aqua.svg",
			linkText: "View Project",
			tag: [
				"Go",
				"Docker",
				"gRPC",
				"gRPC-Gateway",
				"Paseto",
				"Github",
				"GoLand",
				"PostgreSQL",
				"Gin",
				"GoMock",
				"SQLC"
			],
			link: "https://github.com/cukhoaimon/SimpleBank"
		},
		{
			title: "The Coffee Choi",
			duration: "December 2023 - Jannuary 2024",
			description: "A school project for the course of Web development",
			linkText: "View Project",
			logo:
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			tag: ["React", "MaterialUI", "NodeJS", "MongoDB", "Github"],
			link: "https://github.com/let-me-out-HCMUS/The-Coffee-Choi"
		},
		{
			title: "My Shop",
			duration: "December 2023 - Jannuary 2024",
			description: `A project for learning about the basic of e-commerce system. It's a simple e-commerce system with basic features. This project is also a study case for learning about the basic of OOP, SOLID principle, ACID properties, design pattern and some common technologies.`,
			linkText: "View Project",
			logo: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Aqua.svg",
			tag: ["Go", "C#", "WinUI 3", "Telerik", "Docker", "Swagger"],
			link: "https://github.com/scul0405/my-shop"
		},
		{
			title: "Dental Clinic Management System",
			duration: "December 2023 - Jannuary 2024",
			description: `A school project for learning about conccurency and parallel programming. This project also a study case about phenomenon of deadlock and database transaction.`,
			logo:
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			linkText: "View Project",
			tag: ["React", "NodeJS", "MSSQL", "Github"],
			link: "https://github.com/cukhoaimon/dental-clinic-management-system"
		},
		{
			title: "My-React-App",
			duration: "August 2023 - December 2023",
			description: `A project which I developed a lot of web application for learning React. Experimented with React State, React Hooks, React Routing, Fiber tree, and more. I also solved problems relating to asynchronous tasks`,
			logo:
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			linkText: "View Project",
			tag: ["JavaScript", "React", "HTML/CSS", "Github", "VS Code"],
			link: "https://github.com/cukhoaimon/My-React-App"
		},

		{
			title: "Shelljar",
			duration: "August 2023 - Present",
			description:
				"Developed a tool for automatically creating a Virtual Android Device for analysis on malware, an abstraction for executing shell scripts and A tool for converting a very large binary file format to a PNG file format with RGB color.",
			logo:
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
			linkText: "View Project",
			tag: [
				"Java",
				"Maven",
				"Github",
				"Shell Script",
				"IntelliJ IDEA",
				"Android Developer Brigde",
				"QEMu"
			],
			link: "https://github.com/cukhoaimon/Shelljar"
		},

		{
			title: "Blog Posting",
			duration: "August 2023 - Present",
			description:
				"Developed a web backend (Spring Boot base) for posting blog like Facebook. It's also use like a study case for learning new tech.",
			logo:
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
			linkText: "View Project",
			tag: ["Java Spring Boot", "Docker compose", "Cassandra", "Intellij IDE"],
			link: "https://github.com/cukhoaimon/Post-backend"
		},

		{
			title: "Shape Parser",
			duration: "April 2023 - May 2023",
			description:
				"A project for learning Object oriented programming and also applying knowledge from Data structures and Algorithms from previous semester. It can read a shape information from text file and print it on terminal screen. This project use Dynamic Link Library (DLL) and Component Object Model (COM) to make this application follow Dependency Injection pattern and another design pattern",
			logo:
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
			linkText: "View Project",
			tag: ["C++", "DLL", "COM", "Visual Studio", "MS-build"],
			link: "https://github.com/cukhoaimon/ShapeParserV2"
		},
		{
			title: "Learning Machine Learning",
			duration: "May 2023 - Jun 2023",
			description:
				"A University project to implement some ML algorithm and black-box optimizer (gradient descent) for training process",
			logo:
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			tag: ["Python", "Jupyter Notebook", "Google Colaboration"],
			linkText: "View Project",
			link: "https://github.com/cukhoaimon/Machine-Learning"
		},
		{
			title: "Sorting Algorithm Analysis",
			duration: "November 20, 2022 - November 26, 2022",
			description:
				"A project analyze 11 sorting algorithms include: Bubble sort, Selecting sort, Heap sort, Merge sort, Quick sort. Shaker sort, Shell sort, Insertion sort, Counting sort, Radix sort, Flash sort.",
			logo:
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
			tag: ["C++", "Visual Studio", "LATEX"],
			linkText: "View Project",
			link: "https://github.com/cukhoaimon/sorting-algorithms"
		}
	]
};

export default INFO;
