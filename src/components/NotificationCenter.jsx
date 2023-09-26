import "../Css/NotificationCenter.css";

const NotificationCenter = () => {
  return (
    <div className='notification-center'>
      <div className='notificationLine d-flex justify-content-between'>
        <div className='name'>
          {" "}
          <h6>Notification</h6>{" "}
        </div>
        <div className='right d-flex '>
          <p>Mark All as read</p>
          <p>Settings</p>
        </div>
      </div>

      <div className='notifications d-flex p-2'>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWF0ZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
            alt='UserIcon'
            width={"25px"}
            height={"25px"}
            style={{ borderRadius: "5px", objectFit: "cover" }}
          />
        </div>
        <div className='details'>
          <div className='userdetails' style={{ fontSize: "12px" }}>
            {" "}
            <p>
              <span>Financial Updates</span>{" "}
              <span> Posted in a space you might like</span>{" "}
              <span>September 18</span>{" "}
            </p>{" "}
          </div>

          <div className="notify">
          If the CTC is 35 LPA, what is the in-hand salary in NCR?
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotificationCenter;
