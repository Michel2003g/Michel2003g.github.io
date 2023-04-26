const levels = [
    "Novice",
    "Intermediate",
    "Proficient",
    "Expert",
    "Master"
]


const LevelCard = ({title, level}) => {
    return (
      <div className="level-card">
        <p className="title">{title}</p>
        <div className="bar-holder">
            <div className="bar" style={{width: + (level * 20) + "%"}}></div>
        </div>
        <p className="level">{levels[level-1]}</p>
      </div>
    )
  }
  
  export default LevelCard
  