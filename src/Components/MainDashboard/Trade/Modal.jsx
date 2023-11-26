import './modal.css';
import Lottie from 'react-lottie';
import animationData from './transdone.json';
import "@fontsource/rubik";
import "@fontsource/poppins";
import '@fortawesome/fontawesome-free/css/all.css';


const Modal = ({modal,onClose}) => {

  if(!modal){
    return null;
  }
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <div className='modalWrapper'>
      <div className="modal">
      <div className="btnClose">
        <i onClick={onClose} className="fa-regular fa-circle-xmark fa-lg"></i>
      </div>
        <Lottie 
	    options={defaultOptions}
        height={200}
        width={250}
        className="lotties"
      />
        <h1 className='modalheading'>Transaction Done</h1>
      </div>
    </div>
  )
}

export default Modal
