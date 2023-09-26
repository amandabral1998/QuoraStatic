import QuoraContent from "./QuoraContent";
import Sidebar from "./Sidebar";
import Widget from '../components/Widget'

import "../Css/Content.css";

const Content = () => {
  return (
    <div className=' container d-flex  content'>

      <Sidebar className='sidebar' />

      <QuoraContent className='Quora-content' />

      <Widget className='widget-container'  />
    </div>
  );
};
export default Content;
