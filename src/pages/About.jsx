import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Award } from 'lucide-react';
import AboutIntro from '../components/about/AboutIntro';
import AboutJourney from '../components/about/AboutJourney';
import AboutSkills from '../components/about/AboutSkills';
import AboutTechnicalExpertise from '../components/about/AboutTechnicalExpertise';
import AboutProjects from '../components/about/AboutProjects';
import AboutInternship from '../components/about/AboutInternship';
import AboutStrengths from '../components/about/AboutStrengths';
import AboutInterests from '../components/about/AboutInterests';
import AboutCareer from '../components/about/AboutCareer';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'PHP', 'Java', 'C++'],
    icon: Code,
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Vue.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
    icon: Award,
  },
  {
    title: 'Backend',
    skills: ['Laravel', 'PHP', 'REST APIs', 'Authentication'],
    icon: Target,
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'XAMPP'],
    icon: Lightbulb,
  },
];

const aboutContent = {
  intro: (
    <>
      <p>
        Technology has always been more than a field of study for me—it is a platform for innovation, problem-solving, and continuous learning. My name is <strong>Jobel V. Golde</strong>, and I hold a <strong>Bachelor of Science in Information Technology (BSIT)</strong> from <strong className="linkable-text">Sorsogon State University – Bulan Campus</strong>.
      </p>
      <p>
        Throughout my academic journey and hands-on experience, I developed a strong foundation in <span className="linkable-text">software development</span>, <span className="linkable-text">web technologies</span>, <span className="linkable-text">database management</span>, <span className="linkable-text">networking</span>, and <span className="linkable-text">IT support</span>. I enjoy transforming ideas into practical digital solutions that improve efficiency, simplify processes, and deliver meaningful value to users.
      </p>
      <p>
        I believe technology is not simply about writing code. It is about understanding challenges, designing effective solutions, and creating systems that positively impact individuals and organizations. This philosophy continues to guide my professional growth as I pursue opportunities in the ever-evolving field of Information Technology.
      </p>
    </>
  ),
  journey: (
    <>
      <p>
        My interest in technology began with a simple curiosity about how websites, applications, and computer systems worked behind the scenes. That curiosity eventually grew into a passion for designing, developing, and maintaining software solutions.
      </p>
      <p>During my university years, I studied core areas of Information Technology, including:</p>
      <ul>
        <li><span className="linkable-text">Software Development</span></li>
        <li><span className="linkable-text">Web Development</span></li>
        <li><span className="linkable-text">Database Management</span></li>
        <li><span className="linkable-text">Computer Networking</span></li>
        <li><span className="linkable-text">System Analysis and Design</span></li>
        <li>Information Systems</li>
        <li><span className="linkable-text">Software Engineering</span></li>
      </ul>
      <p>
        Each project and academic challenge strengthened not only my technical abilities but also my analytical thinking, problem-solving skills, communication, and teamwork.
      </p>
      <p>
        I came to understand that successful software development extends beyond programming. It requires careful planning, collaboration, testing, documentation, and continuous improvement to create reliable and user-centered solutions.
      </p>
    </>
  ),
  strengths: (
    <>
      <p>In addition to my technical skills, I value the professional qualities that contribute to successful collaboration and continuous improvement.</p>
      <p>My strengths include:</p>
      <ul>
        <li>Problem-solving and analytical thinking</li>
        <li>Continuous learning and adaptability</li>
        <li>Attention to detail</li>
        <li>Effective communication</li>
        <li>Team collaboration</li>
        <li>Time management</li>
        <li>Professional responsibility</li>
        <li>Critical thinking</li>
        <li>Strong work ethic</li>
      </ul>
      <p>
        I enjoy learning new technologies and embracing challenges that allow me to grow both personally and professionally.
      </p>
    </>
  ),
  technicalExpertise: (
    <>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Programming Languages</h3>
          <p>
            I have built experience with a variety of programming languages, frameworks, databases, and development tools used in modern software development.
          </p>
          <ul>
            <li><span className="linkable-text">JavaScript</span></li>
            <li><span className="linkable-text">PHP</span></li>
            <li><span className="linkable-text">Java</span></li>
            <li><span className="linkable-text">C++</span></li>
          </ul>
          <p className="text-gray-700 mt-4">
            These languages have enabled me to build applications across different environments while strengthening my understanding of programming principles and software architecture.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h3>
          <p>
            Web development is my primary area of interest. I enjoy building responsive, scalable, and user-friendly applications that combine intuitive interfaces with efficient backend functionality.
          </p>
          <p>Technologies I work with include:</p>
          <ul>
            <li><span className="linkable-text">HTML5</span></li>
            <li><span className="linkable-text">CSS3</span></li>
            <li><span className="linkable-text">Tailwind CSS</span></li>
            <li><span className="linkable-text">Bootstrap</span></li>
            <li><span className="linkable-text">Laravel</span></li>
            <li><span className="linkable-text">React.js</span></li>
            <li><span className="linkable-text">Vue.js</span></li>
            <li><span className="linkable-text">Inertia.js</span></li>
          </ul>
          <p className="text-gray-700 mt-4">
            My experience covers both frontend and backend development, allowing me to build complete web applications from concept to deployment.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Database Management</h3>
          <p>I have experience designing and managing relational databases using:</p>
          <ul>
            <li><span className="linkable-text">MySQL</span></li>
            <li>phpMyAdmin</li>
          </ul>
          <p className="text-gray-700 mt-4">
            My database experience includes schema design, query optimization, data management, and integration with web applications.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Development Tools</h3>
          <p>My development workflow regularly involves:</p>
          <ul>
            <li><span className="linkable-text">Visual Studio Code</span></li>
            <li><span className="linkable-text">Git</span></li>
            <li><span className="linkable-text">GitHub</span></li>
            <li><span className="linkable-text">Postman</span></li>
            <li><span className="linkable-text">XAMPP</span></li>
            <li><span className="linkable-text">Figma</span></li>
          </ul>
          <p className="text-gray-700 mt-4">
            These tools support efficient development, version control, API testing, interface design, and collaborative software development.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Technical Skills</h3>
          <p>Beyond programming, I have practical knowledge in:</p>
          <ul>
            <li><span className="linkable-text">REST API Development and Integration</span></li>
            <li>CRUD Application Development</li>
            <li><span className="linkable-text">Authentication and Authorization</span></li>
            <li>JSON Data Handling</li>
            <li><span className="linkable-text">Version Control using Git</span></li>
            <li>Responsive Web Design</li>
            <li>Debugging and Troubleshooting</li>
            <li><span className="linkable-text">Linux Fundamentals</span></li>
            <li>Basic LAN/WAN Networking</li>
            <li>IP Addressing</li>
            <li><span className="linkable-text">Wireshark</span></li>
            <li>Basic UI/UX Design Principles</li>
            <li>AI-assisted Software Development</li>
            <li>Technical Documentation</li>
          </ul>
          <p className="text-gray-700 mt-4">
            I continuously expand my knowledge by exploring new technologies, development practices, and industry trends.
          </p>
        </div>
      </div>
    </>
  ),
  projects: (
    <>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Bulan Lost and Found System</h3>
          <p>
            A web-based platform designed to help manage lost-and-found items within the community. The system focused on efficient record management, user interaction, and secure information handling.
          </p>
          <p><strong>Technologies:</strong> <span className="linkable-text">Laravel</span>, <span className="linkable-text">Vue.js</span>, <span className="linkable-text">Inertia.js</span>, <span className="linkable-text">Bootstrap</span>, <span className="linkable-text">MySQL</span></p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">DUGTONG (Dugo Ko, Tulong Ko)</h3>
          <p>
            A Blood Donor Profiling and Management System developed to help organize donor information and streamline blood donation management for the Province of Sorsogon.
          </p>
          <p>
            This project emphasized <span className="linkable-text">database management</span>, user accessibility, and efficient record keeping.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Portfolio and Web Applications</h3>
          <p>
            I have also developed personal and academic web applications to strengthen my experience with modern web technologies, responsive design, API integration, and frontend development using <span className="linkable-text">React.js</span> and <span className="linkable-text">Laravel</span>.
          </p>
          <p>
            These projects allowed me to apply best practices in software architecture, database integration, debugging, testing, and user experience design.
          </p>
        </div>
      </div>
    </>
  ),
  internship: (
    <>
      <p>
        My internship provided valuable industry exposure where I was able to apply classroom knowledge in a professional environment while supporting daily institutional operations.
      </p>
      <p>During my internship, I contributed to several technical and administrative initiatives, including:</p>
      <ul>
        <li>Developed an internal <strong>Account Code System</strong> using <span className="linkable-text">Next.js</span>, <span className="linkable-text">Tailwind CSS</span>, and <span className="linkable-text">Turso</span> to manage accounting categories for various school transactions.</li>
        <li>Assisted in organizing and managing digital student records, including SF10 documentation.</li>
        <li>Provided technical assistance and supported office operations involving information management.</li>
        <li>Designed digital materials and promotional content for institutional events, including graduation and alumni activities.</li>
        <li>Collaborated with staff to improve workflow efficiency through digital solutions.</li>
      </ul>
      <p>
        These experiences strengthened my technical competence while reinforcing the importance of communication, professionalism, adaptability, and delivering quality work within deadlines.
      </p>
    </>
  ),
  interests: (
    <>
      <p>
        Outside of work and academics, I enjoy activities that encourage creativity and lifelong learning.
      </p>
      <p>
        <strong>Coding</strong> is both my profession and one of my favorite hobbies. I enjoy exploring new frameworks, experimenting with emerging technologies, and building personal projects that expand my skills.
      </p>
      <p>
        I also enjoy <strong>playing the guitar</strong>, which provides a creative balance and allows me to relax while developing patience, discipline, and creativity.
      </p>
    </>
  ),
  career: (
    <>
      <p>
        My goal is to establish a successful career in Information Technology by contributing to organizations that embrace innovation, collaboration, and continuous improvement.
      </p>
      <p>I am particularly interested in opportunities involving:</p>
      <ul>
        <li><span className="linkable-text">Software Development</span></li>
        <li><span className="linkable-text">Web Development</span></li>
        <li>IT Support</li>
        <li>Technical Support</li>
        <li><span className="linkable-text">System Administration</span></li>
        <li>Business Systems</li>
        <li>Information Systems</li>
        <li>Office and Technology Operations</li>
      </ul>
      <p>
        As technology continues to evolve, I remain committed to expanding my expertise in modern software development, cloud technologies, artificial intelligence, and emerging digital solutions.
      </p>
      <p>
        I aspire to become a versatile IT professional capable of delivering practical, scalable, and impactful solutions across different industries.
      </p>
    </>
  ),
};

export default function About() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="about" className="scroll-mt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600">
            Discover my journey, skills, and passion for technology
          </p>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Introduction */}
        <AboutIntro itemVariants={itemVariants} aboutContent={aboutContent} />

        {/* Journey Section */}
        <AboutJourney itemVariants={itemVariants} aboutContent={aboutContent} />

        {/* Skills Section */}
        <AboutSkills itemVariants={itemVariants} skillCategories={skillCategories} />

        {/* Technical Expertise Section */}
        <AboutTechnicalExpertise itemVariants={itemVariants} aboutContent={aboutContent} />

        {/* Projects Section */}
        <AboutProjects itemVariants={itemVariants} aboutContent={aboutContent} />

        {/* Internship Section */}
        <AboutInternship itemVariants={itemVariants} aboutContent={aboutContent} />

        {/* Strengths Section */}
        <AboutStrengths itemVariants={itemVariants} aboutContent={aboutContent} />

        {/* Interests Section */}
        <AboutInterests itemVariants={itemVariants} aboutContent={aboutContent} />

        {/* Career Section */}
        <AboutCareer itemVariants={itemVariants} aboutContent={aboutContent} />
      </motion.section>
    </div>
  );
}
