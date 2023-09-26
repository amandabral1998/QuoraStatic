import "../Css/Post.css";

const Post = () => {
  return (
    <div className='post d-flex flex-column p-2 mb-4'>
      <div className='post-info  d-flex  align-items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='bi bi-person'
          viewBox='0 0 16 16'
        >
          <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z' />
        </svg>
        <h6 >Sachin <span style={{fontSize:'13px'}}>4y</span></h6>
        
      </div>

      <div className='post-body d-flex justify-content-between  align-items-center'>
        <h6 className='q-name mb-2 mt-1 '>
          What is your favorite book, and why do you love it?
        </h6>
      </div>

      <div className='question-image d-flex justify-content-center mb-2 mt-2 '>
        <img src='https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
      </div>

      <div className='answers'>
        <p className="pl-3  pr-3">
          One of the most beloved books of all time is To Kill a Mockingbird by
          Harper Lee. It is a classic novel that explores themes of racial
          injustice, morality, and empathy. The story is set in the American
          South during the 1930s and follows the experiences of Scout Finch, a
          young girl, and her father, Atticus Finch, a lawyer who defends a
          black man wrongly accused of raping a white woman. People love this
          book for its compelling characters, powerful message, and its ability
          to provoke deep thought and discussion about important social issues.
          It is often considered a must-read for its timeless relevance and
          impact on literature and society.
        </p>
      </div>
      <div className='postFooter d-flex align-items-center pl-2'>
        <div className='postfooter-action '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-arrow-90deg-up'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-arrow-90deg-down'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z'
            />
          </svg>
        </div>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          fill='currentColor'
          className='bi bi-repeat'
          viewBox='0 0 16 16'
        >
          <path d='M11 5.466V4H5a4 4 0 0 0-3.584 5.777a.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777a.5.5 0 0 1 .225-.67Z' />
        </svg>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          fill='currentColor'
          className='bi bi-chat-left'
          viewBox='0 0 16 16'
        >
          <path d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
        </svg>

        <div className='postfooter-left  d-flex '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            fill='currentColor'
            className='bi bi-share'
            viewBox='0 0 16 16'
          >
            <path d='M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z' />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            fill='currentColor'
            className='bi bi-three-dots '
            viewBox='0 0 16 16'
          >
            <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
          </svg>
        </div>
      </div>

     
    </div>
  );
};

export default Post;
