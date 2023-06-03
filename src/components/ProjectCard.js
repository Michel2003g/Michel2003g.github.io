import Modal from '../components/Modal.jsx';
import {useState} from 'react';

const ProjectCard = ({data}) => {

  const [openModal, setModal] = useState(false);

  return (
    <>
      <button className="project-card" onClick={() => setModal(true)} key={data.title}>
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
      </button>
      <Modal openModal={openModal} buttons={<button className="closeButton" onClick={() => setModal(false)}>Close</button>} type="project">
        <div className='project-image-container'>
          <div className='project-image' style={{backgroundImage: 'url('+data.img+')'}}></div>
        </div>
        <p className="title">{data.title}</p>
        <div className="tag-container">
              {data.tags.map(tag => {
                  return <p className="tag" style={{color: tag.color}}>{tag.text}</p>
              })}
          </div>
        <p>{data.content}</p>
      </Modal>
    </>
  )
}

export default ProjectCard
