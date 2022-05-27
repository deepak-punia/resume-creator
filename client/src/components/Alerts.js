import { useSelector, useDispatch } from 'react-redux';
import {Alert} from 'react-bootstrap';

const Alerts = () => {
    const alert = useSelector(state=>state.alert);
  return (
    alert !==null && alert.length > 0 && alert.map(item=>(
        <Alert key={item.id} variant={item.alertType}>
      {item.msg}
    </Alert>
    ))
  )
}


export default Alerts;