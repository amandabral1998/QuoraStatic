import WidgetContent from "./WidgetContent"
import '../css/Widget.css'
const Widget = () => {
  return (
    <div className="widget d-flex flex-column  justify-content-center align-items-center  ">
      <div className="widget-header">
        <h5 style={{fontSize:'15px'}}>Spaces to Follow</h5>
        <hr />
      </div>
      <div className="widget-content">
        <WidgetContent/>
      </div>
    </div>
  )
}
export default Widget