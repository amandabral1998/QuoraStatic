import "../Css/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from 'react-modal'



const Header = () => {
  const [ismodalopen, setIsModalOpen] = useState(false);
  Modal.setAppElement('#root');
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '60vw' ,
      height: 'auto'
    },
  };
 
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center mt-3'>
      
        <div className='quora-logo mr-3'>
        <Link to={"/"}  style={{textDecoration:'none'}}>
          <h2 className='quora-title '>Quora</h2>
      </Link>
        </div>
      <div className='icons d-flex '>
        <Link to={"/"}>
          <div className='icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z' />
            </svg>
          </div>
        </Link>
        <div className='icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
            <path d='M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
          </svg>
        </div>
        <div className='icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
            <path
              fillRule='evenodd'
              d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
            />
          </svg>
        </div>
        <div className='icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
          </svg>
        </div>
        <div className='icon mr-3'>
          <Link to={"/notification"}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3-6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z' />
            </svg>
          </Link>
        </div>
      </div>
      <div className='search d-flex align-items-center mr-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
        </svg>
        <input
          type='text'
          className='search-field'
          placeholder='Search Quora'
        />
      </div>
      <div className='addBtn'>
        <button className='btn btn-danger addQue'  onClick={()=> setIsModalOpen(true)}>
          Add Question
        </button>
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
        <h6>Add Question</h6>
        <h6>Share Link</h6>
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
  );
};
export default Header;

