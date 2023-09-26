import '../Css/NotificationSidebar.css'

const NotificationSidebar = () => {
  return (
    <div className='notification-sidebar  '>

        <div className="filter">
        <h6>Filters</h6>
        </div>

      <div className='sidebar-options '>
        <p>All Notification</p>
      </div>

      <div className='sidebar-options'>
        <p>Stories</p>
      </div>
      <div className='sidebar-options'>
        <p>Questions</p>
      </div>

      <div className='sidebar-options'>
        <p>People Updates</p>
      </div>

      <div className='sidebar-options'>
        <p>Upvotes</p>
      </div>

      <div className='sidebar-options'>
        <p>Your Profile</p>
      </div>

      <div className='sidebar-options'>
        <p>Content</p>
      </div>
    </div>
  );
};
export default NotificationSidebar;
