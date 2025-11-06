import { 
    Code2, 
    GraduationCap, 
    Briefcase, 
    Award, 
    Rocket, 
    Heart, 
    Coffee, 
    BookOpen, 
    Zap, 
    Database, 
    Server, 
    Cloud, 
    Mail, 
    MapPin, 
    Phone 
  } from "lucide-react";
  
  import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
  
  export const SKILLS_CATEGORY = [
    {
      title: "Frontend",
      icon: Code2,
      description: "Crafting beautiful, responsive user interfaces",
      skills: [
        { name: "JAVA", level: 30, color: "bg-blue-500" },
        { name: "C++", level: 20, color: "bg-blue-600" },
        { name: "REACT", level: 10, color: "bg-gray-800" },
        { name: "Tailwind CSS", level: 15, color: "bg-cyan-500" },
        { name: "Framer Motion", level: 5, color: "bg-pink-500" }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      description: "Building robust server-side solutions",
      skills: [
        { name: "Node.js", level: 0, color: "bg-green-500" },
        { name: "Express.js", level: 0, color: "bg-gray-700" },
        { name: "Python", level: 20, color: "bg-yellow-500" },
        { name: "GraphQL", level: 0, color: "bg-pink-600" },
        { name: "REST APIs", level: 0, color: "bg-orange-500" }
      ]
    },
    {
      title: "Database",
      icon: Database,
      description: "Managing and optimizing data storage",
      skills: [
        { name: "MongoDB", level: 0, color: "bg-green-600" },
        { name: "SQL", level: 0, color: "bg-blue-700" },
        { name: "Redis", level: 0, color: "bg-red-500" },
        { name: "Prisma", level: 0, color: "bg-indigo-600" },
        { name: "Firebase", level: 0, color: "bg-yellow-600" }
      ]
    },
    {
      title: "Computer Vision",
      icon: Cloud,
      description: "Deploying and scaling applications",
      skills: [
        { name: "Docker", level: 0, color: "bg-blue-600" },
        { name: "AWS", level: 0, color: "bg-orange-600" },
        { name: "Vercel", level: 0, color: "bg-gray-900" },
        { name: "Git", level: 0, color: "bg-orange-700" },
        { name: "CI/CD", level: 0, color: "bg-purple-600" }
      ]
    }
  ];
  
  export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "SWING",
    "OpenCV",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Figma",
    "Adobe Photoshop"
  ];
  
  export const STATS = [
    { number: "3+", label: "Projects Completed" },
    { number: "2nd Year", label: "B.Tech CSE (Data Science)" },
    { number: "3+", label: "Hackathons / Competitions" },
    { number: "1.5+", label: "Years of Coding Experience" },
    { number: "5+", label: "Programming Languages & Tools" },
    { number: "∞", label: "Curiosity & Learning Enthusiasm" }
  ];
  
  
  export const PROJECTS = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory",
      image: null,
      tags: ["React", "Tailwind", "Framer motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Blog App with AI Post Generator",
      description: "A full-stack blog app using the MERN stack with full Markdown support, tag filtering, and an integration",
      image: null,
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      liveUrl: "https://youtu.be/tUnGudIBBjQ",
      githubUrl: "#",
      featured: true,
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and advanced analytics dashboard",
      image: null,
      tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
      liveUrl: "https://youtu.be/fZK57PxKC-0",
      githubUrl: "#",
      featured: true,
      category: "Web App"
    },
    {
      id: 4,
      title: "AI-Powered Interview Prep App",
      image: null,
      tags: ["React", "Node.js", "OpenAI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Web App"
    },
    {
      id: 5,
      title: "Resume Builder App",
      description: "a fully functional Resume Builder App using the MERN stack along with Tailwind CSS for a clean, modern",
      image: null,
      tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
      liveUrl: "https://youtu.be/q3u_fpkjLk8",
      githubUrl: "#",
      featured: false,
      category: "Web App"
    },
    {
      id: 6,
      title: "Expense Tracker App",
      description: "This app includes user authentication with JWT, income and expense tracking, interactive charts, and",
      image: null,
      tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
      liveUrl: "https://youtu.be/PQnbtnsYUho",
      githubUrl: "#",
      featured: true,
      category: "Web App"
    }
  ];
  
  export const JOURNEY_STEPS = [
    {
      year: "2024",
      title: "Started Coding Journey",
      company: "Self-taught",
      description: "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love",
      icon: Code2,
      color: "bg-blue-500"
    },
    {
      year: "2025",
      title: "First Internship",
      company: "TechStart Inc.",
      description: "Joined as a frontend intern, working with React and learning modern development practices. Contributed",
      icon: Briefcase,
      color: "bg-green-500"
    },
    {
      year: "2026",
      title: "Computer Science Degree",
      company: "University of Technology",
      description: "Graduated with a degree in Computer Science, gaining strong foundation in algorithms and data structures",
      icon: GraduationCap,
      color: "bg-purple-500"
    },
    {
      year: "2027",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Promoted to full-time developer role. Built end-to-end applications using MERN stack and led junior developers",
      icon: Rocket,
      color: "bg-orange-500"
    },
    {
      year: "2028",
      title: "Freelance & Open Source",
      company: "Independent",
      description: "Started freelancing and contributing to open source projects. Launched 3 successful web applications",
      icon: Award,
      color: "bg-pink-500"
    },
    {
      year: "2025",
      title: "Senior Developer",
      company: "Present",
      description: "Currently building innovative solutions and exploring new technologies like AI integration and advanced frameworks",
      icon: Zap,
      color: "bg-cyan-500"
    }
  ];
  
  export const PASSIONS = [
    {
      icon: Heart,
      title: "User Experience",
      description: "Crafting intuitive interfaces that users love"
    },
    {
      icon: Coffee,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices"
    }
  ];
  
  export const SOCIAL_LINKS = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-800"
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/austin-paul-79382a23b/",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10"
    },
    {
      name: "Twitter",
      icon: FiTwitter,
      url: "https://twitter.com",
      color: "hover:text-sky-400",
      bgColor: "hover:bg-sky-500/10"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:austinpaulmail04@gmail.com",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-500/10"
    }
  ];
  
  export const CONTACT_INFO = [
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India"
    },
    {
      icon: Mail,
      label: "Email",
      value: "austinpaulmail04@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9310009323"
    }
  ];
  
  