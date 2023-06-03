import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard';

function App() {
  return (
    <div className="Projects">
      <div className='project-container'>
        {
          projects.map((current => {
              return <ProjectCard data={current}/>
          }))
        }
      </div>
    </div>
  );
}

export default App;