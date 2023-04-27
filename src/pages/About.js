import LevelCard from '../components/LevelCard.jsx';

const languages = [
  {
    title: "Lua",
    level: 3
  },
  {
    title: "HTML",
    level: 3
  },
  {
    title: "CSS",
    level: 3
  },
  {
    title: "Java Script",
    level: 3
  },
  {
    title: "C#",
    level: 2
  },
  {
    title: "PHP",
    level: 3
  },
  {
    title: "Type Script",
    level: 1
  },
  {
    title: "C++",
    level: 1
  },
]

const frameworks = [
  {
    title: "Vue",
    level: 1
  },
  {
    title: "React",
    level: 2
  },
  {
    title: "Symfony",
    level: 3
  },
  
]

const programs = [
  {
    title: "Roblox Studio",
    level: 4
  },
  {
    title: "VS Code",
    level: 3
  },
  {
    title: "Visual Studio",
    level: 3
  },
  {
    title: "Unreal Engine",
    level: 2
  },
  {
    title: "Affinity",
    level: 3
  },
  {
    title: "Affinity",
    level: 1
  },
  {
    title: "Affinity",
    level: 2
  },
  
]

function App() {
  return (
    <div>
      <p>Languages I am experianced with and my understanding level of them</p>
      <p>Languages:</p>
      <div className="level-card-container">
        {
          languages.map((current => {
            return <LevelCard title={current.title} level={current.level}/>
          }))
        }
      </div>

      <p>Frameworks I am experianced with and my understanding level of them</p>
      <p>Frameworks:</p>
      <div className="level-card-container">
        {
          frameworks.map((current => {
            return <LevelCard title={current.title} level={current.level}/>
          }))
        }
      </div>

      <p>Programs I am experianced with and my understanding level of them</p>
      <p>Programs:</p>
      <div className="level-card-container">
        {
          programs.map((current => {
            return <LevelCard title={current.title} level={current.level}/>
          }))
        }
        </div>
    </div>
  );
}

export default App;