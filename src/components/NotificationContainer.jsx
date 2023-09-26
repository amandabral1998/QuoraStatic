import NotificationSidebar from '../components/NotificationSidebar'
import NotificationCenter from './NotificationCenter'
import '../Css/NotificationCenter.css'

export const NotificationContainer = () => {
  return (
    <div className='notificationcontainer d-flex justify-content-center mt-4 '>
    <NotificationSidebar/>
    <NotificationCenter/>
    </div>
  )
}