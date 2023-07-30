import Modal from '../components/Modal.jsx';
import {useState} from 'react';

const levels = [
    "Novice",
    "Intermediate",
    "Proficient",
    "Expert",
    "Master"
]

const LevelCard = ({title, level, disc, subtitle}) => {


    const [openModal, setModal] = useState(false);


    return (
      
      <>
        <button className="level-card" onClick={() => setModal(true)} key={title}>
          <p className="level-title">{title} <span className='level-subtitle'>{subtitle}</span></p>
          <div className="bar-holder">
              <div className="bar" style={{width: + (level * 20) + "%"}}></div>
          </div>
          <p className="level">{levels[level-1]}</p>
        </button>
        <Modal openModal={openModal} buttons={<button className="closeButton" onClick={() => setModal(false)}>Close</button>}>
          <p className="level-title white">{title} <span className='level-subtitle'>{subtitle}</span></p>
          <div className="bar-holder">
              <div className="bar" style={{width: + (level * 20) + "%"}}></div>
          </div>
          <p className="level white">{levels[level-1]}</p>
          <p className='modal-disc white'>{disc}</p>
        </Modal>
      </>

    )
  }
  
  export default LevelCard
  