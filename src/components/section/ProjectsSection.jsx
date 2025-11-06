import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowUpRight,
    Code2,
    Globe,
    Zap,
    Users,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { containerVariants, itemsVariants } from "../../utils/helper";

// Sample projects data
const PROJECTS = [
    {
        id: 1,
        title: "Fintech Website",
        description: "A modern insurance platform the for real needies, featuring user authentication, payment processing, and admin dashboard.",
        technologies: ["HTML", "CSS", "DB", "Stripe"],
        image: "https://www.jkcement.com/wp-content/uploads/2024/11/businessman-protect-paper-cut-family-house-model-family-insurance-scaled.jpg",
        liveUrl: "#",
        githubUrl: "#",
        featured: true
    },
    {
        id: 2,
        title: "Mesh Mitra",
        description: "Mesh Mitra is an offline disaster-management app that creates a Bluetooth-based mesh network for instant communication when mobile networks fail.",
        technologies: ["Kotlin", "JetPack Compose", "Based on BitChat", "Material Design Components"],
        image: "https://cdn.dribbble.com/userupload/14614692/file/original-8930a6eefcb17020523c0b38157549a4.png?crop=1186x0-7877x5018&format=webp&resize=400x300&vertical=center",
        liveUrl: "#",
        githubUrl: "#",
        featured: true
    },
    {
        id: 3,
        title: "Raksha Setu",
        description: "A responsive weather dashboard that provides real-time weather information with interactive charts and forecasts.",
        technologies: ["React", "Chart.js", "API Integration", "CSS3"],
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
        liveUrl: "#",
        githubUrl: "#",
        featured: false
    }
];

// ProjectCard Component
const ProjectCard = ({ project, index, isDarkMode }) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={cardRef}
            initial="hidden"
            animate={isCardInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut"
                    }
                }
            }}
            className={`group relative rounded-2xl overflow-hidden ${
                isDarkMode
                    ? "bg-gray-900/50 border border-gray-800"
                    : "bg-white border border-gray-200"
            } hover:shadow-2xl transition-all duration-300`}
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                        href={project.liveUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                        aria-label="View Live Project"
                    >
                        <Globe className="w-4 h-4 text-white" />
                    </a>
                    <a
                        href={project.githubUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                        aria-label="View Source Code"
                    >
                        <Code2 className="w-4 h-4 text-white" />
                    </a>
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-xl font-semibold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        {project.title}
                    </h3>
                    {project.featured && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs">
                            <Zap className="w-3 h-3" />
                            Featured
                        </div>
                    )}
                </div>

                <p className={`text-sm mb-4 leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                    {project.description}
                </p>

                {/* View Project Button */}
                <button className="group/btn flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm font-medium mb-6">
                    View Project
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className={`px-3 py-1 text-xs rounded-full ${
                                isDarkMode
                                    ? "bg-gray-800 text-gray-300"
                                    : "bg-gray-100 text-gray-700"
                            }`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ProjectsSection = () => {
    const { isDarkMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
     
    return (
        <section
            id="work"
            ref={sectionRef}
            className={`py-24 px-6 ${
                isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
            } relative overflow-hidden`}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
                        isDarkMode ? "bg-blue-500" : "bg-blue-400"
                    }`}
                />
                <div    
                    className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 ${
                        isDarkMode ? "bg-purple-500" : "bg-purple-400"
                    }`}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-20"
                >
                    <motion.div
                        variants={itemsVariants}
                        className={`text-sm uppercase tracking-widest ${
                            isDarkMode ? "text-gray-500" : "text-gray-600"
                        } mb-4`}
                    >
                        Featured Work
                    </motion.div>

                    <motion.h2
                        variants={itemsVariants}
                        className="text-3xl md:text-5xl font-light mb-6"
                    >
                        Recent
                        <span className="text-blue-500 font-medium"> Projects</span>
                    </motion.h2>

                    <motion.p
                        variants={itemsVariants}
                        className={`text-lg max-w-2xl mx-auto font-light ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        A collection of projects that showcase my expertise in building
                        modern applications and solving complex problems.


                    </motion.p>
                </motion.div>


                {/*Projects Grid*/}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {PROJECTS.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} isDarkMode={isDarkMode} />


                        ))}
                        </motion.div>


            </div>
        </section>


    );
};

export default ProjectsSection;