import { useState } from "react";
import "../Css/QuoraContent.css";
import Post from "./Post";
import Posts from "./Posts";
import Modal from 'react-modal'


const QuoraContent = () => {
  const [ismodalopen, setIsModalOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '500px' ,
      height: 'auto'
    },
  };
  Modal.setAppElement('#root');
  return (
    <div className='main-box'>
      <div className='quorabox'>
        <div className='quorabox-info'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            fill='currentColor'
            className='bi bi-person'
            viewBox='0 0 16 16'
          >
            <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z' />
          </svg>
        </div>

        <div className='quorabox-write' onClick={()=> setIsModalOpen(true)}>
          <h6 >What is your Question?</h6>
        </div>
        <Modal 
isOpen={ismodalopen}
onRequestClose={()=> setIsModalOpen(false)}
shouldCloseOnEsc= {true}
ariaHideApp= {true}
style={customStyles}
>

<div
        className='modal-title d-flex '
        style={{ marginBottom: "-10px" }}
      >
        <h5>Add Question</h5>
        <h5>Share Link</h5>
      </div>

      <hr />

      <div className='modal-info d-flex  align-content-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          fill='currentColor'
          className='bi bi-person'
          viewBox='0 0 16 16'
        >
          <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z' />
        </svg>

        <div className='modal-scope d-flex  align-items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-people-fill'
            viewBox='0 0 16 16'
          >
            <path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
          </svg>

          <h5 style={{ fontSize: "12px" }}> <span> Public </span></h5>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='17'
            height='17'
            fill='currentColor'
            className='bi bi-arrow-down-short'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z'
            />
          </svg>
        </div>
      </div>

      <div className='modal-field d-flex justify-content-center'>
       <textarea cols="30" rows="10" style={{
        width:'95%' , 
        height: 'auto',
        margin: '5px'
       }}></textarea>
      </div>

      <div className='modal-buttons d-flex flex-column align-items-center  mt-2'>
        <button className=' btn btn-dark  addQuestion  mb-1'>Add Question</button>
        <button type='submit' className='btn btn-danger cancel' onClick={()=> setIsModalOpen(false)} >
          Cancel
        </button>
      </div>


</Modal>
      </div>
<div className="post-container mt-3">
      <Post/>
</div>
<div className="post-container mt-3 mb-2">
      
      <Posts/>
</div>
    </div>
  );
};
export default QuoraContent;
