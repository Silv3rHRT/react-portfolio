interface ProjectProps {
    title: string;
    description: string;
    link: string;
  }
  
  const Project: React.FC<ProjectProps> = ({ title, description, link }) => {
    return (
      <div className="project-card border p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    );
  };
  
  export default Project;