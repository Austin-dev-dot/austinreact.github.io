import {
    motion,
} from "framer-motion";
import {
    ArrowDown,
    Mail,
} from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-scroll";
import { useTheme } from "../../context/ThemeContext";

import PROFILE_PIC from '../../assets/images/picture.png';

const HeroSection = () => {
    const { isDarkMode } = useTheme();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const textVariants = {
        hidden: { y: 15, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    const imageVariants = {
        hidden: { x: 30, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3,
            },
        },
    };

    return (
        <div
            className={`min-h-screen transition-all duration-500 ${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
                }`}
        >
            {/* Hero Section */}
            <motion.section
                id="home"
                className="container mx-auto px-20 lg:px-40 pt-0 pb-20"
                style={{ willChange: 'transform' }}
            >
                <div className="">
                    <div
                        className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"
                            }`}
                    />
                    <div
                        className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"
                            }`}
                    />
                </div>
            </motion.section>

            <div className="">

                {/* Mobile Layout */}
                <div className="block lg:hidden">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center text-center"
                    >
                        {/* Mobile Profile Image */}
                        <motion.div variants={imageVariants} className="relative">
                            <div className="relative">
                                <div className="absolute -inset-2 rounded-2xl border border-purple-500/20" />
                                <div className="absolute -inset-4 rounded-2xl border border-cyan-500/15" />

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`w-48 h-48 rounded-2xl overflow-hidden border-4 ${isDarkMode ? "border-gray-800" : "border-gray-300"
                                        } shadow-2xl relative z-10`}
                                >
                                    <img
                                        src={PROFILE_PIC}
                                        alt="Austin Paul"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Mobile Content */}
                        <motion.div
                            variants={textVariants}
                            className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"
                                } mb-6`}
                        >
                            2nd Year Student
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl md:text-5xl font-light mb-8 leading-tight"
                        >
                            <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                                Crafting smart
                            </span>
                            <br />
                            <span className="text-blue-500 font-medium">
                                Projects
                            </span>
                            <br />
                            <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                                -with impact
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className={`text-base md:text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                } mb-12 max-w-xl mx-auto font-light leading-relaxed`}
                        >
                            Austin Paul here — a passionate CSE Data Science learner from SRM IST, building functional web applications, exploring front-end development, and solving real world problems with data.
                        </motion.p>

                        {/* Mobile CTA */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                        >
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={800}
                            >
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                                >
                                    VIEW WORK
                                </motion.button>
                            </Link>

                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={800}
                            >
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`border ${isDarkMode ? "border-gray-700 hover:border-gray-600 text-gray-300" : "border-gray-300 hover:border-gray-400 text-gray-700"
                                        } px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                                >
                                    GET IN TOUCH
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Mobile Social Icons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center space-x-6 mb-8"
                        >
                            {[
                                { icon: FiGithub, href: "https://github.com/Austin-dev-dot" },
                                { icon: FiLinkedin, href: "https://www.linkedin.com/in/austin-paul-79382a23b/" },
                                { icon: Mail, href: "mailto:austinpaulmail04@gmail.com" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -2 }}
                                    className={`p-3 rounded-full transition-colors ${isDarkMode ? "text-gray-400 hover:text-white hover:bg-gray-800" : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                                        }`}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Mobile Tech Stack */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center items-center space-x-6 text-xs uppercase tracking-widest flex-wrap mb-8"
                        >
                            <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>JAVA</span>
                            <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
                            <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>C++</span>
                            <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
                            <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>REACT</span>
                            <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
                            <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>TAILWIND CSS</span>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            animate={{ y: [0, 4, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        >
                            <ArrowDown size={20} className={isDarkMode ? "text-gray-600" : "text-gray-400"} />
                        </motion.div>
                    </motion.div>
                </div>

                {/* ✅ Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
                    {/* Left Column */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="text-left max-w-lg ml-8 lg:ml-16 pt-8"
                    >
                        <motion.div
                            variants={textVariants}
                            className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"
                                } mb-6`}
                        >
                            2nd Year Student
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
                        >
                            <span className={isDarkMode ? "text-white" : "text-gray-900"}>Crafting smart</span>
                            <br />
                            <span className="text-blue-500 font-medium">Projects</span>
                            <br />
                            <span className={isDarkMode ? "text-white" : "text-gray-900"}>-with impact</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                } mb-12 font-light leading-relaxed`}
                        >
                            Austin Paul here — a passionate CSE Data Science learner from SRM IST, building functional web applications, exploring front-end development, and solving real world problems with data.
                        </motion.p>

                        {/* ✅ Desktop CTA Buttons (unchanged except spacing fix) */}
                        <motion.div variants={itemVariants} className="flex gap-6 mb-4">
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={800}
                            >
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                                >
                                    VIEW WORK
                                </motion.button>
                            </Link>

                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={800}
                            >
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`border ${isDarkMode ? "border-gray-700 hover:border-gray-600 text-gray-300" : "border-gray-300 hover:border-gray-400 text-gray-700"
                                        } px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                                >
                                    GET IN TOUCH
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* ✅ FIXED SOCIAL ICONS — now properly placed */}
                        <motion.div
                            variants={itemVariants}
                            className="flex space-x-6 mt-2"
                        >
                            {[
                                { icon: FiGithub, href: "https://github.com/Austin-dev-dot" },
                                { icon: FiLinkedin, href: "https://www.linkedin.com/in/austin-paul-79382a23b/" },
                                { icon: Mail, href: "mailto:austinpaulmail04@gmail.com" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -2 }}
                                    className={`p-3 rounded-full transition-colors ${isDarkMode ? "text-gray-400 hover:text-white hover:bg-gray-800" : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                                        }`}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </motion.div>

                    </motion.div>

                    {/* Right Column - Profile Image */}
                    <motion.div variants={imageVariants} className="relative flex flex-col items-center -mt-8">

                        <motion.div
                            variants={itemVariants}
                            className="flex items-center space-x-6 text-xs uppercase tracking-widest mb-8"
                        >
                            <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>JAVA</span>
                            <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
                            <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>C++</span>
                            <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
                            <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>REACT</span>
                            <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
                            <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>TAILWIND CSS</span>
                        </motion.div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-2xl border border-purple-500/20" />
                            <div className="absolute -inset-6 rounded-2xl border border-cyan-500/15" />

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`w-80 h-80 rounded-2xl overflow-hidden border-4 ${isDarkMode ? "border-gray-800" : "border-gray-300"
                                    } shadow-2xl relative z-10`}
                            >
                                <img
                                    src={PROFILE_PIC}
                                    alt="Austin Paul"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
