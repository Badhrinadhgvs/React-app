import './App.css'
import ClockSlogan from './Components/Clockslogan';
import Clockhead from './Components/Clockhead';
import Currenttime from './Components/Currenttime';
import 'bootstrap/dist/css/bootstrap.min.css'
function App()
{
  return <div>
    <center>
    <Clockhead></Clockhead>
    <ClockSlogan></ClockSlogan>
    <Currenttime></Currenttime>
    </center>
  </div>
}


export default App;