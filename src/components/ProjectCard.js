const ProjectCard = ({data}) => {
  return (
    <div className="project-card">
      <img className="tumbnail" src={data.img} alt="tumbnail" />
      <div className="body">
        <p className="title">{data.title}</p>
        <p className="description">{data.description}</p>
        <div className="tag-container">
            {data.tags.map(tag => {
                return <p className="tag" style={{color: tag.color}}>{tag.text}</p>
            })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
