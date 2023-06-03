import LevelCard from '../components/LevelCard.jsx';

const languages = [
  {
    title: "Lua",
    level: 3,
    disc: "Since 2017 I mostly worked on games on Roblox Studio, Making these games teached me Lua."
  },
  {
    title: "HTML",
    level: 3,
    disc: "I have learned HTML in my first year on ROC Mondriaan"
  },
  {
    title: "CSS",
    level: 3,
    disc: "I have learned CSS in my first year on ROC Mondriaan"
  },
  {
    title: "Java Script",
    level: 3,
    disc: "I have learned Java Script in my first year on ROC Mondriaan"
  },
  {
    title: "C#",
    level: 2,
    disc: "I have learned C# in my first year on ROC Mondriaan"
  },
  {
    title: "PHP",
    level: 3,
    disc: "I have learned PHP in my third year on ROC Mondriaan, As a raw language but also with symfony."
  },
  {
    title: "Type Script",
    level: 1,
    disc: "I have been into contact with Type Script. Althought haven't used it yet for projects."
  },
  // {
  //   title: "C++",
  //   level: 1,
  // },
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
    level: 3,
    subtitle: "Designer"
  },
  {
    title: "Affinity",
    level: 1,
    subtitle: "Photo"
  },
  {
    title: "Affinity",
    level: 2,
    subtitle: "Publisher"
  },
  
]

function App() {
  return (
    <div>
      <p className="level-section-title">Languages:</p>
      <div className="level-card-container">
        {
          languages.map((current => {
            return <LevelCard title={current.title} level={current.level} disc={current.disc}/>
          }))
        }
      </div>

      <p className="level-section-title">Frameworks:</p>
      <div className="level-card-container">
        {
          frameworks.map((current => {
            return <LevelCard title={current.title} level={current.level}/>
          }))
        }
      </div>

      <p className="level-section-title">Programs:</p>
      <div className="level-card-container">
        {
          programs.map((current => {
            return <LevelCard title={current.title} level={current.level} subtitle={current.subtitle}/>
          }))
        }
        </div>
    </div>
  );
}

export default App;